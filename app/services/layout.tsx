import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Financial Services - Home Loans, Commercial Finance',
    description: 'Comprehensive financial services including home loans, commercial loans, development finance, and financial planning. Expert guidance for all your financial needs.',
    keywords: [
        'home loans',
        'commercial loans',
        'development finance',
        'personal finance',
        'financial planning',
        'mortgage broker',
        'business loans',
        'investment property loans',
        'construction loans'
    ],
    openGraph: {
        title: 'Financial Services - Home Loans, Commercial Finance | Yisa Finance Solutions',
        description: 'Comprehensive financial services including home loans, commercial loans, development finance, and financial planning.',
        url: 'https://yisafinance.com/services',
        type: 'website',
    },
    twitter: {
        title: 'Financial Services - Home Loans, Commercial Finance | Yisa Finance Solutions',
        description: 'Comprehensive financial services including home loans, commercial loans, development finance, and financial planning.',
    },
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
