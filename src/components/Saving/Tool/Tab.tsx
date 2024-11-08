import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import TabItem from './TabItems';
import BenefitItem from './BenefitItem';
import { FaWaveSquare, FaSync, FaGlobe, FaLightbulb, FaChartBar, FaLock, FaMobileAlt, FaFileAlt } from "react-icons/fa";

export default function SavingsTab() {
    const [activeIndex, setActiveIndex] = useState(0);

    const keyFeaturesData = [
        {
            Icon: FaWaveSquare,
            title: "Expense Categorization",
            descriptions: [
                "- Automatically categorize expenses (e.g., groceries, entertainment, bills) for easy tracking.",
                "- Customizable categories to suit personal spending habits"
            ]
        },
        {
            Icon: FaChartBar,
            title: "Budgeting Tools",
            descriptions: [
                "- Set monthly or yearly budgets for different categories",
                "- Real-time alerts when nearing budget limits."
            ]
        },
        {
            Icon: FaSync,
            title: "Income Tracking",
            descriptions: [
                "- Record multiple income sources, including salaries, investments, and side gigs.",
                "- Visualize income trends over time."
            ]
        },
        {
            Icon: FaGlobe,
            title: "Financial Goals",
            descriptions: [
                "- Set specific savings or investment goals.",
                "- Track progress towards these goals with visual dashboard."
            ]
        },
        {
            Icon: FaLightbulb,
            title: "Investment Insights",
            descriptions: [
                "- Monitor investment performance alongside spending.",
                "- Analyze asset allocation and diversification."
            ]
        },
        {
            Icon: FaFileAlt,
            title: "Reports and Analytics",
            descriptions: [
                "- Generate detailed reports on spending patterns and trends.",
                "- Visual charts and graphs for easy comprehension of financial health."
            ]
        },
        {
            Icon: FaSync,
            title: "Syncing with Bank Accounts",
            descriptions: [
                "- Connect to bank accounts and credit cards for automatic transaction imports.",
                "- Ensure data accuracy and reduce manual entry."
            ]
        },
        {
            Icon: FaLock,
            title: "Privacy and Security",
            descriptions: [
                "- Employ encryption and secure access measures to protect sensitive financial information."
            ]
        },
        {
            Icon: FaMobileAlt,
            title: "Mobile and Web Access",
            descriptions: [
                "- Access your financial data from anywhere using mobile and web applications."
            ]
        }
    ];

    const benefitsData = [
        "Improved Financial Awareness : Helps users understand their spending habits and identify areas for improvement.",
        "Better Financial Decision-Making : Enables informed decisions about budgeting, saving, and investing..",
        "Enhanced Goal Achievement : Keeps users motivated and on track towards financial goals..",
        "Long-Term Wealth Management : Supports overall financial health, helping users build and preserve wealth over time.",
    ];

    return (
        <div className="card">
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header={<span className={activeIndex === 0 ? 'active-tab' : ''}>Key Features</span>} className="no-background">
                    {keyFeaturesData.map((feature, index) => (
                        <TabItem 
                            key={index}
                            Icon={feature.Icon}
                            title={feature.title}
                            descriptions={feature.descriptions}
                        />
                    ))}
                </TabPanel>
                <TabPanel header={<span className={activeIndex === 1 ? 'active-tab' : ''}>Benefits</span>} className="no-background">
                    {benefitsData.map((benefit, index) => (
                        <BenefitItem key={index} text={benefit} />
                    ))}
                </TabPanel>
            </TabView>
            <style>{`
                .active-tab {
                    border-bottom: 2px solid #007bff;
                    padding-bottom: 4px;
                }
                .no-background {
                    background: none !important;
                }
            `}</style>
        </div>
    )
}