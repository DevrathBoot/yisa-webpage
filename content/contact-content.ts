export const contactContent = {
  hero: {
    title: "Get In",
    titleHighlight: "Touch",
    subtitle:
      "Ready to start your financial journey? We're here to help. Contact us today for a free consultation.",
    backLink: "Back to Home",
  },

  contactInfo: {
    title: "Contact Information",
    items: [
      {
        type: "phone",
        title: "Phone",
        value: "+1 (555) 123-4567",
        subtitle: "Mon-Fri 9am-6pm",
      },
      {
        type: "email",
        title: "Email",
        value: "info@yisafinance.com",
        subtitle: "We'll respond within 24 hours",
      },
      {
        type: "address",
        title: "Office",
        value: "123 Finance Street\nSuite 456\nBusiness District, City 12345",
        subtitle: "",
      },
      {
        type: "hours",
        title: "Business Hours",
        value:
          "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed",
        subtitle: "",
      },
    ],
    quickResponse: {
      title: "Quick Response",
      description:
        "Need immediate assistance? Call us directly for urgent matters. For general inquiries, email or use the contact form and we'll get back to you promptly.",
    },
  },

  form: {
    title: "Send us a Message",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Your full name",
        required: true,
      },
      email: {
        label: "Email Address",
        placeholder: "your@email.com",
        required: true,
      },
      phone: {
        label: "Phone Number",
        placeholder: "(555) 123-4567",
        required: false,
      },
      service: {
        label: "Service of Interest",
        placeholder: "Select a service",
        required: false,
        options: [
          { value: "", label: "Select a service" },
          { value: "home-loans", label: "Home Loans" },
          { value: "commercial-loans", label: "Commercial Loans" },
          { value: "development-finance", label: "Development Finance" },
          { value: "personal-finance", label: "Personal Finance" },
          { value: "financial-planning", label: "Financial Planning" },
          { value: "other", label: "Other" },
        ],
      },
      message: {
        label: "Message",
        placeholder: "Tell us about your financial goals or questions...",
        required: true,
        rows: 6,
      },
    },
    submitButton: "Send Message",
    submittingText: "Sending...",
    successMessage: {
      title: "Thank You!",
      description:
        "Your message has been sent successfully. We'll get back to you within 24 hours.",
    },
  },

  map: {
    title: "Visit Our Office",
    subtitle:
      "Located in the heart of the business district, we're easily accessible by public transport and car.",
    placeholder: "Interactive map will be displayed here",
    address: "123 Finance Street, Suite 456, Business District",
  },
};
