// Content for every service. One dynamic route (app/services/[slug]) renders
// all of them, and the sitemap, nav, footer and JSON-LD all read this list.

export const services = [
  {
    slug: "software-dev",
    title: "Software Development",
    navTitle: "Software Development",
    icon: "code",
    description:
      "Build scalable digital products designed around the people who use them. From discovery and architecture to development, testing, and support, we deliver dependable web and mobile applications with modern technology, clear ownership, and the performance needed to grow.",
    tags: ["Web Apps", "Mobile Apps", "Modernisation"],
    heroImage: "/services/development1.webp",
    featureImage: "/services/development2.webp",
    intro:
      "Build scalable, custom digital products designed for performance and longevity. We deliver user-centric applications using modern tech stacks, tailored to your unique business requirements.",
    sections: [
      {
        heading: "Custom Web Applications",
        text: "We build responsive, high-performance web applications tailored to your specific business needs. From e-commerce platforms to complex SaaS products, we use the latest frameworks to ensure speed, reliability, and scalability.",
      },
      {
        heading: "Mobile App Development",
        text: "Create seamless mobile experiences for iOS and Android. Our development team focuses on native performance and intuitive UI/UX design to keep your users engaged and coming back to your product.",
      },
      {
        heading: "Legacy System Modernisation",
        text: "Don't let outdated technology hold you back. We help you migrate legacy applications to modern architectures, improving scalability, security, and long-term maintainability without disrupting your day-to-day operations.",
      },
    ],
  },
  {
    slug: "security",
    title: "Cyber Security",
    navTitle: "Cyber Security",
    icon: "shield",
    description:
      "Safeguard your digital infrastructure with practical, proactive protection. From security reviews and encryption to monitoring, governance, and incident readiness, we help you reduce exposure, protect sensitive information, and build resilience into the systems your business depends on.",
    tags: ["Audits", "Encryption", "Security Ops"],
    heroImage: "/services/security1.webp",
    featureImage: "/services/security.webp",
    intro:
      "Protect your organization's digital ecosystem with our comprehensive cyber security suite. We move beyond basic protection, implementing zero-trust architectures and proactive threat hunting to ensure your operations remain resilient against global cyber threats.",
    sections: [
      {
        heading: "Cybersecurity Audits",
        text: "We perform comprehensive vulnerability assessments and penetration testing to identify potential entry points for attackers. Our detailed reports provide actionable insights to harden your security perimeter.",
      },
      {
        heading: "Data Encryption & Privacy",
        text: "Protect sensitive customer information and proprietary data with enterprise-grade encryption protocols. We help you achieve and maintain compliance with international data protection standards including GDPR and NDPR.",
      },
      {
        heading: "Managed Security Operations",
        text: "Our team provides 24/7 monitoring and rapid incident response to neutralize advanced threats before they impact your business. We leverage AI-driven threat hunting and zero-day protection to keep your infrastructure resilient.",
      },
    ],
  },
  {
    slug: "ai-deployment",
    title: "AI Deployment",
    navTitle: "AI Deployment",
    icon: "brain",
    description:
      "Apply artificial intelligence where it can create measurable value. We help you identify useful opportunities, prepare the right data, and deploy responsible AI workflows that automate complex work, surface better insights, and support faster, more informed decisions.",
    tags: ["Predictive Models", "NLP & Chatbots", "Automation"],
    heroImage: "/services/ai1.webp",
    featureImage: "/services/ai2.webp",
    intro:
      "Transform your business with intelligent automation. Our AI deployment services focus on integrating machine learning, natural language processing, and predictive analytics into your existing workflows to drive efficiency and innovation.",
    sections: [
      {
        heading: "Predictive Analytics",
        text: "Turn your data into a competitive advantage. We build AI models that forecast trends, predict customer behavior, and identify operational risks before they occur.",
      },
      {
        heading: "NLP & Chatbots",
        text: "Enhance customer support and internal communication with advanced Natural Language Processing tools and intelligent conversational agents that understand context.",
      },
    ],
    highlight: {
      heading: "The AI Advantage",
      text: "AI is no longer just for big tech. We make sophisticated machine learning accessible and practical for businesses of all sizes, ensuring you stay ahead in an increasingly automated world.",
    },
  },
  {
    slug: "automation",
    title: "Business Automation",
    navTitle: "Business Automation",
    icon: "boxes",
    description:
      "Eliminate repetitive manual work with intelligent, connected workflows. We bring your core platforms together, remove avoidable handoffs, and create reliable operating processes that improve visibility, reduce errors, and give your team more time for high-value work.",
    tags: ["ERP", "eDMS", "Workflows"],
    heroImage: "/services/business1.webp",
    featureImage: "/services/business-automation.webp",
    intro:
      "Eliminate repetitive manual tasks with intelligent, seamless workflows. We connect your platforms and teams to boost operational efficiency across your entire organisation.",
    sections: [
      {
        heading: "Enterprise Resource Planning (ERP)",
        text: "Integrate your core business processes — finance, HR, supply chain, and more — into a unified system. Our ERP solutions provide real-time visibility and complete control over your entire operation.",
      },
      {
        heading: "Electronic Document Management System (eDMS)",
        text: "Transition to a truly digital office with our eDMS. Categorize, store, and retrieve documents securely while automating compliance-related documentation and workflows. Eliminate paper-based processes and improve audit readiness.",
      },
      {
        heading: "Workflow Optimisation",
        text: "We analyse your existing processes to identify bottlenecks and automate them using intelligent triggers. This reduces human error and frees up your team to focus on high-value, strategic tasks.",
      },
      {
        heading: "Productivity Tools Integration",
        text: "Seamlessly connect your automation workflows with popular collaboration tools like Google Workspace, Office 365, and Slack to maintain a cohesive and productive work environment.",
      },
    ],
  },
  {
    slug: "erp-deployment",
    title: "ERP Deployment",
    navTitle: "ERP Deployment",
    icon: "chart",
    description:
      "Scale your operations with an ERP foundation that reflects how your business actually works. We help you select, configure, and deploy the right enterprise platform, connect core processes, and support adoption so teams can operate with clearer information and less manual coordination.",
    tags: ["ERP Strategy", "Data Migration", "Integration"],
    heroImage: "/services/erp1.webp",
    featureImage: "/services/erp1.webp",
    intro:
      "Streamline your entire business operation with our enterprise-grade ERP deployment services. We help you integrate finance, HR, supply chain, and customer management into a single, unified digital ecosystem.",
    sections: [
      {
        heading: "Custom ERP Strategy",
        text: "We don't believe in one-size-fits-all. Our experts analyze your unique workflows to recommend and implement the ERP solution that best fits your industry and scale.",
      },
      {
        heading: "Data Migration & Integration",
        text: "Move your legacy data securely and integrate your new ERP with existing tools. We ensure zero data loss and minimal disruption to your daily operations.",
      },
    ],
    highlight: {
      heading: "Why ERP for your business?",
      text: "An integrated ERP system provides the visibility and control necessary to make informed decisions in real-time. It is the foundation of modern digital enterprise.",
    },
  },
  {
    slug: "zoho-partner",
    title: "Zoho Implementations",
    navTitle: "Zoho Implementations",
    icon: "layers",
    description:
      "Make the Zoho platform work as one connected operating system for your business. We help you plan, implement, customize, and optimize the right Zoho applications, then support your teams as they adopt better ways to manage customers, work, and growth.",
    tags: ["CRM", "Books", "Desk", "People", "Creator"],
    heroImage: "/services/zoho1.webp",
    featureImage: "/services/zohoerp.webp",
    partnerLogo: "/partners/zoho.svg",
    intro:
      "Unlock the full potential of the ZohoOne ecosystem. As certified partners, we provide expert implementation, customization, and training for ZohoOne's comprehensive suite of business applications, from CRM to help desk, to ZohoOne Books, ZohoOne People and ZohoOne Creator.",
    sections: [
      {
        heading: "Sales & Process Automation",
        text: "Define and automate your sales framework. We implement ZohoOne CRM to capture and convert leads through structured, repeatable processes.",
      },
      {
        heading: "Unified Marketing",
        text: "Engage prospects across every digital channel. We optimize ZohoOne's marketing automation to deliver the right message at the perfect time.",
      },
      {
        heading: "Customer Experience (CX)",
        text: "Transform support into a competitive advantage. We deploy ZohoOne Desk to resolve inquiries quickly using intelligent ticketing and live chat.",
      },
      {
        heading: "Finance & Inventory",
        text: "Modernize your accounting with real-time accuracy. We implement ZohoOne Books to manage invoicing, inventory, and compliance in one secure system.",
      },
      {
        heading: "HR & Employee Empowerment",
        text: "Empower your workforce from recruitment to retirement. We help you manage the full employee lifecycle with centralized HR policies and tracking.",
      },
      {
        heading: "Operations & Projects",
        text: "Optimize fulfillment and project delivery. We use ZohoOne Projects and Inventory to manage tasks and orders with unmatched speed and precision.",
      },
      {
        heading: "Ecommerce",
        text: "Build a high-converting digital storefront. We leverage ZohoOne Commerce to turn your website into a powerful sales engine integrated with your back-office.",
      },
    ],
    highlight: {
      heading: "Why Partner with Us?",
      text: "Don't waste time on trial and error. Our certified experts ensure your ZohoOne setup is optimized from day one, following best practices for security, scalability, and user adoption.",
    },
  },
  {
    slug: "networking",
    title: "Networking",
    navTitle: "Networking",
    icon: "network",
    description:
      "Design and implement secure, high-performance network infrastructure for a growing, distributed enterprise. We plan connectivity, segmentation, access, and resilience around your operating needs so people, applications, and locations can work together reliably.",
    tags: ["Architecture", "Cabling", "Wireless", "WAN"],
    heroImage: "/services/network1.webp",
    featureImage: "/services/network1.webp",
    intro:
      "Build a foundation for digital success with our enterprise networking solutions. We design and deploy secure, high-speed, and resilient network infrastructures that keep your team connected and your data flowing without interruption.",
    sections: [
      {
        heading: "Digital Network Architecture",
        text: "We build networks that grow with you. By combining smart automation with airtight security, we ensure your infrastructure isn’t just a utility, but a competitive advantage that supports your long-term goals.",
      },
      {
        heading: "Structured Cabling",
        text: "The backbone of your office needs to be dependable. We install high-performance copper cabling (Cat 6 to Cat 7a) that meets strict industry standards, ensuring your team stays connected without the frustration of lag or downtime.",
      },
      {
        heading: "Wireless Solutions",
        text: "Give your team the freedom to work from anywhere in the office. Our secure, high-capacity Wi-Fi solutions are built to handle a dense mix of laptops, phones, and IoT devices without dropping a beat.",
      },
      {
        heading: "Enterprise Network Monitoring",
        text: "We spot trouble before it reaches your desk. Our real-time monitoring gives us a bird’s-eye view of your performance and security, allowing us to fix bottlenecks and block threats before they disrupt your day.",
      },
      {
        heading: "Fiber Optic Cabling",
        text: "When distance and speed are non-negotiable, our fiber solutions bridge the gap. We link buildings and data centers with high-bandwidth connectivity designed to handle your heaviest data loads with ease.",
      },
      {
        heading: "Wide Area Networks (WAN)",
        text: "Keep your global teams feeling like they’re in the same room. Whether through SD-WAN or secure VPNs, we provide the fast, private links your satellite offices need to share data and collaborate safely.",
      },
    ],
  },
  {
    slug: "onboarding",
    title: "Customer Onboarding & ID Verification",
    navTitle: "Onboarding & ID Verification",
    icon: "scan",
    description:
      "Streamline the user journey with secure, friction-free onboarding and verification. We integrate robust KYC, identity, and compliance workflows into your existing products so customers can move forward confidently while your teams reduce fraud, review time, and operational friction.",
    tags: ["KYC", "Biometrics", "Fraud Detection"],
    heroImage: "/services/verification1.webp",
    featureImage: "/services/verification2.webp",
    intro:
      "Streamline the user journey with secure, friction-free verification. We integrate robust KYC and compliance protocols to build trust at every touchpoint and reduce drop-off rates.",
    sections: [
      {
        heading: "Seamless KYC Integration",
        text: "Our onboarding solutions integrate directly into your existing apps, allowing for real-time Know Your Customer (KYC) verification without disrupting the user experience. Support regulatory requirements while keeping customers engaged.",
      },
      {
        heading: "Biometric Identity Verification",
        text: "Utilise advanced facial recognition and liveness detection to ensure the person behind the screen is who they claim to be. This reduces fraud risk and enhances security across your platform.",
      },
      {
        heading: "Automated Document Validation",
        text: "Instantly verify government-issued IDs from over 190 countries. Our system automatically extracts data and checks for authenticity, significantly speeding up the approval process while maintaining a complete audit trail.",
      },
    ],
  },
  {
    slug: "consulting",
    title: "IT Consulting",
    navTitle: "IT Consulting",
    icon: "handshake",
    description:
      "Turn fragmented operations and complex technology decisions into a practical path forward. We work with leadership and delivery teams to clarify priorities, assess trade-offs, and shape roadmaps for the systems, platforms, and security foundations that support long-term growth.",
    tags: ["Roadmaps", "Infrastructure", "Feasibility"],
    heroImage: "/services/consulting.webp",
    featureImage: "/services/consulting1.webp",
    intro:
      "Optimize your technical strategy with expert guidance. We provide the roadmaps and insights you need for long-term growth, ensuring your technology investments align perfectly with your business objectives.",
    sections: [
      {
        heading: "Digital Transformation Roadmap",
        text: "We work with your leadership team to define a clear technology vision. Our roadmaps outline the specific tools, timelines, and processes needed to achieve your long-term business goals and stay competitive in a digital-first world.",
      },
      {
        heading: "Infrastructure Strategy",
        text: "Optimize your hardware and cloud infrastructure for cost, security, and performance. We provide expert advice on server management, network architecture, and disaster recovery planning to ensure maximum uptime.",
      },
      {
        heading: "Technical Feasibility Studies",
        text: "Before you invest in a new project, we evaluate the technical risks, resource requirements, and potential ROI. Our studies help you make informed decisions and avoid costly pitfalls during implementation.",
      },
    ],
  },
  {
    slug: "digital-signage",
    title: "Digital Signage Solution",
    navTitle: "Digital Signage",
    icon: "monitor",
    description:
      "Manage and deploy dynamic visual content across every screen in real time. We plan, implement, and support high-impact signage that helps organizations communicate clearly, improve visitor experiences, and turn physical spaces into useful digital touchpoints.",
    tags: ["Content Management", "Displays", "Live Data"],
    heroImage: "/services/signage1.webp",
    featureImage: "/services/signage.webp",
    intro:
      "Manage and deploy dynamic visual content across your screens in real-time. We provide high-impact signage that transforms physical spaces and captivates your audience.",
    sections: [
      {
        heading: "Dynamic Content Management",
        text: "Our digital signage solutions allow you to control multiple displays from a single, centralized dashboard. Whether it's promotional videos, real-time data feeds, or emergency alerts, you can update your content instantly across all locations.",
      },
      {
        heading: "High-Impact Visual Displays",
        text: "We specialize in designing and deploying high-resolution displays that capture attention. From retail storefronts to corporate lobbies, our signage solutions are tailored to enhance brand visibility and improve customer engagement.",
      },
      {
        heading: "Real-Time Integration",
        text: "Connect your screens to live data sources such as weather updates, social media feeds, or internal business metrics. Our platform ensures that your audience always sees the most relevant and up-to-date information.",
      },
    ],
  },
  {
    slug: "document-management",
    title: "Document Management System",
    navTitle: "Document Management",
    icon: "file",
    description:
      "Digitize and automate the full lifecycle of your business documents. We design secure, searchable management workflows that improve access, strengthen accountability, reduce manual processing, and help teams keep information organized as the organization grows.",
    tags: ["Smart Search", "Workflows", "Compliance"],
    heroImage: "/services/dms1.webp",
    featureImage: "/services/dms1.webp",
    intro:
      "Transform your office into a truly digital workspace. Our Document Management Systems (DMS) eliminate the chaos of physical filing and unstructured digital folders, providing a secure, searchable, and automated environment for all your business-critical information.",
    sections: [
      {
        heading: "Smart Indexing & Search",
        text: "Never lose a file again. Our DMS uses advanced OCR and metadata tagging to ensure every document is instantly searchable. Find any invoice, contract, or report in seconds using simple keywords.",
      },
      {
        heading: "Workflow Automation",
        text: "Automate document-driven processes like invoice approvals, contract signings, and HR onboarding. Our system routes documents to the right people at the right time, ensuring zero bottlenecks.",
      },
    ],
    highlight: {
      heading: "Security & Compliance",
      text: "With granular access controls and full audit trails, our DMS ensures that sensitive information is only seen by authorized personnel. Stay compliant with data protection laws while maintaining high productivity.",
    },
  },
  {
    slug: "hardware-procurement",
    title: "Hardware Procurement",
    navTitle: "Hardware Procurement",
    icon: "hardware",
    description:
      "Source, configure, and deploy reliable hardware around your operational requirements. From servers and workstations to network equipment and lifecycle support, we help you make practical technology investments that arrive ready to use and remain dependable over time.",
    tags: ["Sourcing", "Configuration", "Logistics"],
    heroImage: "/services/hardware1.webp",
    featureImage: "/services/hardware2.webp",
    intro:
      "Equip your business with the best-in-class technology. Our hardware procurement services provide end-to-end support for sourcing, configuring, and deploying the physical infrastructure your organization needs to thrive.",
    sections: [
      {
        heading: "Global Vendor Network",
        text: "Leverage our partnerships with world-leading hardware manufacturers. We source servers, workstations, networking equipment, and mobile devices at competitive enterprise pricing, ensuring you get the best value for your investment.",
      },
      {
        heading: "Configuration & Asset Management",
        text: "We don't just deliver boxes. Our team pre-configures every piece of hardware with your company's software and security protocols, and provides full asset tracking throughout its operational lifecycle.",
      },
    ],
    highlight: {
      heading: "Scalable Logistics",
      text: "Whether you're equipping a single office or a nationwide workforce, our logistics team ensures timely delivery and professional installation, so your employees can get to work without delay.",
    },
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

// Kept for backwards compatibility with older imports.
export const servicesData = servicesBySlug;

export function getService(slug) {
  return servicesBySlug[slug] ?? null;
}
