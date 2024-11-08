import MainLayout from "@/components/Layout/MainLayout";

export default function Commitment() {
    return (
        <MainLayout>
            <>
                <div className="bg-blue-800">
                    <div className="container py-20 mb-16">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-white font-bold text-4xl mb-4">Our commitment</h1>
                            <img src="/assets/images/About/Vector .svg" alt="" className="mx-auto" />
                        </div>
                    </div>

                </div>

                <div className="container">
                    <h1 className="text-4xl font-bold pb-3">
                        Simplifying Access
                    </h1>
                    <p className="font-bold pb-8">We aim to eliminate obstacles and ensure that online trading and investing are accessible to everyone. Our user-friendly platform and clear communication are designed to keep things straightforward and transparent, making your experience as simple as possible.</p>

                    <div className="space-y-6 mb-10">
                        <div className="bg-black-900 px-12 py-8 ">
                            <p className="font-bold text-white">Stronger Together</p>
                            <p className="pt-3 text-[#EFF0EABF]">You are not alone; you’re part of a thriving global community. Shared knowledge is powerful, and we empower you to connect, learn, and collaborate with other investors. By turning investing into a collective endeavor, we achieve better outcomes and enhance our success together.</p>
                        </div>
                        <div className="bg-black-900 px-12 py-8 ">
                            <p className="font-bold text-white">Empowering Individualsr</p>
                            <p className="pt-3 text-[#EFF0EABF]">You are not alone; Inexperience and a lack of knowledge often hold people back from investing. We’re here to help you take that leap by offering a variety of educational tools and resources, along with a user-friendly platform to support you on your investment journey.</p>
                        </div>
                        <div className="bg-black-900 px-12 py-8 ">
                            <p className="font-bold text-white">Continuous Innovation</p>
                            <p className="pt-3 text-[#EFF0EABF]">Founded to challenge traditional finance, innovation is at the core of who we are. By staying attuned to both market trends and the needs of our community, we are committed to developing advanced financial products and services that adapt to your evolving requirements..</p>
                        </div>
                        <div className="bg-black-900 px-12 py-7 ">
                            <p className="font-bold text-white">Pursuing Excellence</p>
                            <p className="pt-3 text-[#EFF0EABF]">We aim to anticipate and surpass your expectations by placing you at the heart of every decision we make, ensuring the best possible user experience. As a regulated organization, we prioritize your privacy and security, utilizing cutting-edge solutions to protect your information.</p>
                        </div>


                    </div>
                </div>
            </>
        </MainLayout>
    );
}