import MainLayout from "@/components/Layout/MainLayout";
import HomeCarousel from "./Tools/HeroCarousel";
// import CompanyBrand from "@/components/Ui/companyBrand";
import { FaRocket } from "react-icons/fa6";
import { BiLockOpenAlt } from "react-icons/bi";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
// import BrandCarousel from "../tool/brandCarousel";

export default function Home() {


  const newsItems = [
    {
      imgSrc: "assets/images/landingPage/race-horse.png",
      imgAlt: "Race",
      date: "Race98 - 03 June 2023",
      title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
      description: "New York — A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's"
    },
    {
      imgSrc: "assets/images/landingPage/cyclist.png",
      imgAlt: "Cyclist",
      date: "Cycling - 03 June 2023",
      title: "Savilia Blunk Embraces Longer Season With World Cup",
      description: "Last year, Savilia Blunk took a more conservative approach for her first season as an Elite Class athlete..."
    },
    {
      imgSrc: "assets/images/landingPage/boxing-arena.png",
      imgAlt: "Boxing",
      date: "Boxing - 03 June 2023",
      title: "Ryan Garcia is fighting again, this time on social media",
      description: "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words"
    }
  ];

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        setFade(false);
      }, 1000); // Duration of fade out effect
    }, 4000); // Change news every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const currentNews = newsItems[currentNewsIndex];
  return (
    <MainLayout>
      <section className="">
        <div className="flex flex-col gap-10 items-center sm:flex-row sm:h-[35rem] h-[45rem]">
          {/* Text Section */}
          <div className=" sm:w-1/2 text-center sm:text-left container px-20">
            <p className="text-3xl sm:text-4xl font-light">Experience AI</p>
            <h1 className="font-bold text-4xl sm:text-5xl mt-2">
              For Accurate Financial
            </h1>
            <p className="text-2xl sm:text-4xl font-normal">Decisions..</p>
            <p className="mt-3 text-lg sm:text-base">
              <strong>Predit.if finance</strong> provides a comprehensive platform tailored for novic, Middle level and professional investors, 
                            offering unparalleled global coverage of securities and asset classes
            </p>
            <button className="mt-5 bg-blue-800 hover:bg-blue-700 transition text-white px-4 py-2 rounded-full">
              Learn More
            </button>
          </div>

          {/* Carousel Section */}
          <div className="w-full sm:w-1/2 h-full">
            <HomeCarousel />
          </div>
        </div>
      </section>

      <section className="bg-[#4FB7EF]">
        <div className="container mx-auto px-6">
          {/* <div className="row items-center">
            <p className="!mt-10 text-center sm:text-start col-sm-2 text-lg font-semibold">
              Trusted by thousands
              <p>of companies worldwide</p>
            </p>
            <span className="col-sm-10">
              <CompanyBrand />
            </span>
          </div> */}

          <div className="row pt-12">
            <div className="col-lg-6">
              <h3 className="uppercase text-white font-semibold text-xl">
                Your Advantage
              </h3>
              <hr className="w-80 border-t-2 border-white my-4 !overflow-hidden " />
              <h2 className=" text-white text-sm mt-5">
                Utilise Your Savvy Concierge to Help You Manage
              </h2>
              <h2 className=" text-white text-sm">
                Your Wealth and Investments. Wealth Management... Redefined".
              </h2>
              <img
                src="assets/images/landingPage/phone-chart.png"
                alt="Phone Chart"
                className="w-3/5  h-96 mx-auto mt-10"
              />
            </div>

            <div className="col-lg-6">
              <p className="text-white text-lg">
                Leverage AI for Informed Financial Decisions. Predit.if Finance delivers an advanced platform designed for all, from students to mid level and professional investors, offering unmatched global insights into securities and asset classes, supported by current events, academic studies and historical data.
              </p>

              <div className="row !mt-16 gap-7">
                <span className="relative col-lg-2">
                  <svg
                    className="absolute top-2 left-7"
                    width="95"
                    height="95"
                    viewBox="0 0 95 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="47.5"
                      cy="47.5"
                      r="46.5"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dy=".3em"
                      fontSize="25"
                      fill="black"
                    >
                      1
                    </text>
                  </svg>
                  <svg
                    width="101"
                    height="101"
                    viewBox="0 0 101 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50.5"
                      cy="50.5"
                      r="49.5"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </span>

                <div className="text-white col-lg-8 mb-7">
                  <h2 className="text-4xl sm:text-5xl font-bold">
                    Performance. Efficiency. Speed.
                  </h2>
                  <p className="mt-10 text-lg font-semibold text-white">
                    Artificial Intelligence (AI) has revolutionised the way financial assets are analysed, offering unprecedented capabilities to investors and analysts. By leveraging vast amounts of data and advanced algorithms, AI enhances the accuracy and efficiency of financial analysis, enabling more informed decision-making.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="container mt-28">
        <div className=" row ">
          <div className="col-lg-6 flex justify-center text-center items-center">
            <img
              src="assets/images/landingPage/credit-cards.png"
              alt="credit cards"
              className="w-3/4 h-[450px]"

            />
          </div>

          <div className="col-lg-6 mt-14 mb-12">
            <div className="row gap-7">
              <span className="relative col-lg-2">
                <svg
                  className="absolute top-2 left-7"
                  width="95"
                  height="95"
                  viewBox="0 0 95 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="47.5"
                    cy="47.5"
                    r="46.5"
                    fill="#0C21C1"
                    stroke="#0C21C1"
                    strokeWidth="2"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="25"
                    fill="white"
                  >
                    2
                  </text>
                </svg>
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50.5"
                    cy="50.5"
                    r="49.5"
                    stroke="#0C21C1"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              <div className="col-lg-8 mt-7">
                <h2 className="text-3xl sm:text-5xl font-bold text-black">
                  Predictive Analytics
                </h2>
                <p className="mt-10 font-semibold text-lg text-black">
                  One of the most powerful applications of AI in finance is predictive analytics. By analysing past performance and current market conditions, AI models can forecast future asset values and trends. These predictions can inform trading strategies, risk management, and portfolio optimisation, providing investors with a competitive edge in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 container">
        <div className="row">
          <div className="col-lg-6 flex flex-col justify-center items-center bg-black-500 px-10 ">
            <h2 className="text-4xl font-medium text-white pb-4">
              Rapid Data Processing
            </h2>
            <p className="text-white">
              AI algorithms can process vast amounts of data at speeds far beyond human capabilities. This allows you to quickly analyze historical trends, market conditions, and economic indicators, leading to timely and informed decision-making. With AI, the time spent on data collection and preliminary analysis is drastically reduced, freeing you to focus on other aspects such as strategic thinking and interpretation.
            </p>
          </div>


          <div className="col-lg-6 space-y-4">
            <div className="bg-[#0C21C11A] py-10 text-sm">
              <div className="flex items-center space-x-6">
                <div className="bg-[#0c21c1ec] rounded-full text-center p-5 text-white flex items-center justify-center">
                  <FaRocket className="w-6 h-6" />
                </div>
                <div className="">
                  <p className="font-bold pb-2">Real-Time Analysis</p>
                  <p className="leading-relaxed">
                    AI enables real-time monitoring of financial markets, allowing you to respond quickly to emerging trends and events. Automated systems can track fluctuations in asset prices, news releases, and social media sentiment, ensuring that investors such as yourself are always informed and ready to act.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0C21C1] py-10 text-sm">
              <div className="flex items-center space-x-6">
                <div className="bg-white rounded-full text-center p-5 text-dark-500 flex items-center justify-center">
                  <BiLockOpenAlt className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold pb-2 text-white">
                    Streamlined Risk Assessment
                  </p>
                  <p className="leading-relaxed text-white">
                    AI enhances the efficiency of risk assessment by analyzing multiple variables simultaneously. Machine learning algorithms can quickly evaluate the potential risks associated with different assets, providing a comprehensive risk profile in a fraction of the time it would take using manual methods. This enables more agile investment strategies and better risk management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black py-10 text-sm">
              <div className="flex items-center space-x-6">
                <div className="bg-white rounded-full text-center p-5 text-dark-500 flex items-center justify-center">
                  <ArrowTrendingUpIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold pb-2 text-white">
                    Automated Pattern Recognition
                  </p>
                  <p className="leading-relaxed text-white">
                    AI excels in identifying patterns and anomalies within financial data. Machine learning models can sift through countless data points to uncover trends that may go unnoticed using traditional methods. This automation not only accelerates the analysis process but also enhances accuracy, allowing investors to capitalize on insights in real time.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>

      <section>
        <section className="container my-20">
          <h2 className="text-4xl text-[#0C21C1] font-bold mb-10">
            Top Finance Blogs
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch">
            <div className="w-full sm:w-1/2 bg-[#ebeef3] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Trending News</h2>

              <div className={`flex flex-col sm:flex-row gap-4 mb-6 ${fade ? 'fade-out' : 'fade-in'}`}>
                <div className="w-full sm:w-[32%]">
                  <img
                    src={currentNews.imgSrc}
                    alt={currentNews.imgAlt}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full sm:w-[68%]">
                  <span className="text-sm text-gray-500">
                    {currentNews.date}
                  </span>
                  <h3 className="text-lg font-bold truncate">
                    {currentNews.title}
                  </h3>
                  <p className="text-gray-600 truncate">
                    {currentNews.description}
                  </p>
                </div>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 mb-6 ${fade ? 'fade-out' : 'fade-in'}`}>
                <div className="w-full sm:w-[32%]">
                  <img
                    src={currentNews.imgSrc}
                    alt={currentNews.imgAlt}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full sm:w-[68%]">
                  <span className="text-sm text-gray-500">
                    {currentNews.date}
                  </span>
                  <h3 className="text-lg font-bold truncate">
                    {currentNews.title}
                  </h3>
                  <p className="text-gray-600 truncate">
                    {currentNews.description}
                  </p>
                </div>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 mb-6 ${fade ? 'fade-out' : 'fade-in'}`}>
                <div className="w-full sm:w-[32%]">
                  <img
                    src={currentNews.imgSrc}
                    alt={currentNews.imgAlt}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full sm:w-[68%]">
                  <span className="text-sm text-gray-500">
                    {currentNews.date}
                  </span>
                  <h3 className="text-lg font-bold truncate">
                    {currentNews.title}
                  </h3>
                  <p className="text-gray-600 truncate">
                    {currentNews.description}
                  </p>
                </div>
              </div>


            </div>

            <div className="w-full sm:w-1/2 relative flex-grow">
              <img
                src="assets/images/landingPage/sportsman.png"
                alt="Feature"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black-800 opacity-50"></div>
              <span className="py-1 px-3 text-2xl border text-white absolute top-2 left-2 sm:left-7 rounded">
                Cycling
              </span>
              <div className="absolute bottom-4 left-2 sm:bottom-8 sm:left-8 text-white">
                <span className="block text-lg mt-2">
                  Debits - 03 June 2023
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 uppercase">
                  Discover the Member Benefits of USA Cycling!
                </h3>
              </div>
            </div>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}
