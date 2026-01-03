export interface Service {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    offeringsTitle: string;
    offerings: {
        title?: string;
        items: string[];
    }[];
}

export const services: Service[] = [
    {
        id: 2,
        slug: "finance-accounting-solutions",
        title: "FINANCE & ACCOUNTING SOLUTIONS",
        description: "Achieve financial clarity, improved controls, and real-time insights with streamlined accounting systems and expert financial management.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        offeringsTitle: "Our offerings include",
        offerings: [
            {
                items: [
                    "Accounting system setup & monthly bookkeeping",
                    "MIS reporting, dashboards & decision-ready insights",
                    "Working capital tracking, fund-flow analysis & ratio assessment",
                    "ERP transition support & modernization of legacy systems"
                ]
            }
        ]
    },
    {
        id: 1,
        slug: "global-financial-compliance",
        title: "GLOBAL FINANCIAL & COMPLIANCE SERVICES",
        description: "We deliver high-level tax planning, wealth structuring, and multinational compliance support for corporate groups, international businesses, and high-net-worth individuals.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
        offeringsTitle: "Our offerings include",
        offerings: [
            {
                title: "Solutions for High-Net-Worth Individuals (HNIs)",
                items: [
                    "Holistic tax optimization and wealth planning",
                    "Cross-border investment compliance",
                    "Succession structuring and asset protection strategies",
                    "Multi-jurisdiction advisory for global operations"
                ]
            },
            {
                title: "Solutions for Corporates",
                items: [
                    "International tax structuring",
                    "Entity setup, restructuring & global expansion support",
                    "Cross-border transaction advisory",
                    "Corporate governance & regulatory compliance"
                ]
            }
        ]
    },
    {
        id: 3,
        slug: "fundraising-capital-advisory",
        title: "FUNDRAISING, CAPITAL ADVISORY & INVESTOR DOCUMENTATION",
        description: "Strengthen your capital strategy with structured financial storytelling and investor-ready documentation. From early-stage ventures to established businesses, we support every stage of the funding journey.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        offeringsTitle: "Our expertise covers",
        offerings: [
            {
                items: [
                    "Fundraising strategy & capital structuring",
                    "Investor pitch decks & board-level financial narratives",
                    "Financial models, projections & valuation reports",
                    "CMA data, projections & lender-ready submissions"
                ]
            }
        ]
    },
    {
        id: 4,
        slug: "audit-due-diligence",
        title: "INTERNAL AUDIT, DUE DILIGENCE & LITIGATION SUPPORT",
        description: "Protect your business with robust risk controls, deep-dive assessments, and regulatory compliance frameworks.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        offeringsTitle: "Our solutions include",
        offerings: [
            {
                items: [
                    "Internal audits for governance & operational efficiency",
                    "Financial & legal due diligence for mergers, acquisitions & investments",
                    "Litigation support, compliance management & regulatory representation",
                    "Fraud detection, control reviews & process improvements"
                ]
            }
        ]
    }
];
