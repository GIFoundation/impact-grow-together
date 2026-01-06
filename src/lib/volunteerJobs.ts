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
  {
    slug: "hr-volunteer",
    title: "HR Volunteer",
    location: "Remote/Hybrid",
    short: "Support recruitment, onboarding and people processes.",
    about:
      "Support our people functions including recruitment, volunteer onboarding, and basic HR processes to help us build a sustainable, supported team.",
    responsibilities: [
      "Assist with volunteer recruitment and screening",
      "Support onboarding and induction processes",
      "Help maintain personnel records and HR admin",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "HR",
  },
  {
    slug: "it-support-volunteer",
    title: "IT Support Volunteer",
    location: "Remote/Hybrid",
    short: "Provide technical support and maintain our IT systems.",
    about:
      "Provide technical support, maintain basic systems, and help improve our digital tools so the team can operate smoothly.",
    responsibilities: [
      "Troubleshoot user issues and provide support",
      "Maintain and document simple IT procedures",
      "Support deployments and admin for cloud services",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "IT",
  },
  {
    slug: "legal-advice-volunteer",
    title: "Legal Advice Volunteer",
    location: "Remote Worldwide",
    short: "Provide pro bono legal guidance and document review.",
    about:
      "Offer pro bono legal guidance, help review policies and contracts, and ensure compliance with relevant regulations.",
    responsibilities: [
      "Review simple contracts and partnership agreements",
      "Advise on policy and compliance matters",
      "Help draft volunteer-facing documents",
    ],
    commitment: "Ad-hoc (Unpaid)",
    interestTag: "Legal",
  },
  {
    slug: "finance-volunteer",
    title: "Finance Volunteer",
    location: "Remote/Hybrid",
    short: "Support bookkeeping, reporting and financial processes.",
    about:
      "Help maintain accurate financial records, support basic bookkeeping, and assist with budgeting and reporting.",
    responsibilities: [
      "Support bookkeeping and transaction reconciliation",
      "Prepare simple financial reports",
      "Assist with budgeting and expense tracking",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "Finance",
  },
  {
    slug: "project-management-volunteer",
    title: "Project Management Volunteer",
    location: "Remote/Hybrid",
    short: "Help plan, coordinate and track projects and programmes.",
    about:
      "Support planning and coordination of programmes and internal projects to ensure timely delivery and clear communication across teams.",
    responsibilities: [
      "Create and maintain project plans and timelines",
      "Coordinate stakeholders and update project trackers",
      "Help run regular project check-ins",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "Project Management",
  },
  {
    slug: "operations-volunteer",
    title: "Operations Volunteer",
    location: "Remote/Hybrid",
    short: "Support operational processes and logistics.",
    about:
      "Support the organisation's operational needs including logistics, vendor coordination, and process improvements to keep programmes running.",
    responsibilities: [
      "Support logistics and vendor coordination",
      "Help document and improve operational processes",
      "Assist with programme logistics and resource planning",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "Operations",
  },
  {
    slug: "marketing-communications-volunteer",
    title: "Marketing & Communications Volunteer",
    location: "Remote Worldwide",
    short: "Support storytelling, comms strategy and stakeholder engagement.",
    about:
      "Work on storytelling, communications strategy, and stakeholder engagement to raise awareness and support for our programmes.",
    responsibilities: [
      "Draft social and email content",
      "Support PR and stakeholder communications",
      "Help develop campaign messaging",
    ],
    commitment: "Flexible (Unpaid)",
    interestTag: "Marketing & Communications",
  },
  {
    slug: "visual-designer-volunteer",
    title: "Visual Design Volunteer",
    location: "Remote Worldwide",
    short: "Create visual assets for campaigns and programmes.",
    about:
      "Design visual assets such as social graphics, presentation templates and marketing materials to support our outreach.",
    responsibilities: [
      "Create social and campaign graphics",
      "Design presentation and programme materials",
      "Help maintain brand asset library",
    ],
    commitment: "Project-based / Flexible (Unpaid)",
    interestTag: "Visual Design",
  },
];

export default volunteerJobs;
