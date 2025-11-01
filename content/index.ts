// Content Management System
// All website content is centralized here for easy management

export { siteConfig, seoConfig } from "./site-config";
export { homeContent } from "./home-content";
export { servicesContent } from "./services-content";
export { aboutContent } from "./about-content";
export { contactContent } from "./contact-content";
export { metaContent } from "./meta-content";

// Re-export commonly used content
export const commonContent = {
  navigation: {
    home: "Home",
    services: "Services",
    about: "About Us",
    contact: "Contact Us",
    cta: "Get Started",
  },

  footer: {
    description: "Expert financial guidance for your success.",
    copyright: "© 2024 Yisa Finance Solutions. All Rights Reserved.",
  },

  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@yisafinance.com",
    address: "123 Finance St, City",
  },

  cta: {
    primary: "Get In Touch",
    secondary: "Learn More",
  },
};
