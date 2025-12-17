export interface VolunteerJob {
  slug: string;
  title: string;
  location?: string;
  short: string;
  about: string;
  responsibilities: string[];
  commitment?: string;
  interestTag?: string; // maps to VolunteerForm interests
}

export const volunteerJobs: VolunteerJob[] = [
  {
    slug: "corporate-fundraiser-uk",
    title: "Volunteer Corporate Fundraiser (UK)",
    location: "Remote Worldwide",
    short: "Lead our corporate fundraising efforts in the UK and US.",
    about:
      "Lead our corporate fundraising efforts in the UK and US. This role combines hands-on prospecting (cold calling and emailing) with strategic planning to develop and implement a corporate fundraising strategy.",
    responsibilities: [
      "Research and identify potential corporate donors",
      "Develop corporate fundraising strategy",
      "Build relationships with corporate partners",
    ],
    commitment: "20 hours/week for 12 months (Unpaid, Remote)",
    interestTag: "Corporate Fundraising",
  },
  {
    slug: "digital-marketing-content-creator-uk",
    title: "Volunteer Digital Marketing & Content Creator (UK)",
    location: "Remote Worldwide",
    short:
      "Lead and execute our online presence, combining strategy and content creation.",
    about:
      "Lead and execute our online presence. This role combines digital marketing strategy with hands-on content creation (graphics and video) to grow our reach and engage supporters.",
    responsibilities: [
      "Plan and implement digital marketing campaigns",
      "Create graphics, video, and social media content",
      "Manage social media and track analytics",
    ],
    commitment: "15-20 hours/week for 12 months (Unpaid, Remote)",
    interestTag: "Digital Marketing & Content",
  },
  {
    slug: "event-support",
    title: "Event Support",
    location: "Various",
    short:
      "Support our impactful events and workshops where young people learn valuable mindset skills.",
    about:
      "Support our impactful events and workshops where young people learn valuable mindset skills and connect with their communities.",
    responsibilities: [
      "Event setup and coordination",
      "Participant registration and support",
      "Workshop assistance",
    ],
    commitment: "Variable depending on event (Unpaid)",
    interestTag: "Event Support",
  },
  {
    slug: "administrative-support",
    title: "Administrative Support",
    location: "Remote/Hybrid",
    short:
      "Help us run smoothly by providing essential administrative support.",
    about:
      "Help us run smoothly by providing essential administrative support that keeps our programmes operating effectively.",
    responsibilities: [
      "Data entry and management",
      "Communications support",
      "Project coordination",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "Administrative Support",
  },
];

export default volunteerJobs;
