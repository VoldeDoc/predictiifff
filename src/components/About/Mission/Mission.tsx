import MainLayout from "@/components/Layout/MainLayout";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function MissionStatement() {
    return (
        <MainLayout>
            <>
                <div className="container py-20 mb-14">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1
                                className="text-4xl font-bold pb-3 text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #FA12E3, #7612FA, #12D0FA)",
                                }}
                            >
                                Predict.if Commitment to
                            </h1>
                            <h1
                                className="text-4xl font-bold pb-3 text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #FA12E3, #7612FA, #12D0FA)",
                                }}
                            >
                                Corporate Social Responsibility
                            </h1>
                            <p><span className="font-bold">Our AI-powered WealthTech application revolutionizes personal finance and investment management</span>, making wealth-building accessible and efficient for users of all levels. By harnessing the power of artificial intelligence and advanced analytics, this platform provides personalized financial strategies, insightful market analysis, and tailored recommendations—all under a user-friendly subscription model.

                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/images/About/QTS.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">

                </div>

                <div className="container mb-14">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bg-[#4FB7EF1A]  rounded-lg px-5 py-5">
                                <h1 className="text-2xl font-bold text-center pb-3">DEMO ACCOUNT</h1>
                                <div className="flex justify-center">
                                    <button className="text-white bg-black rounded-xl py-2 px-4 flex items-center space-x-2 text-sm">
                                        <span>Continue Growing as an Investor</span>
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="pt-7">Become part of our global community of investors to explore other traders' portfolios, discuss strategies, and tap into their collective expertise. Practice what you learn with a complimentary $100,000 virtual portfolio. Join predict.if today</p>

                                <div className="flex justify-center space-x-8">
                                    <img src="/assets/images/About/Switch.svg" alt="" />
                                    <img src="/assets/images/About/container.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="bg-[#4FB7EF1A]  rounded-lg px-5 py-5">
                                <h1 className="text-2xl font-bold text-center pb-3">For a better tomorrow </h1>
                                <p className="py-2 text-center">We strive to make a positive impact in all markets in which we operate.</p>
                                <div className="flex justify-center pb-20">
                                    <button className="text-white bg-black rounded-xl py-2 px-4 flex items-center space-x-2 text-sm">
                                        <span>AI POWERED MARKET INSIGHTS</span>
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-center space-x-8">
                                    <img src="/assets/images/About/Switch.svg" alt="" />
                                    <img src="/assets/images/About/container.svg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </MainLayout>
    )
}