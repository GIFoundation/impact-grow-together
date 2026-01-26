import React, { useState, useEffect } from "react";
// import { Footer } from "react-day-picker";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("our-commitment");

  // Section IDs mapping
  const sections = [
    { id: "our-commitment", title: "Our Commitment to your Privacy" },
    { id: "what-we-collect", title: "What Information we Collect" },
    { id: "how-we-use", title: "How we use your Information" },
    { id: "legal-basis", title: "Legal Basis for Processing your Information" },
    { id: "who-we-share", title: "Who we Share your Information with" },
    { id: "your-rights", title: "Your Rights" },
    { id: "data-retention", title: "Data Retention" },
    { id: "cookies", title: "Cookies and Tracking Technologies" },
    { id: "security", title: "Security" },
    { id: "international-transfers", title: "International Data Transfers" },
    { id: "childrens-privacy", title: "Children's Privacy" },
    { id: "third-party-links", title: "Third-Party Links" },
    { id: "changes-to-policy", title: "Changes to this Privacy Policy" },
    { id: "contact-us", title: "Contact Us" },
    {
      id: "regional-information",
      title: "Additional Information for Specific Regions",
    },
    { id: "glossary", title: "Glossary" },
    { id: "summary", title: "Summary" },
  ];

  const handleNavigationClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />
      <header className="bg-white border-b" style={{ marginTop: "90px" }}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-600">Global Impact Foundations</p>
          <div className="mt-4 text-sm text-gray-500">
            <p>Last Updated: January 2026</p>
            <p>Version: 1.0</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation - Desktop */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6 border hidden lg:block">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Contents
              </h2>
              <nav
                className="space-y-2"
                style={{ width: "25%", backgroundColor: "red" }}
              >
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigationClick(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className="lg:hidden mb-6">
              <select
                value={activeSection}
                onChange={(e) => handleNavigationClick(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Jump to section...
                </option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-8 border">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 leading-relaxed">
                  At Global Impact Foundation (GIF), we believe in transparency
                  and respect for your privacy. This Privacy Policy explains how
                  we collect, use, and protect your personal information. We
                  comply with the General Data Protection Regulation (GDPR), and
                  other applicable privacy laws.
                </p>
              </div>

              {/* Section 1 */}
              <section id="our-commitment" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Commitment to your Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Global Impact Foundation (GIF), we believe in transparency
                  and respect for your privacy. This Privacy Policy explains how
                  we collect, use, and protect your personal information. We
                  comply with the General Data Protection Regulation (GDPR), and
                  other applicable privacy laws.
                </p>
              </section>

              {/* Section 2 */}
              <section id="what-we-collect" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What Information we Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information you provide directly to us and
                  information collected automatically when you interact with our
                  website, communications and services.
                </p>

                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Information you Provide:
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you contact us, sign up for our newsletter, register
                    for events, donate, volunteer, or participate in our impact
                    programs, we collect information such as your name, email
                    address, organization name, role, phone number, and details
                    about your interest in social impact, community initiatives,
                    or donation preferences.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Information Collected Automatically:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you visit our website, we collect information about
                    your device and how you interact with our site
                    (www.global-impact-foundation.org). This includes your IP
                    address, browser type, pages visited, time spent on pages,
                    and referring website. We use cookies and similar tracking
                    technologies to enhance your experience and understand how
                    our website is used.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="how-we-use" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How we use your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use your information to provide, improve, and personalize
                  our services. Specifically, we use your data to:
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <span className="font-medium">Deliver our Services:</span>{" "}
                    Respond to your inquiries, process donations via Stripe,
                    facilitate volunteer sign-ups, deliver events and workshops,
                    and provide ongoing support for our community programmes.
                  </li>
                  <li>
                    <span className="font-medium">Communicate with you:</span>{" "}
                    Send you emails about GIF updates, impact reports, events,
                    and resources—but only with your explicit consent. We
                    respect your preferences and make it easy to unsubscribe or
                    update your communication preferences at any time.
                  </li>
                  <li>
                    <span className="font-medium">Improve Our Offerings:</span>{" "}
                    Understand how you use our website and services so we can
                    improve our programmes, create better content, and develop
                    new offerings that meet your needs.
                  </li>
                  <li>
                    <span className="font-medium">
                      Marketing and Promotion:
                    </span>{" "}
                    Share information about GIF events, donation opportunities,
                    and impact stories—only to those who have explicitly
                    consented to receive marketing communications.
                  </li>
                  <li>
                    <span className="font-medium">Legal Compliance:</span>{" "}
                    Comply with legal obligations, enforce our agreements, and
                    protect against fraud or security issues.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="legal-basis" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Legal Basis for Processing your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under GDPR, we process your information based on the following
                  legal grounds:
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-medium">Your Consent:</span> When you
                    explicitly agree to receive communications from us or
                    participate in our programmes, we process your information
                    based on your consent. You can withdraw this consent at any
                    time.
                  </li>
                  <li>
                    <span className="font-medium">Contractual Necessity:</span>{" "}
                    When you donate or sign up to volunteer, we process your
                    information to fulfill our agreement with you.
                  </li>
                  <li>
                    <span className="font-medium">Legitimate Interests:</span>{" "}
                    We process information to improve our services, prevent
                    fraud, and maintain website security. These interests are
                    balanced against your privacy rights.
                  </li>
                  <li>
                    <span className="font-medium">Legal Obligation:</span> We
                    process information when required by law or regulation.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="who-we-share" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Who we Share your Information with
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or share your personal information with
                  third parties for their marketing purposes.
                </p>

                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Service Providers:
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information with trusted service providers
                    who help us deliver our services, such as email marketing
                    platforms, webinar hosting services, and payment processors.
                    These providers are contractually obligated to protect your
                    information and use it only for the purposes we specify.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Legal Requirements:
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may disclose your information if required by law, court
                    order, or government request.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Business Transfers:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If GIF is acquired or merged with another organization, your
                    information may be transferred as part of that transaction.
                    We will notify you of any such change and any choices you
                    may have regarding your information.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="your-rights" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under GDPR and other privacy laws, you have the following
                  rights:
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-medium">Right to Access:</span> You
                    have the right to request a copy of the personal information
                    we hold about you.
                  </li>
                  <li>
                    <span className="font-medium">Right to Correction:</span>{" "}
                    You have the right to request that we correct any inaccurate
                    or incomplete information we hold about you.
                  </li>
                  <li>
                    <span className="font-medium">Right to Deletion:</span> You
                    have the right to request that we delete your personal
                    information, subject to certain exceptions (such as when we
                    have a legal obligation to retain it).
                  </li>
                  <li>
                    <span className="font-medium">
                      Right to Restrict Processing:
                    </span>{" "}
                    You have the right to request that we limit how we use your
                    information.
                  </li>
                  <li>
                    <span className="font-medium">
                      Right to Data Portability:
                    </span>{" "}
                    You have the right to request that we provide your
                    information in a portable format that you can transfer to
                    another organization.
                  </li>
                  <li>
                    <span className="font-medium">Right to Object:</span> You
                    have the right to object to our processing of your
                    information, including for marketing purposes.
                  </li>
                  <li>
                    <span className="font-medium">
                      Right to Withdraw Consent:
                    </span>{" "}
                    If we process your information based on your consent, you
                    have the right to withdraw that consent at any time.
                    Withdrawing consent does not affect the lawfulness of
                    processing before withdrawal.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at
                  [admin@global-impact-foundation.org].
                </p>
              </section>

              {/* Section 7 */}
              <section id="data-retention" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary
                  to provide our services and fulfill the purposes outlined in
                  this Privacy Policy.
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-medium">Email Subscribers:</span> We
                    retain your email address for as long as you remain
                    subscribed to our communications. Once you unsubscribe, we
                    delete your email address within 30 days.
                  </li>
                  <li>
                    <span className="font-medium">Donors and Volunteers:</span>{" "}
                    We retain information about donors and volunteers for the
                    duration of our engagement plus three years, to comply with
                    legal and tax obligations.
                  </li>
                  <li>
                    <span className="font-medium">Website Visitors:</span> We
                    retain website analytics data for up to 14 months.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  If you request deletion of your information, we will delete it
                  within 30 days, unless we have a legal obligation to retain
                  it.
                </p>
              </section>

              {/* Section 8 */}
              <section id="cookies" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website uses cookies and similar tracking technologies to
                  enhance your experience and understand how you use our site.
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-medium">Essential Cookies:</span>{" "}
                    These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation,
                    donation forms, and access to secure areas.
                  </li>
                  <li>
                    <span className="font-medium">Analytics Cookies:</span> We
                    use analytics tools (such as Google Analytics) to understand
                    how visitors use our website. This helps us improve our
                    content and user experience.
                  </li>
                  <li>
                    <span className="font-medium">Marketing Cookies:</span> We
                    may use marketing cookies to track your interactions with
                    our content and show you relevant advertisements on other
                    websites.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  You can control cookie preferences through your browser
                  settings. Most browsers allow you to refuse cookies or alert
                  you when cookies are being sent. However, blocking cookies may
                  affect your ability to use certain features of our website.
                </p>
              </section>

              {/* Section 9 */}
              <section id="security" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We take the security of your information seriously. We
                  implement appropriate technical and organizational measures to
                  protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These measures include encryption of data in transit and at
                  rest, secure password policies, regular security audits, and
                  restricted access to personal information. However, no method
                  of transmission over the internet or electronic storage is
                  completely secure. While we strive to protect your
                  information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 10 */}
              <section
                id="international-transfers"
                className="mb-12 scroll-mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you are located in the European Union or other regions with
                  data protection laws, please note that your information may be
                  transferred to, stored in, and processed in countries other
                  than your country of residence. These countries may have data
                  protection laws that differ from your home country.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  When we transfer personal data internationally to countries
                  outside the UK or EEA (such as in Africa, Asia, or the US), we
                  use UK International Data Transfer Agreements (IDTAs) or EU
                  Standard Contractual Clauses (SCCs), supplemented by Transfer
                  Risk Assessments where required. A summary of our Records of
                  Processing Activities (RoPA), which maps these data flows, is
                  available upon request by emailing
                  [admin@global-impact-foundation.org]. By using our website and
                  services, you consent to the transfer of your information to
                  countries outside your country of residence.
                </p>
              </section>

              {/* Section 11 */}
              <section id="childrens-privacy" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website and services are not directed to children under
                  the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that we
                  have collected information from a child under 13, we will
                  delete such information immediately. If you believe we have
                  collected information from a child under 13, please contact us
                  immediately.
                </p>
              </section>

              {/* Section 12 */}
              <section id="third-party-links" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites and
                  services that are not operated by Global Impact Foundation
                  (GIF), such as Stripe for payments. This Privacy Policy does
                  not apply to these third-party sites, and we are not
                  responsible for their privacy practices. We encourage you to
                  review the privacy policies of any third-party sites before
                  providing your information. You'll be securely redirected to
                  Stripe's site, a third-party payment processor, to complete
                  transactions—we do not store or process your payment details.
                </p>
              </section>

              {/* Section 13 */}
              <section id="changes-to-policy" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to this Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  other factors. We will notify you of any material changes by
                  posting the updated policy on our website and updating the
                  "Last Updated" date at the top of this policy.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Your continued use of our website and services following the
                  posting of changes constitutes your acceptance of those
                  changes. We encourage you to review this Privacy Policy
                  periodically to stay informed about how we protect your
                  information.
                </p>
              </section>

              {/* Section 14 */}
              <section id="contact-us" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, want to
                  exercise your privacy rights, or have concerns about how we
                  handle your information, please contact us:
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Global Impact Solutions Ltd. (GIF)
                  </h3>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Email:</span>{" "}
                    [admin@global-impact-foundation.org]
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Mailing Address:</span> [960
                    Capability Green, Luton, England, LU1 3PE]
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">
                  We will respond to your request within 30 days. If you are not
                  satisfied with our response, you have the right to lodge a
                  complaint with your local data protection authority.
                </p>
              </section>

              {/* Section 15 */}
              <section id="regional-information" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Additional Information for Specific Regions
                </h2>

                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    For European Union Residents (GDPR)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the rights outlined above under GDPR. If you
                    believe we have violated your rights, you have the right to
                    lodge a complaint with your local data protection authority.
                    You can find your authority's contact information at
                    [https://edpb.ec.europa.eu/about-edpb/board/members_en].
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    For California Residents (CCPA)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under the California Consumer Privacy Act, you have the
                    right to know what personal information is collected, the
                    right to delete personal information, the right to opt-out
                    of the sale of personal information, and the right to
                    non-discrimination for exercising your CCPA rights. To
                    exercise these rights, please contact us using the
                    information above.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    For other Regions
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We comply with applicable privacy laws in your region. If
                    you have questions about your privacy rights in your
                    specific location, please contact us.
                  </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="glossary" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Glossary
                </h2>

                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-800">
                      Personal Information:
                    </dt>
                    <dd className="text-gray-700 ml-4">
                      Any information that identifies or can reasonably identify
                      an individual, such as name, email address, phone number,
                      or IP address.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">Processing:</dt>
                    <dd className="text-gray-700 ml-4">
                      Any operation performed on personal information, such as
                      collection, storage, use, sharing, or deletion.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">
                      Data Controller:
                    </dt>
                    <dd className="text-gray-700 ml-4">
                      The organization that determines the purposes and means of
                      processing personal information (in this case, GIF).
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">
                      Data Processor:
                    </dt>
                    <dd className="text-gray-700 ml-4">
                      An organization that processes personal information on
                      behalf of the data controller (such as our email marketing
                      service provider or Stripe).
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">Consent:</dt>
                    <dd className="text-gray-700 ml-4">
                      Your explicit agreement to the collection and use of your
                      personal information for specific purposes.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section 17 */}
              <section id="summary" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We respect your privacy and are committed to being transparent
                  about how we collect, use, and protect your information. We
                  only collect information necessary to provide our services and
                  improve your experience. We never sell your information to
                  third parties. You have full control over your data and can
                  exercise your privacy rights at any time.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  If you have any questions or concerns, please don't hesitate
                  to contact us. We're here to help and to ensure your privacy
                  is protected.
                </p>

                <div className="mt-8 pt-6 border-t">
                  <p className="text-gray-600 text-sm">
                    Last Updated: January 2026
                    <br />
                    Version: 1.0
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
