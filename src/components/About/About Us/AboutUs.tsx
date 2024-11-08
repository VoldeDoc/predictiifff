import MainLayout from "@/components/Layout/MainLayout";

export default function AboutUs() {
    return (
        <MainLayout>
            <>
                <div className="container py-12">
                    <div className="row pb-20 space-y-9">
                        <div className="col-lg-6 ">
                            <h1
                                className="text-3xl font-bold pb-3 text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #12D0FA,#7612FA, )",
                                }}
                            >
                                Overview
                            </h1>
                            <p className="text-sm">
                                <span className="font-bold"> Our AI-powered WealthTech application revolutionizes personal finance and investment management</span>, making wealth-building accessible and efficient for users of all levels. By harnessing the power of artificial intelligence and advanced analytics, this platform provides personalized financial strategies, insightful market analysis, and tailored recommendations—all under a user-friendly subscription model.
                                Our innovative application seamlessly integrates real-time current affairs with historical data analysis to provide users with a comprehensive understanding of market dynamics. By leveraging artificial intelligence and extensive datasets, this platform equips investors and financial enthusiasts with actionable insights and personalized strategies, enhancing their ability to navigate the ever-evolving financial landscape.

                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/images/About/Picture.svg" alt="" />
                        </div>
                    </div>

                    <div className="row bg-[#0C21C1] text-white rounded-lg py-16 px-7">
                    <h1 className="pb-3">Key Features:</h1>
                        <div className="col-lg-6 space-y-7 pb-4">
                          

                            <div>
                                <h3>Unity Makes Strenght :</h3>
                                <p>- AI algorithms analyze historical market trends alongside current events such as economic shifts, political developments, and global news to forecast potential impacts on investments. As well as assess individual financial goals, risk tolerance, and market conditions to create customised investment portfolios.</p>
                                <p>   - Real-time updates ensure users receive timely insights that reflect the latest developments.</p>
                            </div>

                            <div>
                                <h3>Comprehensive Data Analysis :</h3>
                                <p>- Access to a rich database of historical financial data, market performance metrics, and relevant economic indicators.</p>
                                <p>- In-depth analysis that correlates historical trends with current affairs to uncover patterns and opportunities.</p>
                            </div>

                            <div>
                                <h3>Smart Financial Insights:</h3>
                                <p>- In-depth analysis of user portfolios, including performance metrics and diversification strategies.</p>
                                <p>- Predictive analytics to forecast potential market shifts and investment outcomes.</p>
                            </div>

                            <div>
                                <h3>Real-Time News Integration</h3>
                                <p>   - A built-in news feed curates relevant articles and updates from reputable sources, allowing users to stay informed on events that could affect their investments.

                                    - Customized notifications for news articles that align with user interests or portfolio holdings.</p>
                                <p>   - A built-in news feed curates relevant articles and updates from reputable sources, allowing users to stay informed on events that could affect their investments.

                                    - Customized notifications for news articles that align with user interests or portfolio holdings.</p>
                            </div>
                            <div>
                                <h3>Unity Makes Strengh :</h3>
                                <p>- AI algorithms analyze historical market trends alongside current events such as economic shifts, political developments, and global news to forecast potential impacts on investments. As well as assess individual financial goals, risk tolerance, and market conditions to create customised investment portfolios.</p>
                                <p>   - Real-time updates ensure users receive timely insights that reflect the latest developments.</p>
                            </div>
                            <div>
                                <h3>Unity Makes Strength :</h3>
                                <p>- AI algorithms analyze historical market trends alongside current events such as economic shifts, political developments, and global news to forecast potential impacts on investments. As well as assess individual financial goals, risk tolerance, and market conditions to create customised investment portfolios.</p>
                                <p>   - Real-time updates ensure users receive timely insights that reflect the latest developments.</p>
                            </div>
                            <div>
                                <p className="pb-3">With our AI-powered WealthTech application, users gain a powerful tool that combines current affairs with historical data analysis, enabling smarter investment decisions in a complex financial world. Join us today to harness the insights that matter and elevate your investment journey!</p>
                                <button className="bg-white px-2 py-2 text-[#0C21C1] rounded font-bold">Contact us</button>
                            </div>
                        </div>
                        <div className="col-lg-6 space-y-7">
                            <div>
                                <h3>Comprehensive Financial Planning Tools :</h3>
                                <p> - Interactive budgeting and saving tools help users manage their finances effectively.

                                    - Goal-setting features for short-term and long-term aspirations, such as retirement planning or major purchases.</p>
                                <p> - Interactive budgeting and saving tools help users manage their finances effectively.

                                    - Goal-setting features for short-term and long-term aspirations, such as retirement planning or major purchases.</p>
                            </div>
                            <div>
                                <h3>Personalized Investment Strategies:</h3>
                                <p> - Tailored portfolios based on individual goals, risk profiles, and the latest market conditions influenced by current events.

                                    - Adaptive strategies that evolve as new information becomes available, ensuring optimal investment decisions.</p>
                                <p> - Tailored portfolios based on individual goals, risk profiles, and the latest market conditions influenced by current events.

                                    - Adaptive strategies that evolve as new information becomes available, ensuring optimal investment decisions.</p>
                            </div>
                            <div>

                                <h3>Informed Decision-Making:</h3>
                                <p>- Interactive dashboards that visualize the relationship between historical data and current events, aiding users in understanding market influences.

                                    - Predictive analytics that highlight potential future trends based on past performance and recent developments.</p>
                                <p>- Interactive dashboards that visualize the relationship between historical data and current events, aiding users in understanding market influences.

                                    - Predictive analytics that highlight potential future trends based on past performance and recent developments.</p>

                            </div>

                            <div>
                                <h3>Real-Time Market Analysis:</h3>
                                <p> - Access to live market data, trends, and economic indicators to inform investment decisions.

                                    - AI-driven alerts for market movements and potential investment opportunities.</p>
                                <p> - Access to live market data, trends, and economic indicators to inform investment decisions.

                                    - AI-driven alerts for market movements and potential investment opportunities.</p>
                            </div>
                            <div>
                                <h3>Community and Expert Collaboration:</h3>
                                <p>- Engage with a community of investors to discuss insights and share experiences related to current events and historical analysis.

                                    - Access to expert opinions and analyses on how geopolitical, economic, and social changes impact investment landscapes.</p>
                                <p>- Engage with a community of investors to discuss insights and share experiences related to current events and historical analysis.

                                    - Access to expert opinions and analyses on how geopolitical, economic, and social changes impact investment landscapes.</p>
                            </div>

                            <div>
                                <h3>Target Audience :</h3>
                                <p>Designed for investors, financial analysts, and enthusiasts seeking a deeper understanding of market behavior influenced by current events, from beginners to seasoned professionals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </MainLayout>
    )
}