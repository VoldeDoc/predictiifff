import { FaWaveSquare } from "react-icons/fa6";
import MainLayout from "../Layout/MainLayout";

export default function About() {
    return (
        <MainLayout>
            <>
                <div className="container py-28">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" items-center py-28">
                                <h1 className="text-4xl font-bold">Mission Statement</h1>
                                <p>
                                    Our mission is to revolutionize financial decision-making by harnessing the power of AI to create predictive models that integrate historical financial data, current affairs, and advanced analytics. We strive to provide users with actionable insights and foresight, empowering them to navigate the complexities of the financial landscape with confidence. By combining advanced analytics with accessible financial education, we aim to inspire confidence and promote financial literacy and security. Our goal is to make data-driven predictions accessible and relevant, enhancing investment strategies, fostering informed choices, and deepening users' understanding of market dynamics. Ultimately, we empower individuals to take control of their financial futures and build lasting wealth
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/images/education/pexels.svg" alt="" />

                        </div>
                    </div>
                </div>

                <div className="bg-[#F4F7FA]">
                    <div className="container ">
                        <div className="row py-9">
                            <div className="col-lg-5">
                            <img src="/assets/images/About/african.svg" alt="" />
                            </div>
                            <div className="col-lg-7">
                                <h1 className="text-4xl font-bold py-4">Our Vision</h1>
                                <p className="pb-5">
                                    We envision a world where everyone can invest simply and transparently. Since our founding in 2021 this commitment to making finance accessible to all has guided our actions and shaped our vision and values.
                                    We are dedicated to improving the world, focusing our efforts on three key areas where we believe we can make a significant impact
                                </p>

                                <div className="flex space-x-5 pb-2">
                                    <div>
                                        <FaWaveSquare className="text-5xl text-[#54BD95] bg-white px-3 py-3" />
                                    </div>
                                    <div className="text-2xl font-bold">
                                        Unity Makes Strength
                                    </div>
                                </div>

                                <p className="pb-3">By turning investing into a collective endeavor, our community members can tap into shared knowledge and experiences, leading to greater success for everyone.</p>
                                <p>We have developed an investment platform that brings together millions, centered on social collaboration and enhanced education. Our vibrant, interactive community allows users to connect, share, and learn from one another.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        </MainLayout>
    )
}