import { ArrowRightIcon, BellIcon, CheckIcon, EyeIcon } from "@heroicons/react/24/solid";
import MainLayout from "../Layout/MainLayout";
import { TbSettings } from "react-icons/tb";
import { RiDownloadCloudLine } from "react-icons/ri";

export default function Education() {
    return (
        <MainLayout>
            <>
                <main>
                    <div className="container-flid">
                        <img src="/assets/images/education/Frame.svg" className="objext-contain" alt="" />
                    </div>
                    <div className="container">
                        <h1 className="text-3xl font-bold pt-7">All the Knowledge </h1>
                        <h1 className="text-3xl font-bold">You Need to Invest in One Place</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                            <div className="bg-blue-900 rounded-lg px-6 py-3 text-white shadow-lg flex flex-col justify-between h-full">
                                <div>
                                    <p className="font-bold text-lg">Guide</p>
                                    <p className="font-bold">YOUR EXPERT GUIDES TO INVESTING</p>
                                    <p>
                                        Learn how to invest, from beginner to advanced, with a wealth of educational articles and videos
                                    </p>
                                </div>
                                <div className="flex items-center justify-between py-5 mt-auto">
                                    <p className="font-bold">Learn more</p>
                                    <ArrowRightIcon className="w-5" />
                                </div>
                            </div>

                            <div className="bg-white rounded-lg px-6 py-3 text-gray-700 shadow-lg flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-blue-700 font-bold text-lg">Courses</p>
                                    <p className="text-blue-900 font-bold">INVESTMENT COURSES FOR ALL LEVELS</p>
                                    <p>
                                        Empower yourself with the knowledge to navigate the financial markets with our free courses — including videos, guides, and more
                                    </p>
                                </div>
                                <div className="flex items-center justify-between py-5 mt-auto">
                                    <p className="font-bold">Learn more</p>
                                    <ArrowRightIcon className="w-5" />
                                </div>
                            </div><div className="bg-white rounded-xl px-6 py-3 text-gray-700 shadow-lg flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-blue-700 font-bold text-lg">Tutorials</p>
                                    <p className="text-blue-900 font-bold">STEP-BY-STEP TUTORIALS</p>
                                    <p>
                                        Get the most from your predicti.if account, and discover everything you need to know about our platform’s tools and features
                                    </p>
                                </div>
                                <div className="flex items-center justify-between py-5 mt-auto">
                                    <p className="font-bold">Learn more</p>
                                    <ArrowRightIcon className="w-5" />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl px-6 py-3 text-gray-700 shadow-lg flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-blue-700 font-bold text-lg">Demo Account <span className="text-xs">(Coming soon)</span></p>
                                    <p className="text-blue-900 font-bold">Continue Growing as an Investor</p>
                                    <p>
                                        Become part of our global community of investors to explore other traders' portfolios, discuss strategies, and tap into their collective expertise. Practice what you learn with a complimentary $100,000 virtual portfolio.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between py-5 mt-auto">
                                    <p className="font-bold">Join predict.if today</p>
                                    <ArrowRightIcon className="w-5" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container py-14">
                        <h1 className="text-3xl font-bold pb-5">Investor’s Digest</h1>
                        <div className="flex space-x-4">
                            <CheckIcon className="w-5 h-5 text-green-700" />
                            <p>The Roundtable (weekly talk featuring Dan Feaheny from <br />
                                Feeney Ventures and Musa Moore of Zenith Bank)</p>
                        </div>
                        <div className="flex space-x-4">
                            <CheckIcon className="w-5 h-5 text-green-700" />
                            <p>Customizable workflows</p>
                        </div>
                        <div className="flex space-x-4">
                            <CheckIcon className="w-5 h-5 text-green-700" />
                            <p>Fintech Talk (Dan Feaheney & guests talk all things  fintech)</p>
                        </div>
                        <div className="flex space-x-4">
                            <CheckIcon className="w-5 h-5 text-green-700" />
                            <p>Currency/Crypto Talk</p>
                        </div>

                        <div className="row pt-10 pb-8 ">
                            <div className="col-lg-6">
                                <img src="/assets/images/education/Img 1.svg" alt="" className="pb-7" />
                            </div>
                            <div className="col-lg-6">
                                <div className="relative">
                                    <img src="/assets/images/education/Img 2.svg" alt="" className="w-full h-auto" />
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

                    <div className="container py-14">
                        <h1 className="text-3xl font-bold py-4">Predict.if Forum</h1>
                        <p className="py-4">
                            Predict.if forum is the space designed for our subscribers to enhance <br /> the overall user experience and community <br /> engagement. Here are some key benefits:
                        </p>
                        <div className="row">
                            <div className="col-lg-5 space-y-6">
                                <div className="flex space-x-3 bg-gray-100 rounded-lg px-2 py-2">
                                    <EyeIcon className="text-blue-500 w-10" />
                                    <p><span className="font-bold">Knowledge Sharing :</span> Users can exchange insights, tips, and strategies about financial topics, helping each other learn and grow.</p>
                                </div>
                                <div className="flex space-x-3  rounded-lg px-2 py-2">
                                    <TbSettings className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Peer Support :</span> A forum provides a space for users to discuss challenges and successes, creating a supportive community that can motivate individuals to achieve their financial goals.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Real-Time Advice :</span> Users can ask questions and receive immediate feedback from peers or experts, facilitating quick problem-solving and decision-making..</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Enhanced User Engagement  :</span> : Active discussions and interactions keep users engaged with the application, increasing loyalty and retention.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Diverse Perspectives :</span>  Users come from various backgrounds and experiences, providing a wide range of opinions and strategies that can enrich discussions.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Feedback and Improvement : </span> Users can provide feedback on the application, suggest new features, and report issues, helping developers enhance the product based on community needs.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Resource Hub :</span> Forums can serve as a repository for educational materials, articles, and guides, making it easier for users to access valuable information.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Networking Opportunities :</span> Users can connect with like-minded individuals, potential mentors, or collaborators, fostering professional relationships.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Increased Trust :</span> A vibrant forum with knowledgeable participants can enhance the credibility of the application, as users perceive it as a trustworthy platform for financial discussions.</p>
                                </div>
                                <div className="flex space-x-3 rounded-lg px-2 py-2">
                                    <RiDownloadCloudLine className="text-blue-500 w-16" />
                                    <p><span className="font-bold">Community Building :</span>  A forum cultivates a sense of belonging among users, making them feel part of a larger community focused on shared financial goals.</p>
                                </div>

                            </div>
                            <div className="col-lg-7">
                                <img src="/assets/images/education/visualize.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </MainLayout>
    );
}