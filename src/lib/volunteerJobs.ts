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
      "The Volunteer Project Manager is responsible for supporting the planning, coordination, and ongoing management of Global Impact Foundation’s projects and partnerships. Working closely with senior leadership, this role ensures that projects are implemented in a structured, timely, and effective manner, and that activities remain aligned with the organisation’s strategic objectives and mission. \n\nKey aspects of the role include monitoring project progress, supporting coordination across internal teams and external partners, and contributing to the preparation of mid-project and end-of-project impact reports. The Volunteer Project Manager also supports documentation, reporting, and process improvement to strengthen project delivery and accountability.\n\n To gain a comprehensive understanding of the Foundation’s methodology and values, the Volunteer Project Manager is required to participate in the Global Impact Foundation mindset program. A demonstrated interest in personal development and mindset-based approaches is essential, as these principles underpin both the organisation’s work and its internal culture.",
    responsibilities: [
      "Support the planning and coordination of ongoing and new projects",
      "Accountable and reliable, consistently following through on commitments",
      "Track project timelines, milestones, and deliverables",
    ],
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
    interestTag: "Project Management",
    competencies: [
      "Self-starter with the ability to work independently and take initiative",
      "Proactive problem-solver with a solution-focused mindset",
      "Accountable and reliable, consistently following through on commitments",
      "Strong relationship-builder able to collaborate with diverse stakeholders",
      "Clear and professional communicator, both written and verbal",
      "Well-organised, with strong time and priority management skills",
      "Adaptable and flexible in a dynamic, mission-driven environment",
      "Aligned with organisational values, with a genuine interest in personal growth and self-development",
    ],
    Qualifications: [
      "Experience or strong interest in project coordination or management",
      "Background in non-profit social impact partnerships or program delivery isdesirable",
      "Experience with reporting, documentation, or impact measurement is an advantage",
      "Strong organisational and time-management skill",
    ],
  },
  {
    slug: "Student-Support-Officer",
    title: "Student Support Officer (Volunteer)",
    location: "Remote Worldwide",
    short:
      "The Volunteer Student Support Officer supports young people throughout their learning journey at Global Impact Foundation, acting as a trusted point of contact who providesguidance, encouragement, and practical support. ",
    about:
      "The Volunteer Student Support Officer supports young people throughout their learning journey at Global Impact Foundation, acting as a trusted point of contact who providesguidance, encouragement, and practical support. The role focuses on helping students stayengaged, motivated, and confident within mindset-driven development programs.\n\nResponsibilities include responding to student enquiries, supporting onboarding andretention, monitoring participation, and working closely with program teams to ensure aconsistent, high-quality learning experience. Volunteers are expected to participate in theprogram themselves to gain a deeper understanding of its principles and have a genuineinterest in personal self-development.\n\nThis role requires a minimum one-year commitment and directly contributes toempowering young people to think, believe, and act beyond their circumstances",
    responsibilities: [
      "Provide consistent support and guidance to students enrolled in Global Impact Foundation programs",
      "Act as a first point of contact for student inquiries, concerns, and challenges",
      "Monitor student progress, participation, and engagement across programs",
      "Identify students at risk of disengagement and provide timely interventions",
    ],
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
    interestTag: "Student Support Officer",
    competencies: [
      "Proficiency with major office applications, especially Google Workspace",
      "Strong organizational, multitasking, and time-management skills.",
      "Excellent written and verbal communication.",
      "Attention to detail with a commitment to accuracy and consistency.",
      "Self-starter with a proactive, solution-oriented mindset.",
      "Reliable and accountable, with the ability to work independently in a remote environment.",
      "Strong interpersonal skills and a collaborative approach to teamwork.",
    ],
    Qualifications: [
      "Diploma or Bachelor’s degree in Education, Social Sciences, (or equivalent experience)",
      "Proven experience supporting students, youth, or learners in educational or development-focused environments",
      "Strong communication, interpersonal, and organisational skills",
      "Strong organisational and time-management skill",
    ],
  },
  {
    slug: "admin-volunteer",
    title: "Admin (Volunteer)",
    location: "Remote Worldwide",
    short:
      "This role is critical to establishing consistency, efficiency, and accountability across the organization and keeps the organisation running smoothly by delivering reliable, high quality administrative support.",
    about:
      "This role It keeps the organisation running smoothly by delivering reliable, high-qualityadministrative support across all teams, strengthening communication, streamliningadministrative support across all teams, strengthening communication, streamliningadministrative support across all teams, strengthening communication, streamliningprocesses, and ensuring everyone has what they need to work effectively and make ameaningful impact",
    responsibilities: [
      "Manage day-to-day administrative tasks across multiple departments, ensuring smooth workflows.",
      "Maintain accurate and up-to-date records, databases, and files (digital and cloud-based).",
      "Handle scheduling, calendar management, and meeting coordination for team leads.",
      "Prepare and distribute reports, presentations, and communications as needed.",
      "Ensure consistent use of administrative systems, templates, and processes across GIF",
      "Identify gaps in administrative workflows and propose improvements to enhance efficiency.",
      "Support the implementation of new tools and platforms to improve productivity",
      "Act as a central point of contact for administrative support between HR,Fundraising, Marketing, and Research Teams.",
      "Coordinate inter-departmental communication and track progress on shared projects.",
    ],
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
    interestTag: "Student Support Officer",
    competencies: [
      "Empathetic, patient, and culturally sensitive",
      "Time management skills and conflict-resolution abilities",
      "Comfortable working with digital platforms and learning management systems",
      "Ability to inspire trust, confidence, and motivation in young people",
    ],
    Qualifications: [
      "At least 1 year of administrative or coordination experience (voluntary or paid).",
      "Experience supporting multiple stakeholders or departments is highly desirable",
    ],
  },
  {
    slug: "visual-content-creator-volunteer",
    title: "Visual Content Creator (Volunteer)",
    location: "Remote Worldwide",
    short:
      "The Visual Content Creator will be responsible for conceptualising, designing, producing, and editing high-quality visual content.",
    about:
      "The Visual Content Creator will be responsible for conceptualising, designing, producing, and editing high-quality visual content. \n\nThis role requires a creative eye, technical expertise, and the ability to translate ideas into striking graphics and dynamic video content that support marketing, branding, and communications strategies.",
    responsibilities: [
      "Develop and produce original visual content including graphics, animations, videos, and photo edits optimised for social media, websites, email campaigns, and other digital platforms.",
      "Collaborate closely with marketing and communications team to understand project goals and deliver creative solutions that align with brand standards and messaging",
      "Produce polished videos, including interviews, promotional clips, and tutorials-like videos.",
      "Edit and post-produce video content with effective storytelling techniques, sound design, motion graphics, and colour correction.",
      "Maintain a consistent visual identity across all content formats.",
      "Assist in building and maintaining the Branding Manual to ensure visual consistency and remain on tone.",
      "Manage multiple projects simultaneously, ensuring timely delivery without compromising quality.",
      "Stay updated on the latest trends and best practices in design, video production, digital marketing, and AI-assisted tools.",
    ],
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
    interestTag: "Visual Content Creator",
    competencies: [
      "Proficiency in graphic tools, video editors, and CMS platforms as well as Social Media platforms for efficient production.",
      "Excellent visual storytelling skills and attention to detail.",
      "Excellent planning, organisation, and time management skills.",
      "Ability to work independently with remote teams across time zones.",
      "Proficient in English (written & verbal).",
    ],
    Qualifications: [
      "Bachelor's degree in marketing, communications, commerce, journalism, or a related field.",
      "2+ years of experience in graphic design and video production, and proficiency with industry-standard design and video editing software.",
      "Familiarity with AI tools for content creation and analysis.",
    ],
  },
  {
    slug: "marketing-communications-volunteer",
    title: "Marketing & Communications Volunteers",
    location: "Remote Worldwide",
    short:
      "Marketing & Communications Volunteers support nonprofit and growth-focused teams by creating impactful digital content, managing outreach, and amplifying campaigns across social platforms.",
    about:
      "Marketing & Communications Volunteers support nonprofit and growth-focused teams by creating impactful digital content, managing outreach, and amplifying campaigns across social platforms. \n\nThis role suits passionate individuals skilled in strategic messaging, cultural intelligence, and AI-enhanced tools for African-EU market dynamics. Volunteers contribute flexibly to workshops, grant proposals, and impact initiatives without financial compensation.",
    responsibilities: [
      "Craft and schedule engaging social media content (posts, stories, reels) for platforms like LinkedIn, Instagram, and Facebook to boost visibility and engagement.",
      "Set up and manage email campaigns in email marketing tool, including list segmentation for donors, partners, and prospects.",
      "Draft engaging newsletters with compelling subject lines, CTAs, and visuals tailored to campaign goals.",
      "Develop human-first messaging that resonates with diverse audiences, emphasising cultural nuance for African-EU contexts and impact storytelling.",
      "Test email performance via A/B variants and analyse open/click rates to optimize future sends.",
      "Support event promotion, workshop coordination via Calendly, content audits, SEO optimisation, and A/B testing for campaign performance.",
      "Manage multiple projects simultaneously, ensuring timely delivery without compromising quality.",
      "Stay updated on the latest trends and best practices in design, video production, digital marketing, and AI-assisted tools.",
    ],
    commitment: "20 hours per week for 1 year (Unpaid, Remote)",
    interestTag: "Visual Content Creator",
    competencies: [
      "Proficiency in Canva, AI content tools, CMS platforms, and analytics for storytelling and trend adaptation.",
      "Strong understanding of Social Media platforms.",
      "Strong copywriting, cultural fluency for multicultural outreach.",
      "Excellent planning, organisation, and time management skills.",
      "Ability to work independently with remote teams across time zones.",
      "Proficient in English (written & verbal).",
      "Interest in nonprofits, social impact, or international development sectors.",
    ],
    Qualifications: [
      "Bachelor's degree in marketing, communications, commerce, journalism, or a related field.",
      "2+ years of experience in graphic design and video production, and proficiency with industry-standard design and video editing software.",
      "Familiarity with GDPR/privacy in digital marketing and AI tools for content creation and analysis.",
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
