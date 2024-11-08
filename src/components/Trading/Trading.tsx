import MainLayout from "@/components/Layout/MainLayout";
import Button from "@/components/Ui/Button";
import { FaArrowRight } from "react-icons/fa6";

export default function Trade() {
    return (
        <>
            <MainLayout>
                <div className="">
                    <div className="bg-blue-800 container-fluid ">

                        <div className="row py-10">
                            <div className="col-lg-6">
                                <div className="space-y-5">
                                    <h1 className="text-white text-4xl">Invest in </h1>
                                    <h1 className="text-white text-4xl">Global Stock </h1>
                                    <p className="text-white text-md pb-16">
                                        From technology to healthcare, and from New York to Hong Kong. predict.if supports stock investors by delivering real-time data analysis and insights. The AI processes vast datasets to identify trends, patterns, and potential market shifts, allowing investors to make informed decisions.
                                    </p>
                                    <Button text="Get Started"
                                        icon={FaArrowRight}
                                        iconPosition="right"
                                        className="bg-[#4FB7EF]" />
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="relative bg-white rounded-full h-96 w-96 ">
                                    <img src="/assets/images/trade/cards.svg" alt="" className="absolute h-full w-auto right-20 transform " />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row container-fluid py-9 mt-9">
                        <div className="col-lg-6">
                            <img src="/assets/images/trade/Button container.svg" alt="" />
                            <h1 className="text-3xl py-2">Unlock new ETF’s </h1>
                            <h1 className="text-3xl py-2">diversification opportunities</h1>
                            <p className="text-gray-600">
                                Exchange-traded funds (ETFs) provide investors with a flexible and comprehensive approach to investing in the financial markets at a low-cost entry point and without management fees—making them perfect for portfolio diversification. Predit.if offers the option to invest in ETFs as underlying assets or trade them as CFDs.

                                AI enhances the investment experience with ETFs by providing data-driven insights and predictive analytics. It analyzes vast amounts of market data in real time, identifying trends and potential opportunities across various sectors. With AI, investors can optimize their ETF selection based on risk tolerance and performance forecasts, enabling smarter, more informed decisions. Additionally, AI tools can automate portfolio rebalancing and monitor market conditions, ensuring that investors stay aligned with their investment goals.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/images/trade/Table.svg" alt="" />
                        </div>
                    </div>

                    <div className="bg-black">
                        <div className="container py-9 mt-9">
                            <div className="row py-28 ">
                                <div className="col-lg-6">
                                    <hr className="w-40 border-y-4" />
                                    <h1 className="text-4xl text-white py-5">Commodities</h1>
                                    <p className="text-white">I will help you with finding a solution</p>
                                    <p className="text-white pb-12">and solve your problem.</p>
                                    <div className="bg-white h-32 w-32 rounded-full flex justify-center">
                                        <p className="text-center flex justify-center items-center font-semibold">Let's talk</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="text-white text-3xl">Opportunities in Commodities with AI Insights</h1>
                                    <p className="text-white pt-3">Discover exciting possibilities in the world’s leading resource markets. With one-click analysis powered by advanced AI algorithms, you will be able to  trade commodity CFDs and choose your investment... (Continues)
                                    </p>
                                    <p className="pt-5 text-white">

                                        AI assists commodity investors by providing advanced analytics and insights into market trends. It processes extensive data from various sources to identify patterns and price movements, enabling investors to make informed trading decisions. Through predictive modeling, AI can forecast commodity price fluctuations and assess risks, helping investors optimize their strategies. Additionally, AI tools facilitate real-time monitoring of market conditions and automate trading processes, allowing investors to respond swiftly to changes and enhance their overall investment performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row py-24 ">
                                <div className="col-lg-6">
                                    <img src="/assets/images/trade/Button.svg" alt="" />
                                    <h1 className="text-3xl font-bold">Go Long or Short on </h1>
                                    <h1 className="text-3xl font-bold">Currencies with AI-Based  </h1>
                                    <h1 className="text-3xl font-bold">analysis</h1>

                                    <p className="text-gray-700 pt-7 pb-4">
                                        Engage in trading on the world’s largest and most active financial market—the foreign exchange (FX) market—enhanced by AI-driven insights. Utilize advanced algorithms to analyze major USD pairs and other currency crosses, enabling informed buying and selling decisions

                                    </p>
                                    <p className="text-gray-700">
                                        AI aids currency investors by delivering real-time market analysis and insights. It processes vast amounts of data to identify trends and correlations among currency pairs, enabling more informed trading decisions. Through predictive analytics, AI can forecast currency movements and assess potential risks, helping investors optimize their strategies. Additionally, AI-driven tools automate trading processes and monitor market conditions continuously, allowing investors to react swiftly to fluctuations and enhance their trading performance in the fast-paced forex market.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/assets/images/trade/Card.svg" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container py-14">
                            <p className="text-blue-600 font-extrabold text-md pb-4 text-center">Indices</p>
                            <h1 className="text-3xl font-bold text-center pb-9">Expand Exposure with AI-Driven Index Analysis</h1>
                            <img src="/assets/images/trade/unsplash.svg" alt="" />
                            <p className="text-gray-800 pt-7">
                                Leverage market trends from major stock exchanges worldwide—whether rising or falling. Indices offer an excellent opportunity to invest in the overall movements of the stock market, with AI-based analysis providing insights to help you manage your exposure effectively and adapt your strategy as needed.


                            </p>
                            <p className="text-[#3C3939] pt-5 pb-10">

                                AI enhances index investing by providing deep market analysis and trend identification. It processes large datasets to detect patterns and movements across various indices, enabling investors to make informed decisions. With predictive analytics, AI forecasts potential shifts in index performance and evaluates risks, helping investors refine their strategies. Additionally, AI tools automate portfolio management and rebalancing, ensuring investors stay aligned with market trends and optimize their exposure to broader market movements.
                            </p>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    );
}