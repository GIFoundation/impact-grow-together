import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import volunteerJobs from "@/lib/volunteerJobs";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VolunteerForm } from "@/components/VolunteerForm";
import { ArrowRight } from "lucide-react";
import { AnonymousForm } from "@/components/AnonymousForm";

const VolunteerDetail = () => {
  const { slug } = useParams();
  const job = volunteerJobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Role not found
          </h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find that volunteer opportunity.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center text-gif-cyan font-medium"
          >
            Back to opportunities <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div
          className="grid lg:grid-cols-3 gap-8"
          style={{ paddingTop: "60px" }}
        >
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-display font-bold mb-4">
              {job.title}
            </h1>
            <p className="text-muted-foreground mb-6">
              {job.location} • {job.commitment}
            </p>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About the Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{job.about}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <aside>
            <div className="sticky top-24">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Interested?</h3>
                <p className="text-sm text-muted-foreground">
                  Apply using the form below — we'll review your application and
                  be in touch.
                </p>
              </div>

              {/* <VolunteerForm
                initialInterests={job.interestTag ? [job.interestTag] : []}
                role={job.title}
              /> */}
              <AnonymousForm />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerDetail;
