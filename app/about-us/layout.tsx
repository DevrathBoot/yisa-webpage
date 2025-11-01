import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - Our Story, Values & Approach',
    description: 'Learn about Yisa Finance Solutions - our story, core values, and client-centric approach. Trusted by 500+ clients with $50M+ in successful loans and 15+ years of experience.',
    keywords: [
        'about yisa finance',
        'financial advisors',
        'company story',
        'financial expertise',
        'client testimonials',
        'trusted finance brokers',
        'financial guidance',
        'professional team'
    ],
    openGraph: {
        title: 'About Us - Our Story, Values & Approach | Yisa Finance Solutions',
        description: 'Learn about Yisa Finance Solutions - our story, core values, and client-centric approach. Trusted by 500+ clients with $50M+ in successful loans.',
        url: 'https://yisafinance.com/about-us',
        type: 'website',
    },
    twitter: {
        title: 'About Us - Our Story, Values & Approach | Yisa Finance Solutions',
        description: 'Learn about Yisa Finance Solutions - our story, core values, and client-centric approach. Trusted by 500+ clients with $50M+ in successful loans.',
    },
}

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
