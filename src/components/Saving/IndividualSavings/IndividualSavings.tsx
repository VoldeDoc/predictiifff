import MainLayout from "@/components/Layout/MainLayout";
import FeatureCard from "./Tools/FeatureCard";

function IndividualSavingsComp() {
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="relative flex items-center justify-center h-[550px] bg-gray-100">
        <img
          src="/assets/images/saving/individualSavings/BG.png"
          alt="Individual Savings"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute top-15 left-5 sm:top-32 sm:left-20 px-12 py-8 w-[90%] h-[90%] min-[430px]:h-[280px] sm:w-[500px] sm:h-[280px] bg-white space-y-5">
          <h2 className="text-3xl font-bold">Individual Savings</h2>
          <p className="mt-2 text-lg max-w-xl">
            Predict.lit AI solution can significantly help individuals and
            investors save more money through several innovative features.
          </p>
          <button className="px-8 py-2 mt-4 font-semibold text-white bg-blue-800 rounded hover:bg-blue-950">
            Start Saving
          </button>
        </div>
      </section>

      <section className="px-4 py-16 bg-white lg:px-8 mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <FeatureCard
            title="Personalised Financial Insights"
            description="Predict analyzes individual spending patterns, incomes, and savings goals to provide tailored financial insights."
            isPrimary={true}
          />
          <FeatureCard
            title="Budgeting Tools"
            description="The platform offers AI-driven budgeting tools that categorize expenses and highlight trends."
          />
          <FeatureCard
            title="Goal Setting and Tracking"
            description="Predict allows users to set specific saving goals and track progress."
          />
          <FeatureCard
            title="Predictive Analytics"
            description="AI uses historical data to forecast future expenses and incomes, helping users navigate financial challenges proactively."
          />
          <FeatureCard
            title="Investment Optimization"
            description="Predict analyzes market trends and portfolios, recommending optimal investment strategies."
          />
          <FeatureCard
            title="Smart Alerts"
            description="Users receive alerts for important financial events to keep them informed and on track."
          />
          <FeatureCard
            title="Educational Resources"
            description="Predict provides personalized resources tailored to users’ needs."
          />
          <FeatureCard
            title="Debt Management Strategies"
            description="The AI can analyze debt and recommend repayment strategies to improve financial health."
          />
          <FeatureCard
            title="Community Insights"
            description="Users can connect with others to share experiences and strategies for savings."
          />
        </div>
      </section>

      <section className="flex flex-col items-center py-16 lg:flex-row lg:justify-between lg:px-72 mb-36 bg-[#DBE5FA]">
        <div className="max-w-md text-center lg:text-left">
          <h3 className="text-2xl font-semibold">Try Predict.it Finance</h3>
          <p className="mt-4 text-gray-700">
            By integrating these AI-driven capabilities, group savings
            initiatives can become more efficient, effective, and engaging,
            ultimately leading to higher savings rates and better financial
            outcomes for all participants.{" "}
          </p>
          <button className="px-6 py-2 mt-6 font-semibold text-white bg-blue-900 rounded hover:bg-blue-950">
            Contact Us
          </button>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <img
            src="/assets/images/saving/groupSavings/manpointing.png"
            alt="Contact Us"
            className="object-cover w-72 h-48 shadow-lg"
          />
        </div>
      </section>
    </MainLayout>
  );
}

export default IndividualSavingsComp;
