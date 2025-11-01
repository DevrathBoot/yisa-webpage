import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - Get Expert Financial Advice Today',
    description: 'Contact Yisa Finance Solutions for expert financial advice. Call +1 (555) 123-4567, email info@yisafinance.com, or visit our office. Free consultations available.',
    keywords: [
        'contact yisa finance',
        'financial consultation',
        'finance broker contact',
        'get financial advice',
        'loan consultation',
        'financial planning consultation',
        'mortgage broker contact'
    ],
    openGraph: {
        title: 'Contact Us - Get Expert Financial Advice Today | Yisa Finance Solutions',
        description: 'Contact Yisa Finance Solutions for expert financial advice. Call +1 (555) 123-4567, email info@yisafinance.com, or visit our office.',
        url: 'https://yisafinance.com/contact-us',
        type: 'website',
    },
    twitter: {
        title: 'Contact Us - Get Expert Financial Advice Today | Yisa Finance Solutions',
        description: 'Contact Yisa Finance Solutions for expert financial advice. Call +1 (555) 123-4567, email info@yisafinance.com, or visit our office.',
    },
}

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
