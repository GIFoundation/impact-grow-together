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

export const volunteerJobs = [
  // {
  //   slug: "corporate-fundraiser-uk",
  //   title: "Volunteer Corporate Fundraiser (UK and US)",
  //   location: "Remote Worldwide",
  //   short: "Lead our corporate fundraising efforts in the UK and US.",
  //   about:
  //     "Lead our corporate fundraising efforts in the UK and US. This role combines hands-on prospecting (cold calling and emailing) with strategic planning to develop and implement a corporate fundraising strategy.",
  //   responsibilities: [
  //     "Research and identify potential corporate donors",
  //     "Develop corporate fundraising strategy",
  //     "Build relationships with corporate partners",
  //   ],
  //   commitment: "20 hours/week for 12 months (Unpaid, Remote)",
  //   interestTag: "Corporate Fundraising",
  // },
  {
    slug: "volunteer-project-manager",
    title: "Volunteer Project Manager",
    location: "Remote Worldwide",
    short:
      "The Volunteer Project Manager is responsible for supporting the planning, coordination, and ongoing management of Global Impact Foundation’s projects and partnerships.",
    about:
      "The Volunteer Project Manager is responsible for supporting the planning, coordination, and ongoing management of Global Impact Foundation’s projects and partnerships. Working closely with senior leadership, this role ensures that projects are implemented in a structured, timely, and effective manner, and that activities remain aligned with the organisation’s strategic objectives and mission. Key aspects of the role include monitoring project progress, supporting coordination across internal teams and external partners, and contributing to the preparation of mid-project and end-of-project impact reports. The Volunteer Project Manager also supports documentation, reporting, and process improvement to strengthen project delivery and accountability. To gain a comprehensive understanding of the Foundation’s methodology and values, the Volunteer Project Manager is required to participate in the Global Impact Foundation mindset program. A demonstrated interest in personal development and mindset-based approaches is essential, as these principles underpin both the organisation’s work and its internal culture.",
    responsibilities: [
      "Support the planning and coordination of ongoing and new projects",
      "Accountable and reliable, consistently following through on commitments",
      "Track project timelines, milestones, and deliverables",
    ],
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
    interestTag: "Project Management",
    comp: [
      "Self-starter with the ability to work independently and take initiative",
      "Proactive problem-solver with a solution-focused mindset",
      "Accountable and reliable, consistently following through on commitments",
      "Strong relationship-builder able to collaborate with diverse stakeholders",
      "Clear and professional communicator, both written and verbal",
      "Well-organised, with strong time and priority management skills",
      "Adaptable and flexible in a dynamic, mission-driven environment",
      "•	Aligned with organisational values, with a genuine interest in personal growth and self-development",
    ],
  },
  {
    slug: "digital-marketing-content-creator-uk",
    title: "Volunteer Digital Marketing & Content Creator (UK and US)",
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
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year (Unpaid, remote)",
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
    commitment: "20 hours per week for 1 year  (Unpaid, remote)",
    interestTag: "Visual Design",
  },
];

export default volunteerJobs;
