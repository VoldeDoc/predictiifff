import { BsCloudCheckFill } from "react-icons/bs";
import MainLayout from "../Layout/MainLayout";
import { BellIcon } from "@heroicons/react/24/solid";
import { MdWaves } from "react-icons/md";
import SavingsTab from "./Tool/Tab";

export default function Saving() {
    return (
        <MainLayout>
            <>
                <main>
                    <section className="relative flex items-center justify-center bg-gray-100">
                        <img src="/assets/images/saving/BG.svg" alt="Background image for Saving page" className="object-cover w-full h-[450px]" />
                        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 px-9 py-4 w-[90%] sm:w-[760px] max-w-full h-auto sm:h-64 bg-white space-y-5">
                            <h1 className="text-md sm:text-lg  font-bold">
                                Predict.if Account (GBP/USD/EUR/Naira) (powered by Zigsaw) (Coming soon)
                            </h1>
                            <p className="text-sm">Introducing our multi-currency account designed for flexibility and ease in managing your finances. Perfect for both individual and group savings, this account allows high-level transfers with competitive rates. Hold and transact in multiple currencies, including Naira, GBP, USD, and EUR, making it ideal for international transactions and travel. Experience seamless banking that adapts to your financial needs, whether saving for personal goals or collaborating with a group. Join us for a smarter way to manage your money!</p>
                            <button className="bg-blue-800 text-white text-sm px-2 py-2">Get Started Free</button>
                        </div>
                    </section>

                    <div className="container py-20 max-[460px]:mt-52">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/assets/images/saving/left image.svg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="text-4xl font-bold pb-7">
                                    Application Overview: predict.if Account
                                </h1>

                                <p className="pb-7"><span className="font-bold">Description: </span>predict.if Account is a cutting-edge financial application designed to facilitate high-level fund transfers while leveraging artificial intelligence to generate insightful reports on user saving habits.</p>

                                <p className="px-4 py-4 bg-[#F8F8F8] rounded-lg text-[#838383]">
                                    predict.if account is an advanced financial application designed to facilitate high-level transfers for significant purchases, such as medical care, education or real estate  or other investments. By leveraging a cloud-based stablecoin and establishing connections with central banks in Nigeria and the UK to ensure best practice, compliace and safeguarding users, FundPredict enables secure transactions while utilizing artificial intelligence to generate detailed savings reports for both individuals and groups. This app is tailored for predict.if subscribers seeking efficient money management and financial analysis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container pb-16">
                        <div className="row">
                            <div className="col-lg-6 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-4xl font-bold pb-8">Key Features:</h1>
                                    <h1 className="text-2xl font-bold text-[#7A7777] pb-4">High-Level Transfer Capabilities</h1>

                                    <div className="flex space-x-4 pb-3">
                                        <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                        <div>
                                            <p className="font-bold">
                                                Stablecoin Transactions:
                                            </p>
                                            <p>Enables users to make large purchases with a stable coin,
                                                reducing the impact of market volatility and ensuring secure payments.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4 pb-3">
                                        <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                        <div>
                                            <p className="font-bold">
                                                Cross-Border Connectivity:
                                            </p>
                                            <p>Facilitates transactions between financial institutions in Nigeria and the UK, streamlining the process for international buyers and investors.
                                            </p>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl font-bold text-[#7A7777] pb-2">Predictive Analytics</h1>

                                    <div className="flex space-x-4 pb-3">
                                        <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                        <div>
                                            <p className="font-bold">
                                                Predictive Analytics:
                                            </p>
                                            <p>Facilitates transactions between financial institutions in Nigeria and the UK, streamlining the process for international buyers and investors.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4 pb-3">
                                        <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                        <div>
                                            <p className="font-bold">
                                                Investment Insights:
                                            </p>
                                            <p>AI analyzes user behavior and financial patterns to predict the likelihood of high-level transfers for major purchases, assisting users in planning and budgeting effectively.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4 pb-3">
                                        <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                        <div>
                                            <p className="font-bold">
                                                Investment Insights:
                                            </p>
                                            <p>Provides tailored recommendations based on user profiles and market trends,
                                                helping users make informed decisions regarding purchases and investments.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 flex items-stretch">
                                <div className="relative flex-grow flex flex-col justify-between">
                                    <img src="/assets/images/education/Img 2.svg" alt="" className="h-[600px] object-cover" />
                                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 sm:top-20 sm:-right-10 sm:left-auto sm:transform-none bg-[#161C2D] py-6 rounded-lg w-11/12 sm:w-96 flex px-2 space-x-4">
                                        <div className="bg-[#68D585] rounded-full w-14 h-14 flex justify-center">
                                            <BellIcon className="text-[#2D2D2D] w-8 items-center flex justify-center text-center" />
                                        </div>
                                        <div className="space-y-4">
                                            <h1 className="text-gray-300 text-sm sm:text-base">New Invitation!</h1>
                                            <h1 className="text-white text-sm sm:text-base">Investor insight</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-10">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="relative">
                                    <img src="/assets/images/saving/Light.svg" alt="" className="h-[700px] object-cover" />
                                    <div className="absolute top-24 left-3/4 transform -translate-x-1/2 sm:top-24 sm:right-16 sm:left-auto sm:transform-none">
                                        <img src="/assets/images/saving/Users.svg" alt="" className="w-3/4 sm:w-auto h-56" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <h1 className="text-2xl font-bold text-[#7A7777] pb-4">Comprehensive Reporting</h1>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Detailed Individual Reports:
                                        </p>
                                        <p>Generates in-depth reports on individual saving habits, identifying strengths, weaknesses, and opportunities for improvement.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Group Savings Analysis:
                                        </p>
                                        <p>Aggregates data to create reports on group saving trends, which can
                                            be beneficial for community initiatives or collective investments
                                        </p>
                                    </div>
                                </div>

                                <h1 className="text-2xl font-bold text-[#7A7777] py-2 ">User-Friendly Interface</h1>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Interactive Dashboard
                                        </p>
                                        <p>Offers a clean, intuitive interface that presents key financial metrics, predictions, and reports in real-time.
                                        </p>
                                    </div>
                                </div>



                                <div className="flex space-x-4 py-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Custom Notifications:
                                        </p>
                                        <p>Users can set alerts for important financial events, such as changes
                                            in saving trends or markimport SavingsTab from './Tool/Tab';
                                            et conditions.
                                        </p>
                                    </div>
                                </div>

                                <h1 className="text-2xl font-bold text-[#7A7777] py-2">Integration with Financial Institutions</h1>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Data Sharing Capabilities
                                        </p>
                                        <p>Users can share their savings reports with banks and financial
                                            advisors to enhance the quality of financial advice and product
                                        </p>
                                    </div>
                                </div>



                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            APIs for Financial Institutions
                                        </p>
                                        <p>Provides access to anonymized data on saving habits, allowing
                                            institutions to better understand risk profiles and tailor their
                                            services accordingly.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="container py-10">
                        <div className="row">
                            <div className="col-lg-6">

                                <h1 className="text-2xl font-bold text-[#7A7777] pb-4">Integration with Financial Institutions</h1>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Data Sharing Capabilities
                                        </p>
                                        <p>Users can share their savings reports with banks and financial
                                            advisors to enhance the quality of financial advice and product
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            APIs for Financial Institutions
                                        </p>
                                        <p>Provides access to anonymized data on saving habits, allowing
                                            institutions to better understand risk profiles and tailor their
                                            services accordingly.
                                        </p>
                                    </div>
                                </div>

                                <h1 className="text-2xl font-bold text-[#7A7777] py-2 ">Robust Security and Compliance</h1>

                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            High-Level Security Protocols
                                        </p>
                                        <p>Employs end-to-end encryption and adheres to strict compliance with
                                            financial regulations to protect user data and transactions.
                                        </p>
                                    </div>
                                </div>



                                <div className="flex space-x-4 py-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Privacy Controls
                                        </p>
                                        <p>Users can manage their data sharing preferences, ensuring transparency and control over their personal information.

                                        </p>
                                    </div>
                                </div>


                                <div className="flex space-x-4 pb-3">
                                    <div> <BsCloudCheckFill className="text-blue-800" /></div>
                                    <div>
                                        <p className="font-bold">
                                            Target Audience
                                        </p>
                                        <p>FundPredict caters to individuals seeking to make significant financial purchases and investments, as well as financial institutions looking to improve their understanding of consumer behavior and risk assessment.t
                                        </p>
                                    </div>
                                </div>



                            </div>
                            <div className="col-lg-6">
                                <div className="relative">
                                    <img src="/public/assets/images/saving/Frame 46.svg" alt="" className="h-[500px] w-full" />
                                    <div className="absolute top-20 right-10 sm:right-16">
                                        <img src="/assets/images/saving/Group 59.svg" alt="" className="w-1/2 sm:w-auto" />
                                    </div>
                                    <div className="absolute bottom-7 right-2 sm:right-7">
                                        <img src="/assets/images/saving/Frame 45.svg" alt="" className="w-1/2 sm:w-auto h-32" />
                                    </div>
                                    <div className="absolute bottom-12 left-3 sm:left-14">
                                        <img src="/assets/images/saving/Group 46.svg" alt="" className="w-1/2 sm:w-auto" />
                                    </div>
                                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:-bottom-7 sm:left-52 sm:transform-none">
                                        <img src="/assets/images/saving/Group 47.svg" alt="" className="w-1/2 sm:w-auto" />
                                    </div>
                                    <div className="absolute top-10 left-10 sm:left-14">
                                        <img src="/assets/images/saving/Rectangle 34.svg" alt="" className="w-1/2 sm:w-auto" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="bg-[#F4F7FA] py-10">
                        <div className="container py-10 ">
                            <div className="row">


                                <div className="col-lg-5">
                                    <div className="relative">
                                        <img src="/assets/images/saving/Rectangle 48.png" alt="" className=" h-[500px]" />
                                        <div className="absolute top-44 left-1/2 transform -translate-x-1/2  sm:transform-none sm:-left-14">
                                            <img src="/assets/images/saving/Group 113.svg" alt="" className="w-1/2 sm:w-auto" />
                                        </div>
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  sm:transform-none sm:-left-14">
                                            <img src="/assets/images/saving/Group 114.svg" alt="" className="w-1/2 sm:w-auto" />
                                        </div>
                                        <div className="absolute top-44 right-1/2 transform translate-x-1/2  sm:transform-none sm:right-6">
                                            <img src="/assets/images/saving/Group 46.svg" alt="" className="w-1/2 sm:w-auto" />
                                        </div>
                                        <div className="absolute top-14 left-1/2 transform -translate-x-1/2  sm:transform-none sm:-left-14 bg-white rounded-lg px-4 py-2">
                                            <img src="/assets/images/saving/Group 110.svg" alt="" className="w-1/3 sm:w-auto" />
                                        </div>
                                    </div>
                                </div>



                                <div className="col-lg-7">
                                    <h1 className="text-4xl font-bold">Hold different currencies </h1>
                                    <h1 className="text-4xl font-bold pb-7">(The Money Wallet)</h1>

                                    <p className="text-[#161C2D] mb-16">
                                        Introducing a versatile multi-currency account that allows you to hold, manage, and exchange various currencies including USD, GBP, EUR, and Naira. Perfect for predict.if subscribers that are travelers, expatriates, and/or hold international businesses, this account offers competitive exchange rates, low fees, and easy access to your funds anytime, anywhere. Seamlessly transact across borders while keeping your money secure and organized in one convenient place.
                                    </p>

                                    <div className="flex space-x-4 mb-8">
                                        <MdWaves className="text-lg" />
                                        <p className="font-bold text-xl">Tracker</p>
                                    </div>
                                    <p className="text-[#161C2D]">The predict.if tracker for wealth management is a digital tool designed to help individuals monitor and manage their financial activities effectively. Here’s a breakdown of its key features and functionalities:</p>
                                </div>


                            </div>

                        </div>
                    </div>
                    
                    <div className="container mt-16">
                    <div className="row ">
                                <SavingsTab />
                            </div>
                    </div>
                </main>
            </>
        </MainLayout>
    )
}