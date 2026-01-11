export interface Project {
    title: string;
    category: string;
    type: string;
    image: string;
    year: string;
    url: string;
    status: string;
    isHidden?: boolean;
    longDescription?: string;
    techStack?: string[];
    challenge?: string;
    solution?: string;
}

export const projects: Project[] = [
    {
        title: "Project ZolviQ",
        category: "Stealth Mode 🕵️",
        type: "stealth",
        image: "/project_zolviq.png",
        year: "2026",
        url: "#",
        status: "COMING SOON",
        isHidden: false,
        longDescription: "Something revolutionary is currently cooking in the lab. A platform that will redefine how resolution works. (Shhh... it's a secret)",
        techStack: ["Neural Networks", "TensorFlow", "Node.js", "Holographic UI"],
        challenge: "Developing a non-intrusive intelligence layer that can autonomously manage large-scale enterprise systems without human latency.",
        solution: "Implemented a custom transformer architecture optimized for real-time diagnostics and predictive healing protocols."
    },
    {
        title: "Zhatn",
        category: "Mobile Application",
        type: "web",
        image: "/screenshot_zhatn.png?v=2",
        year: "2025",
        url: "https://zhatn.pages.dev/",
        status: "LIVE SYSTEM"
    },
    {
        title: "IT Service Desk",
        category: "Internal Portal",
        type: "web",
        image: "/screenshot_itsm.png?v=2",
        year: "2025",
        url: "#",
        status: "RESTRICTED"
    },
    {
        title: "Rose Printers",
        category: "Branding & Design",
        type: "design",
        image: "/screenshot_rose.png?v=2",
        year: "2025",
        url: "https://roseprinters.pages.dev/",
        status: "PUBLISHED"
    },
    {
        title: "Dark Vibe",
        category: "Boutique Startup",
        type: "web",
        image: "/screenshot_darkvibe.png?v=2",
        year: "2025",
        url: "https://darkvibelk.pages.dev/",
        status: "ONLINE"
    },
    {
        title: "Portfolio V2",
        category: "Personal Brand",
        type: "web",
        image: "/screenshot_portfolio.png?v=2",
        year: "2025",
        url: "https://armohamedzuhail.com",
        status: "DEPLOYED"
    },
    // Networking Projects
    {
        title: "ISP Failover",
        category: "Network Engineering",
        type: "network",
        image: "/project_network_isp.png",
        year: "2024",
        url: "#",
        status: "ARCHIVED"
    },
    {
        title: "WAN Topology",
        category: "Network Architecture",
        type: "network",
        image: "/project_network_lan.png",
        year: "2023",
        url: "#",
        status: "ARCHIVED"
    }
];
