export const workspaceUser = {
  name: "Zarifa Jan",
  role: "Product Manager",
  title: "Good morning",
  initials: "ZJ",
  tagline: "Remote Team Workspace",
};

export const navItems = [
  { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
  { label: "Projects", href: "/projects", icon: "FolderKanban" },
  { label: "Tasks", href: "/tasks", icon: "ListTodo" },
  { label: "Team Members", href: "/team-members", icon: "UsersRound" },
  { label: "Meetings", href: "/meetings", icon: "CalendarDays" },
  { label: "Calendar", href: "/calendar", icon: "CalendarRange" },
  { label: "Messages", href: "/messages", icon: "MessageSquareText", badge: 3 },
  { label: "Reports", href: "/reports", icon: "BarChart3" },
  { label: "Settings", href: "/settings", icon: "Settings2" },
];

export const footerNavigation = [
  { label: "Dashboard", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team-members" },
  { label: "Meetings", href: "/meetings" },
  { label: "Reports", href: "/reports" },
];

export const supportLinks = [
  {
    label: "Help Center",
    href: "/support",
    description: "Guides, billing, and product support.",
  },
  {
    label: "System Status",
    href: "#",
    description: "Monitor uptime, incidents, and maintenance.",
  },
  {
    label: "Security",
    href: "#",
    description: "Review controls, permissions, and compliance notes.",
  },
  {
    label: "Contact Sales",
    href: "#",
    description: "Upgrade plan, seats, and workspace provisioning.",
  },
];

export const projects = [
  {
    id: "ai-workspace",
    title: "AI Workspace",
    summary:
      "A focused command center for product, design, and engineering collaboration.",
    description:
      "AI Workspace brings sprint planning, async updates, and project reviews into a single product surface designed for distributed teams. The current milestone focuses on a cleaner handoff flow, faster search, and a more dependable project health signal.",
    status: "In Progress",
    priority: "High",
    progress: 78,
    deadline: "2026-06-18",
    technologies: ["Next.js", "Tailwind CSS", "OpenAPI"],
    team: ["Ayesha Khan", "Sarah Johnson", "Ali Raza", "Fatima Noor"],
    category: "Product Delivery",
    health: "On Track",
    tasksDone: 31,
    tasksTotal: 40,
    recentUpdate:
      "The new search experience shipped to internal review with keyboard shortcuts and saved filters.",
    milestone: "Shared search and review flow",
    activity: [
      {
        id: "ai-1",
        title: "Search results layout refined",
        detail:
          "Design and frontend aligned on tighter spacing and more scannable result grouping.",
        time: "Today, 9:20 AM",
      },
      {
        id: "ai-2",
        title: "Stakeholder review completed",
        detail:
          "Product feedback for the first review loop was added to the launch checklist.",
        time: "Yesterday",
      },
      {
        id: "ai-3",
        title: "Saved filters approved",
        detail:
          "The team signed off filter persistence for project and task views.",
        time: "2 days ago",
      },
    ],
  },
  {
    id: "marketing-dashboard",
    title: "Marketing Dashboard",
    summary:
      "A campaign pulse board for launch tracking, content ops, and channel performance.",
    description:
      "Marketing Dashboard unifies campaign readiness, messaging approvals, and weekly performance snapshots across the remote growth team. This release introduces a better reporting hierarchy, collaboration notes, and clearer ownership signals.",
    status: "Completed",
    priority: "Medium",
    progress: 100,
    deadline: "2026-05-22",
    technologies: ["React", "Charts", "REST API"],
    team: ["Sarah Johnson", "Hassan Ahmed", "Zarifa Jan"],
    category: "Growth",
    health: "Shipped",
    tasksDone: 26,
    tasksTotal: 26,
    recentUpdate:
      "Launch reporting widgets were published to the wider marketing workspace.",
    milestone: "Release complete",
    activity: [
      {
        id: "md-1",
        title: "Launch review archived",
        detail:
          "The post-launch review and KPI summary were shared with leadership.",
        time: "Today",
      },
      {
        id: "md-2",
        title: "Campaign board published",
        detail:
          "The final dashboard was promoted from beta to the default team view.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "A companion mobile experience for field teams who need fast offline workflows.",
    description:
      "Mobile App Development focuses on offline-friendly task capture, sync confidence, and smarter review flows for distributed field operations. The team is working through final QA risks before wider rollout.",
    status: "In Progress",
    priority: "High",
    progress: 45,
    deadline: "2026-06-04",
    technologies: ["Next.js", "PWA", "IndexedDB"],
    team: ["Ali Reza", "Fatima Noor", "Hassan Ahmed"],
    category: "Mobile Workflow",
    health: "Needs Attention",
    tasksDone: 14,
    tasksTotal: 31,
    recentUpdate:
      "Offline sync recovery is still being tested against duplicate-submission edge cases.",
    milestone: "Sync confidence improvements",
    activity: [
      {
        id: "mob-1",
        title: "Conflict messaging updated",
        detail:
          "The reconnect state now explains what will sync and what needs review.",
        time: "38 minutes ago",
      },
      {
        id: "mob-2",
        title: "QA edge case found",
        detail:
          "An intermittent collision state was added to the release checklist.",
        time: "Today",
      },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    summary:
      "A storefront operations workspace covering orders, support, and release readiness.",
    description:
      "E-commerce Platform helps cross-functional teams coordinate releases, merchandise updates, and conversion experiments in one workspace. The current effort focuses on merchandising requests and team visibility for urgent operational changes.",
    status: "In Progress",
    priority: "Medium",
    progress: 60,
    deadline: "2026-06-10",
    technologies: ["Next.js", "Stripe", "Supabase"],
    team: ["Sarah Johnson", "Ali Reza", "Hassan Ahmed"],
    category: "Commerce Ops",
    health: "Stable",
    tasksDone: 21,
    tasksTotal: 35,
    recentUpdate:
      "Merchandising controls are now connected to the weekly release checklist.",
    milestone: "Operations release board",
    activity: [
      {
        id: "eco-1",
        title: "Order ops review booked",
        detail:
          "Support and product teams aligned on the next prioritization pass.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "client-portal",
    title: "Client Portal",
    summary:
      "A transparent approval and reporting space for external stakeholders.",
    description:
      "Client Portal reduces feedback loops by centralizing approvals, deadlines, and reporting snapshots in one clean experience. The team is finalizing interaction polish and preparing a broader stakeholder rollout.",
    status: "In Review",
    priority: "High",
    progress: 88,
    deadline: "2026-05-31",
    technologies: ["Next.js", "Tailwind CSS", "Node API"],
    team: ["Zarifa Jan", "Fatima Noor", "Sarah Johnson"],
    category: "Client Experience",
    health: "Review Stage",
    tasksDone: 22,
    tasksTotal: 25,
    recentUpdate:
      "Approval cards and delivery history are ready for final stakeholder walkthrough.",
    milestone: "Stakeholder review",
    activity: [
      {
        id: "cp-1",
        title: "Approval history shipped",
        detail:
          "Stakeholders can now scan completed approvals in one timeline.",
        time: "Today, 8:10 AM",
      },
      {
        id: "cp-2",
        title: "Review checklist updated",
        detail: "Product and QA aligned on the final walkthrough criteria.",
        time: "Yesterday",
      },
    ],
  },
];

export const tasks = [
  {
    id: "task-01",
    title: "Finalize AI Workspace search handoff",
    status: "In Progress",
    priority: "High",
    progress: 72,
    dueDate: "2026-05-27",
    assignee: "Ali Reza",
    project: "AI Workspace",
    projectId: "ai-workspace",
  },
  {
    id: "task-02",
    title: "Prepare launch KPI summary",
    status: "Completed",
    priority: "Medium",
    progress: 100,
    dueDate: "2026-05-24",
    assignee: "Sarah Johnson",
    project: "Marketing Dashboard",
    projectId: "marketing-dashboard",
  },
  {
    id: "task-03",
    title: "Validate sync conflict recovery",
    status: "Review",
    priority: "High",
    progress: 86,
    dueDate: "2026-05-26",
    assignee: "Fatima Noor",
    project: "Mobile App Development",
    projectId: "mobile-app-development",
  },
  {
    id: "task-04",
    title: "Refine catalog promotion workflow",
    status: "Backlog",
    priority: "Low",
    progress: 18,
    dueDate: "2026-05-31",
    assignee: "Hassan Ahmed",
    project: "E-commerce Platform",
    projectId: "ecommerce-platform",
  },
  {
    id: "task-05",
    title: "Update client review agenda",
    status: "In Progress",
    priority: "Medium",
    progress: 54,
    dueDate: "2026-05-28",
    assignee: "Zarifa Jan",
    project: "Client Portal",
    projectId: "client-portal",
  },
  {
    id: "task-06",
    title: "Write release notes for marketing board",
    status: "Completed",
    priority: "Low",
    progress: 100,
    dueDate: "2026-05-21",
    assignee: "Sarah Johnson",
    project: "Marketing Dashboard",
    projectId: "marketing-dashboard",
  },
  {
    id: "task-07",
    title: "Audit responsive project cards",
    status: "Backlog",
    priority: "Medium",
    progress: 20,
    dueDate: "2026-05-30",
    assignee: "Ali Reza",
    project: "AI Workspace",
    projectId: "ai-workspace",
  },
  {
    id: "task-08",
    title: "Map order support escalation states",
    status: "Review",
    priority: "High",
    progress: 76,
    dueDate: "2026-05-29",
    assignee: "Hassan Ahmed",
    project: "E-commerce Platform",
    projectId: "ecommerce-platform",
  },
];

export const teamMembers = [
  {
    id: "member-01",
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Designs calm interfaces that keep remote teams focused on action instead of noise.",
    skills: ["Figma", "Design Systems", "Prototyping"],
    location: "London",
    timezone: "GMT+1",
    availability: "Online",
    status: "online",
    email: "sarah@bloomspace.io",
  },
  {
    id: "member-02",
    name: "Ali Reza",
    role: "Frontend Developer",
    bio: "Builds performant product surfaces with strong attention to interaction quality.",
    skills: ["Next.js", "React", "Accessibility"],
    location: "Kabul",
    timezone: "GMT+4:30",
    availability: "Online",
    status: "online",
    email: "ali@bloomspace.io",
  },
  {
    id: "member-03",
    name: "Fatima Noor",
    role: "Backend Developer",
    bio: "Connects product needs to reliable services, delivery workflows, and clean APIs.",
    skills: ["Node.js", "APIs", "Databases"],
    location: "Dubai",
    timezone: "GMT+4",
    availability: "Away",
    status: "away",
    email: "fatima@bloomspace.io",
  },
  {
    id: "member-04",
    name: "Hassan Ahmed",
    role: "DevOps Engineer",
    bio: "Keeps release pipelines steady and production environments calm during launch windows.",
    skills: ["CI/CD", "Observability", "Cloud"],
    location: "Karachi",
    timezone: "GMT+5",
    availability: "Offline",
    status: "offline",
    email: "hassan@bloomspace.io",
  },
  {
    id: "member-05",
    name: "Zarifa Jan",
    role: "Product Manager",
    bio: "Brings delivery, team communication, and roadmap clarity into one dependable rhythm.",
    skills: ["Roadmapping", "Stakeholder Sync", "Prioritization"],
    location: "Herat",
    timezone: "GMT+5",
    availability: "In Meeting",
    status: "away",
    email: "zarifarahmani99@gmail.com",
  },
];

export const meetings = [
  {
    id: "meeting-01",
    title: "Project Planning",
    date: "2026-05-27T10:00:00+04:30",
    endDate: "2026-05-27T11:00:00+04:30",
    type: "Planning",
    participants: ["Sarah Johnson", "Ali Reza", "Fatima Noor"],
    duration: "60 min",
    platform: "Zoom",
    host: "Ayesha Khan",
  },
  {
    id: "meeting-02",
    title: "Design Review",
    date: "2026-05-28T14:00:00+04:30",
    endDate: "2026-05-28T15:00:00+04:30",
    type: "Review",
    participants: ["Sarah Johnson", "Ali Reza", "Zarifa"],
    duration: "60 min",
    platform: "Google Meet",
    host: "Sarah Johnson",
  },
  {
    id: "meeting-03",
    title: "Sprint Retrospective",
    date: "2026-05-30T11:00:00+04:30",
    endDate: "2026-05-30T12:00:00+04:30",
    type: "Retrospective",
    participants: ["Ali Reza", "Fatima Noor", "Hassan Ahmed"],
    duration: "60 min",
    platform: "Zoom",
    host: "Ali Reza",
  },
  {
    id: "meeting-04",
    title: "Client Presentation",
    date: "2026-06-02T15:00:00+04:30",
    endDate: "2026-06-02T16:00:00+04:30",
    type: "Presentation",
    participants: ["Zarifa Jan", "Sarah Johnson", "Hassan Ahmed"],
    duration: "60 min",
    platform: "Microsoft Teams",
    host: "Zarifa Jan",
  },
];

export const recentActivity = [
  {
    id: "activity-01",
    title: "Sarah Johnson completed a task",
    detail: "UI design for dashboard",
    time: "2m ago",
    type: "design",
  },
  {
    id: "activity-02",
    title: "Ali Reza uploaded a file",
    detail: "Project requirements.docx",
    time: "1h ago",
    type: "docs",
  },
  {
    id: "activity-03",
    title: "Fatima Noor commented on a task",
    detail: "API integration notes",
    time: "3h ago",
    type: "comment",
  },
  {
    id: "activity-04",
    title: "You created a new project",
    detail: "Marketing campaign",
    time: "5h ago",
    type: "project",
  },
];

export const notifications = [
  {
    id: "notification-01",
    title: "Design review starts at 2:00 PM",
    detail: "The client portal design review is coming up this afternoon.",
    tone: "accent",
    time: "Today",
  },
  {
    id: "notification-02",
    title: "2 tasks need approval",
    detail: "Review queue is waiting on product and engineering sign-off.",
    tone: "warning",
    time: "Now",
  },
  {
    id: "notification-03",
    title: "Marketing Dashboard shipped",
    detail: "The campaign dashboard moved from beta to the main workspace.",
    tone: "success",
    time: "Done",
  },
];

export const messages = [
  {
    id: "message-01",
    sender: "Sarah Johnson",
    role: "UI/UX Designer",
    preview:
      "Shared a revised dashboard header and pastel chart treatment for approval.",
    time: "09:18 AM",
    unread: true,
  },
  {
    id: "message-02",
    sender: "Ali Reza",
    role: "Frontend Developer",
    preview:
      "Pushed the responsive fixes for the project cards and mobile sidebar.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "message-03",
    sender: "Fatima Noor",
    role: "Backend Developer",
    preview:
      "API response for the activity feed is ready for integration once the UI is final.",
    time: "Yesterday",
    unread: false,
  },
];

export const calendarEvents = [
  {
    id: "calendar-01",
    title: "Weekly leadership sync",
    date: "2026-05-26T16:00:00+04:30",
    tag: "Leadership",
  },
  {
    id: "calendar-02",
    title: "Mobile QA review",
    date: "2026-05-27T13:00:00+04:30",
    tag: "QA",
  },
  {
    id: "calendar-03",
    title: "Design critique",
    date: "2026-05-28T11:30:00+04:30",
    tag: "Design",
  },
  {
    id: "calendar-04",
    title: "Client approval call",
    date: "2026-05-29T15:30:00+04:30",
    tag: "Client",
  },
];

export const reportHighlights = [
  {
    id: "report-01",
    label: "Sprint completion",
    value: "81%",
    detail: "Across active product teams",
  },
  {
    id: "report-02",
    label: "Avg. response time",
    value: "2.4h",
    detail: "Internal requests and blockers",
  },
  {
    id: "report-03",
    label: "Meeting attendance",
    value: "94%",
    detail: "Last 30 days",
  },
];

export const settingsGroups = [
  {
    id: "settings-01",
    title: "Workspace preferences",
    description:
      "Branding, timezone defaults, and shared dashboard visibility.",
    items: ["Default timezone", "Shared themes", "Workspace logo"],
  },
  {
    id: "settings-02",
    title: "Notifications",
    description:
      "Choose which meetings, approvals, and task updates trigger alerts.",
    items: ["Email summaries", "Mentions", "Deadline reminders"],
  },
  {
    id: "settings-03",
    title: "Team access",
    description:
      "Roles, permissions, and invite controls for remote collaborators.",
    items: ["Role templates", "Guest seats", "Approval policies"],
  },
];

export const supportCards = [
  {
    title: "Live Chat",
    detail:
      "Reach support for urgent product or billing questions during work hours.",
    metric: "2 min avg reply",
  },
  {
    title: "Security Support",
    detail:
      "Review access, compliance, and incident-response questions with specialists.",
    metric: "1 hr SLA",
  },
  {
    title: "Workspace Setup",
    detail:
      "Get help configuring projects, navigation, and collaboration rituals.",
    metric: "Remote-first guidance",
  },
];

export const faqs = [
  {
    question: "Can remote contractors have limited access?",
    answer:
      "Yes. Access can be scoped by project, meetings, and role-based permissions so external contributors only see what they need.",
  },
  {
    question: "Does the dashboard support dark mode?",
    answer:
      "Yes. The theme toggle is available from the main header and applies across the entire workspace shell.",
  },
  {
    question: "Can meetings show up on the dashboard automatically?",
    answer:
      "Yes. Upcoming meetings, participants, and platform details can appear in the right-side planning panel.",
  },
];
