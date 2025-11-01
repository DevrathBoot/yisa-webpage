// SEO utility functions and constants
export const seoConfig = {
  defaultTitle:
    "Yisa Finance Solutions - Expert Financial Services & Solutions",
  titleTemplate: "%s | Yisa Finance Solutions",
  defaultDescription:
    "Transform your financial future with Yisa Finance Solutions. Expert guidance in home loans, commercial finance, and personalized financial strategies.",
  siteUrl: "https://yisafinance.com",
  defaultImage: "/yisa-logo.svg",
  twitterUsername: "@yisafinance",
  author: "Yisa Finance Solutions",
  organization: {
    name: "Yisa Finance Solutions",
    url: "https://yisafinance.com",
    logo: "https://yisafinance.com/yisa-logo.svg",
    contactPoint: {
      telephone: "+1-555-123-4567",
      email: "info@yisafinance.com",
      contactType: "customer service",
    },
    address: {
      streetAddress: "123 Finance Street, Suite 456",
      addressLocality: "Business District",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/company/yisafinance",
      "https://facebook.com/yisafinance",
      "https://instagram.com/yisafinance",
    ],
  },
};

export const keywordSets = {
  general: [
    "finance solutions",
    "financial services",
    "expert financial advice",
    "trusted finance broker",
    "financial planning",
  ],
  homeLoans: [
    "home loans",
    "mortgage broker",
    "first home buyer",
    "investment property loans",
    "refinancing",
    "construction loans",
  ],
  commercial: [
    "commercial loans",
    "business finance",
    "commercial property loans",
    "business equipment finance",
    "working capital loans",
  ],
  development: [
    "development finance",
    "construction finance",
    "project finance",
    "land acquisition finance",
    "property development loans",
  ],
};

export function generateStructuredData(type: string, pageData?: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    name: seoConfig.organization.name,
    url: seoConfig.siteUrl,
    logo: seoConfig.organization.logo,
    contactPoint: seoConfig.organization.contactPoint,
    address: seoConfig.organization.address,
    sameAs: seoConfig.organization.sameAs,
  };

  return { ...baseData, ...pageData };
}
