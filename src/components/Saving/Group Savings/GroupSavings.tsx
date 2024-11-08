import MainLayout from "@/components/Layout/MainLayout";
import FeatureCard from "./Tools/FeatureCard";

function GroupSavingsComp() {
  return (
    <MainLayout>
      <section className="relative flex items-center justify-center h-[550px] bg-gray-100">
        <img
          src="/assets/images/saving/groupSavings/BG.png"
          alt="Group Savings"
          className="object-cover w-full h-full"
        />
        <div className="absolute sm:bottom-8 sm:right-8 max-[400px]:top-3 bg-[#5aacd8cc] py-6 px-8 sm:py-8 sm:px-10 md:py-10 md:px-14 md:w-[500px] lg:w-[627px] lg:h-[250px] lg:bottom-20 lg:right-32">
          <h2 className="text-xl font-bold text-white mb-2 sm:text-2xl md:text-3xl">
            Group Savings (Adashe)
          </h2>
          <p className="mt-2 text-sm sm:text-md md:text-lg">
            Predict.lit AI solutions significantly enhance group savings plans
            through actionable analytics and insights.
          </p>
          <button className="px-8 py-2 mt-4 font-semibold text-white bg-blue-800 rounded hover:bg-blue-900 sm:px-10 md:px-14">
            Explore
          </button>
        </div>
      </section>

      <section className="px-4 py-16 bg-white lg:px-8 mt-10 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Personalized Savings Plans"
            description="AI can analyze individual financial behaviors, goals, and spending patterns to create customized savings plans for each member of a group. This ensures that the plan is tailored to the unique needs and financial situations of all participants."
            isPrimary={true}
          />
          <FeatureCard
            title="Goal Tracking and Monitoring"
            description="AI-powered platforms can track progress toward collective savings goals in real time, providing updates and insights on how close the group is to achieving its target. This transparency fosters accountability and motivation among members."
          />
          <FeatureCard
            title="Predictive Analytics"
            description="By analyzing historical data and trends, AI can forecast future savings potential based on various factors, such as income fluctuations and spending habits. This allows groups to adjust their savings strategies proactively."
          />
          <FeatureCard
            title="Automated Contributions"
            description="AI can automate the savings process by scheduling regular contributions from each member, ensuring that the group consistently saves toward their goals without requiring manual intervention."
          />
          <FeatureCard
            title="Incentive Programs"
            description="AI can help design incentive structures that encourage members to save more. For example, it can analyze which rewards or bonuses would be most motivating based on individual preferences and behaviors.
 "
          />
          <FeatureCard
            title="Risk Assessment"
            description="AI can evaluate the financial health of group members, helping identify potential risks or challenges that might hinder saving efforts. This allows the group to address issues proactively and adjust their strategy as needed."
          />
          <FeatureCard
            title="Education and Resources"
            description="AI can provide personalized financial education and resources based on the group's collective interests and knowledge gaps. This empowers members to make informed decisions about their savings strategies."
          />
          <FeatureCard
            title="Data-Driven Insights"
            description="By leveraging data analytics, AI can offer insights into optimal saving strategies, such as the best times to contribute or the most effective savings vehicles to use.."
          />
          <FeatureCard
            title="Community Engagement"
            description="AI can facilitate communication and collaboration among group members through chatbots or forums, helping them share tips, celebrate milestones, and stay engaged in the savings process.."
          />
        </div>
      </section>

      <section className="flex flex-col items-center py-16  lg:flex-row lg:justify-between lg:px-72 mt-36">
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

export default GroupSavingsComp;
