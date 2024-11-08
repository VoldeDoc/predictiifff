import MainLayout from "@/components/Layout/MainLayout";
import PortfolioCard from "./Tools/PortfolioCard";

function UniquePortfoliosComp() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center py-16 text-center h-[500px] bg-black text-white">
        <h2 className="text-4xl font-bold">
          Unique Portfolios Powered by AI Analysis
        </h2>
        <p className="mt-4 max-w-3xl text-gray-400">
          Our investment algorithm offers personalized AI-powered analysis,
          presenting innovative portfolios that align with users’ financial
          goals. These portfolios combine the latest market trends and insights
          with AI-driven predictions.
        </p>
      </section>

      <section className="px-4 py-16 bg-white lg:px-32">
        <div className="flex flex-col space-y-20">
          <PortfolioCard
            title="Innovative"
            description="Dynamic portfolio leveraging AI analysis, built for sustainable growth with a diversified strategy."
            image="/assets/images/investing/uniquePortfolio/innovative.png"
            categories={["AI-Driven", "FinTech", "Space Tech"]}
          />
          <PortfolioCard
            title="Top Trader"
            description="Portfolios curated for active investors focused on short-term opportunities with high potential returns."
            image="/assets/images/investing/uniquePortfolio/topTrader.png"
            categories={["Data Science", "Blockchain", "Crypto Assets"]}
            imagePosition="left"
          />
          <PortfolioCard
            title="Partner Portfolios"
            description="Exclusive investment options created through strategic partnerships, providing unique investment opportunities."
            image="/assets/images/investing/uniquePortfolio/partnerPortfolios.png"
            categories={["AI Partnerships", "Web3", "Space Tech"]}
          />
        </div>
      </section>

      <section className="px-4 py-24 lg:px-8 bg-[#eef8fe] mt-10">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Dividend Reinvestment (coming soon)
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            When assets that qualify for dividend payments are held in a Smart
            Portfolio, the dividends are added to the portfolio's cash balance.
            During the rebalancing process, these amounts are reinvested into
            the portfolio's existing holdings.
          </p>
        </div>

        <div className="flex flex-col items-center mt-16 md:flex-row md:justify-center md:space-x-8 justify-center px-44">
          <div className="w-[70%]">
            <h4 className="text-4xl font-semibold">Self Design</h4>
            <p className="mt-2 text-gray-600">
              The self-designed investment application is a user-friendly
              platform that empowers individuals to manage their investment
              portfolios with ease. It features real-time market data,
              customizable dashboards, and advanced analytics tools to help you
              make informed decisions. You will be able to track their
              investments, set financial goals, and receive personalized
              insights based on their risk tolerance. The app also includes
              educational resources, enabling users to enhance their investment
              knowledge and strategies.With robust security measures, users can
              confidently navigate their financial journey.  
            </p>
          </div>
          <div className="mt-8 md:mt-0 w-[30%]">
            <img
              src="/assets/images/investing/uniquePortfolio/selfDesign.png"
              alt="Self Design Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default UniquePortfoliosComp;
