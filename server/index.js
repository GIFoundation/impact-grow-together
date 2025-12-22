import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  console.error("Missing STRIPE_SECRET_KEY in environment");
}

const stripe = new Stripe(stripeSecret, { apiVersion: "2023-11-15" });

const PORT = process.env.PORT || 4242;
const DOMAIN = process.env.DOMAIN || "http://localhost:5173";

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount, donationType, formData } = req.body;

    const numericAmount = Number(amount);
    if (!numericAmount || numericAmount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const unitAmount = Math.round(numericAmount * 100); // GBP pence or cents

    let lineItem;
    if (donationType === "monthly") {
      lineItem = {
        price_data: {
          currency: "gbp",
          product_data: {
            name: "Monthly Donation",
            description: "Support GIF monthly donation",
          },
          unit_amount: unitAmount,
          recurring: { interval: "month" },
        },
        quantity: 1,
      };
    } else {
      lineItem = {
        price_data: {
          currency: "gbp",
          product_data: {
            name: "One-time Donation",
            description: "Support GIF one-time donation",
          },
          unit_amount: unitAmount,
        },
        quantity: 1,
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: donationType === "monthly" ? "subscription" : "payment",
      line_items: [lineItem],
      success_url: `${DOMAIN}/?donation=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/?donation=cancelled`,
      metadata: {
        donor_name: formData?.name || "",
        donor_email: formData?.email || "",
        anonymous: String(Boolean(formData?.anonymous)),
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Stripe server running on port ${PORT}`);
  console.log(
    `Make sure STRIPE_SECRET_KEY is set. Visiting ${DOMAIN} after checkout.`
  );
});
