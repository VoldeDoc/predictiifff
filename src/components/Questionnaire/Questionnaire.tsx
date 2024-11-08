import { AuthLayout } from "../Layout/layout";
import { useState } from 'react';

export default function Questionnaire() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers({ ...answers, [e.target.name]: e.target.value });
    };

    const questions: JSX.Element[] = [
        <div key="1" className="p-4">
            <h2 className="text-xl font-bold mb-4">Demographics</h2>
            <label className="block mb-2">Age: <input type="text" name="age" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]"  /></label>
            <label className="block mb-2">Gender:
                <select name="gender" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
            </label>
            <label className="block mb-2">Location (City/State): <input type="text" name="location" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2">Occupation: <input type="text" name="occupation" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
        </div>,
        <div key="2" className="p-4">
            <h2 className="text-xl font-bold mb-4">Investment Experience</h2>
            <label className="block mb-2">How long have you been investing in financial assets?</label>
            <select name="investment-experience" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]">
                <option value="less-than-1-year">Less than 1 year</option>
                <option value="1-3-years">1-3 years</option>
                <option value="3-5-years">3-5 years</option>
                <option value="5-plus-years">5+ years</option>
            </select>
            <label className="block mb-2 mt-4">How often do you review your investment portfolio?</label>
            <select name="review-frequency" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="rarely">Rarely</option>
            </select>
        </div>,
        <div key="3" className="p-4">
            <h2 className="text-xl font-bold mb-4">Asset Preferences</h2>
            <label className="block mb-2">Which types of financial assets do you currently invest in? (Select all that apply)</label>
            <label className="block mb-2"><input type="checkbox" name="assets" value="stocks" className="mr-2  bg-[#F4F5F9] border-none text-[#89868D]" /> Stocks</label>
            <label className="block mb-2"><input type="checkbox" name="assets" value="bonds" className="mr-2  bg-[#F4F5F9] border-none text-[#89868D]" /> Bonds</label>
            <label className="block mb-2"><input type="checkbox" name="assets" value="mutual-funds" className="mr-2  bg-[#F4F5F9] border-none text-[#89868D]" /> Mutual funds</label>
            <label className="block mb-2"><input type="checkbox" name="assets" value="etfs" className="mr-2  bg-[#F4F5F9] border-none text-[#89868D]" /> ETFs (Exchange-Traded Funds)</label>
            <label className="block mb-2"><input type="checkbox" name="assets" value="real-estate " className="mr-2  bg-[#F4F5F9] border-none text-[#89868D]" /> Real estate</label>
            <label className="block mb-2"><input type="checkbox" name="assets" value="cryptocurrencies" className="mr-2  bg-[#F4F5F9] border-none text-[#89868D]" /> Cryptocurrencies</label>
            <label className="block mb-2">Other (please specify): <input type="text" name="other-assets" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]" /></label>
        </div>,
        <div key="4" className="p-4">
            <h2 className="text-xl font-bold mb-4">Portfolio Composition</h2>
            <label className="block mb-2">What percentage of your portfolio is currently allocated to the following assets? (Total must equal 100%)</label>
            <label className="block mb-2">Stocks: <input type="text" name="stocks-percentage" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2">Bonds: <input type="text" name="bonds-percentage" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2 ">Mutual Funds/ETFs: <input type="text" name="mutual-funds-percentage" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2  " >Real Estate: <input type="text" name="real-estate-percentage" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2">Cryptocurrencies: <input type="text" name="cryptocurrencies-percentage" className="border p-2 w-full  bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2">Cash or Cash Equivalents: <input type="text" name="cash-percentage" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            <label className="block mb-2">Other (please specify): <input type="text" name="other-percentage" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
        </div>
        ,
        <div className="p-4" key="5">
            <h2 className="text-xl font-bold mb-4">Investment Goals</h2>
            <label className="block mb-2">What is your primary investment goal?</label>
            <label className="block mb-2"><input type="radio" name="investment-goal" value="capital-appreciation" className="mr-2" /> Capital appreciation</label>
            <label className="block mb-2"><input type="radio" name="investment-goal" value="income-generation" className="mr-2" /> Income generation</label>
            <label className="block mb-2"><input type="radio" name="investment-goal" value="preservation-of-capital" className="mr-2" /> Preservation of capital</label>
            <label className="block mb-2"><input type="radio" name="investment-goal" value="diversification" className="mr-2" /> Diversification</label>
            <label className="block mb-2">Other (please specify): <input type="text" name="other-investment-goal" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
        </div>
        ,
        <div className="p-4" key="6">
            <h2 className="text-xl font-bold mb-4">Risk Tolerance</h2>
            <label className="block mb-2">How would you describe your risk tolerance?</label>
            <label className="block mb-2"><input type="radio" name="risk-tolerance" value="very-high" className="mr-2" /> Very high</label>
            <label className="block mb-2"><input type="radio" name="risk-tolerance" value="high" className="mr-2" /> High</label>
            <label className="block mb-2"><input type="radio" name="risk-tolerance" value="moderate" className="mr-2" /> Moderate</label>
            <label className="block mb-2"><input type="radio" name="risk-tolerance" value="low" className="mr-2" /> Low</label>
            <label className="block mb-2"><input type="radio" name="risk-tolerance" value="very-low" className="mr-2" /> Very low</label>
        </div>
        ,
        <div className="p-4" key="7">
            <h2 className="text-xl font-bold mb-4">AI Enhanced Investment Strategies</h2>
            <label className="block mb-2">What investment strategies do you believe AI could enhance? (Select all that apply)</label>
            <label className="block mb-2"><input type="checkbox" name="ai-strategies" value="long-term-investing" className="mr-2" /> Long-term investing</label>
            <label className="block mb-2"><input type="checkbox" name="ai-strategies" value="short-term-trading" className="mr-2" /> Short-term trading</label>
            <label className="block mb-2"><input type="checkbox" name="ai-strategies" value="value-investing" className="mr-2" /> Value investing</label>
            <label className="block mb-2"><input type="checkbox" name="ai-strategies" value="growth-investing" className="mr-2" /> Growth investing</label>
            <label className="block mb-2"><input type="checkbox" name="ai-strategies" value="risk-management" className="mr-2" /> Risk management</label>
        </div>
        ,
        <div className="p-4" key="8">
            <h2 className="text-xl font-bold mb-4">Market Downturn Reaction</h2>
            <label className="block mb-2">In the event of a market downturn, how would you typically react?</label>
            <label className="block mb-2"><input type="radio" name="market-downturn-reaction" value="sell-off-assets" className="mr-2" /> Sell off assets to minimize losses</label>
            <label className="block mb-2"><input type="radio" name="market-downturn-reaction" value="hold-assets" className="mr-2" /> Hold assets and wait for recovery</label>
            <label className="block mb-2"><input type="radio" name="market-downturn-reaction" value="buy-more-assets" className="mr-2" /> Buy more assets to take advantage of lower prices</label>
            <label className="block mb-2">Other (please specify): <input type="text" name="other-market-downturn-reaction" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
        </div>
        ,
        <div className="p-4" key="9">
            <h2 className="text-xl font-bold mb-4">Preferred Investment Strategies</h2>
            <label className="block mb-2">Which investment strategies do you prefer? (Select all that apply)</label>
            <label className="block mb-2"><input type="checkbox" name="preferred-strategies" value="value-investing" className="mr-2" /> Value investing</label>
            <label className="block mb-2"><input type="checkbox" name="preferred-strategies" value="growth-investing" className="mr-2" /> Growth investing</label>
            <label className="block mb-2"><input type="checkbox" name="preferred-strategies" value="income-investing" className="mr-2" /> Income investing</label>
            <label className="block mb-2"><input type="checkbox" name="preferred-strategies" value="index-investing" className="mr-2" /> Index investing</label>
            <label className="block mb-2"><input type="checkbox" name="preferred-strategies" value="day-trading" className="mr-2" /> Day trading</label>
            <label className="block mb-2">Other (please specify): <input type="text" name="other-preferred-strategies" className="border p-2 w-full" /></label>
        </div>
        ,
        <div className="p-4" key="10">
            <h2 className="text-xl font-bold mb-4">Investment Advice Resources</h2>
            <label className="block mb-2">Do you follow any specific resources for investment advice?</label>
            <label className="block mb-2"><input type="radio" name="investment-advice-resources" value="yes" className="mr-2" onChange={handleRadioChange} /> Yes</label>
            {answers["investment-advice-resources"] === "yes" && (
                <label className="block mb-2">Please specify: <input type="text" name="investment-advice-resources-yes" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
            )}
            <label className="block mb-2"><input type="radio" name="investment-advice-resources" value="no" className="mr-2" onChange={handleRadioChange} /> No</label>
        </div>,
        <div className="p-4" key="11">
            <h2 className="text-xl font-bold mb-4">Financial Planning</h2>
            <label className="block mb-2">Do you have a financial advisor?</label>
            <label className="block mb-2"><input type="radio" name="financial-advisor" value="yes" className="mr-2" /> Yes</label>
            <label className="block mb-2"><input type="radio" name="financial-advisor" value="no" className="mr-2" /> No</label>
        </div>,
        <div className="p-4" key="12">
            <label className="block mb-2">How do you usually set your investment budget?</label>
            <label className="block mb-2"><input type="radio" name="investment-budget" value="fixed-monthly-contributions" className="mr-2" /> Fixed monthly contributions</label>
            <label className="block mb-2"><input type="radio" name="investment-budget" value="percentage-of-income" className="mr-2" /> Percentage of income</label>
            <label className="block mb-2"><input type="radio" name="investment-budget" value="based-on-market-conditions" className="mr-2" /> Based on market conditions</label>
            <label className="block mb-2"><input type="radio" name="investment-budget" value="no-specific-budget" className="mr-2" /> No specific budget</label>
        </div>,
        <div className="p-4" key="13">
            <label className="block mb-2">How important is diversification in your investment strategy?</label>
            <label className="block mb-2"><input type="radio" name="diversification-importance" value="very-important" className="mr-2" /> Very important</label>
            <label className="block mb-2"><input type="radio" name="diversification-importance" value="somewhat-important" className="mr-2" /> Somewhat important</label>
            <label className="block mb-2"><input type="radio" name="diversification-importance" value="not-important" className="mr-2" /> Not important</label>
        </div>,
        <div className="p-4" key="14">
            <h2 className="text-xl font-bold mb-4">AI in Investment</h2>
            <label className="block mb-2">Do you utilize AI tools for investment decisions?</label>
            <label className="block mb-2"><input type="radio" name="ai-tools" value="yes" className="mr-2" /> Yes</label>
            <label className="block mb-2"><input type="radio" name="ai-tools" value="no" className="mr-2" /> No</label>
        </div>,
        <div className="p-4" key="15">
            <h2 className="text-xl font-bold mb-4">AI Integration</h2>
            <label className="block mb-2">Have you used any AI tools for investment analysis or portfolio management?</label>
            <label className="block mb-2">
                <input type="radio" name="ai-tools-used" value="yes" className="mr-2" onChange={handleRadioChange}/> Yes (please specify): 
                {answers["ai-tools-used"] === "yes" && (
                <input type="text bg-[#F4F5F9] border-none text-[#89868D]" name="ai-tools-used-yes" className="border p-2 w-full" />
            )}
                </label>
              
            <label className="block mb-2"><input type="radio" name="ai-tools-used" value="no" className="mr-2" /> No</label>
        </div>,
        <div className="p-4" key="16">
            <label className="block mb-2">What aspects of AI do you find most beneficial for your investments? (Select all that apply)</label>
            <label className="block mb-2"><input type="checkbox" name="ai-benefits" value="predictive-analytics" className="mr-2" /> Predictive analytics</label>
            <label className="block mb-2"><input type="checkbox" name="ai-benefits" value="automated-trading" className="mr-2" /> Automated trading</label>
            <label className="block mb-2"><input type="checkbox" name="ai-benefits" value="sentiment-analysis" className="mr-2" /> Sentiment analysis</label>
            <label className="block mb-2"><input type="checkbox" name="ai-benefits" value="risk-assessment" className="mr-2" /> Risk assessment</label>
            <label className="block mb-2"><input type="checkbox" name="ai-benefits" value="portfolio-optimization" className="mr-2" /> Portfolio optimization</label>
        </div>,
        <div className="p-4" key="17">
            <label className="block mb-2">If yes, which aspects do you use AI for? (Select all that apply)</label>
            <label className="block mb-2"><input type="checkbox" name="ai-usage" value="market-analysis" className="mr-2" /> Market analysis</label>
            <label className="block mb-2"><input type="checkbox" name="ai-usage" value="predictive-analytics" className="mr-2" /> Predictive analytics</label>
            <label className="block mb-2"><input type="checkbox" name="ai-usage" value="portfolio-management" className="mr-2" /> Portfolio management</label>
            <label className="block mb-2"><input type="checkbox" name="ai-usage" value="risk-assessment" className="mr-2" /> Risk assessment</label>
            <label className="block mb-2">Other (please specify): <input type="text" name="other-ai-usage" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" /></label>
        </div>,
        <div className="p-4" key="18">
            <label className="block mb-2">How comfortable are you with using AI in your investment strategy?</label>
            <label className="block mb-2"><input type="radio" name="ai-comfort" value="very-comfortable" className="mr-2" /> Very comfortable</label>
            <label className="block mb-2"><input type="radio" name="ai-comfort" value="somewhat-comfortable" className="mr-2" /> Somewhat comfortable</label>
            <label className="block mb-2"><input type="radio" name="ai-comfort" value="neutral" className="mr-2" /> Neutral</label>
            <label className="block mb-2"><input type="radio" name="ai-comfort" value="somewhat-uncomfortable" className="mr-2" /> Somewhat uncomfortable</label>
            <label className="block mb-2"><input type="radio" name="ai-comfort" value="very-uncomfortable" className="mr-2" /> Very uncomfortable</label>
        </div>,
        <div className="p-4" key="19">
            <h2 className="text-xl font-bold mb-4">Current Events Influence</h2>
            <label className="block mb-2">How often do you consider current events when making investment decisions?</label>
            <label className="block mb-2"><input type="radio" name="current-events" value="always" className="mr-2" /> Always</label>
            <label className="block mb-2"><input type="radio" name="current-events" value="often" className="mr-2" /> Often</label>
            <label className="block mb-2"><input type="radio" name="current-events" value="sometimes" className="mr-2" /> Sometimes</label>
            <label className="block mb-2"><input type="radio" name="current-events" value="rarely" className="mr-2" /> Rarely</label>
            <label className="block mb-2"><input type="radio" name="current-events" value="never" className="mr-2" /> Never</label>
        </div>,
        <div className="p-4" key="20">
            <label className="block mb-2">Which types of current events do you believe most affect your investments? (Select all that apply)</label>
            <label className="block mb-2"><input type="checkbox" name="current-events-types" value="economic-reports" className="mr-2" /> Economic reports (e.g., GDP, unemployment rates)</label>
            <label className="block mb-2"><input type="checkbox" name="current-events-types" value="political-events" className="mr-2" /> Political events (e.g., elections, legislation)</label>
            <label className="block mb-2"><input type="checkbox" name="current-events-types" value="global-crises" className="mr-2" /> Global crises (e.g., pandemics, natural disasters)</label>
            <label className="block mb-2"><input type="checkbox" name="current-events-types" value="market-trends" className="mr-2" /> Market trends (e.g., tech advancements, industry shifts)</label>
        </div>,
        <div className="p-4" key="21">
            <h2 className="text-xl font-bold mb-4">General Attitudes</h2>
            <label className="block mb-2">How do you view the role of research vs. intuition in investing?</label>
            <label className="block mb-2"><input type="radio" name="research-vs-intuition" value="research-more-important" className="mr-2" /> Research is more important</label>
            <label className="block mb-2"><input type="radio" name="research-vs-intuition" value="intuition-more-important" className="mr-2" /> Intuition is more important</label>
            <label className="block mb-2"><input type="radio" name="research-vs-intuition" value="both-equally-important" className="mr-2" /> Both are equally important</label>
        </div>,
       <div className="p-4" key="22">
       <label className="block mb-2">Have you experienced any significant challenges with investing?</label>
       <label className="block mb-2">
           <input type="radio" name="investment-challenges" value="yes" className="mr-2" onChange={handleRadioChange} /> Yes
       </label>
       <label className="block mb-2">
           <input type="radio" name="investment-challenges" value="no" className="mr-2" onChange={handleRadioChange} /> No
       </label>
       <label className="block mb-2">If yes, please describe:
           {answers["investment-challenges"] === "yes" && (
               <input type="text" name="investment-challenges-yes" className="border p-2 w-full bg-[#F4F5F9] border-none text-[#89868D]" />
           )}
       </label>
   </div>,
   

    ];

    return (
        <AuthLayout>
            <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
                {questions[step]}
                <div className="flex justify-between mt-4">
                    {step > 0 && <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>}
                    {step < questions.length - 1 && <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>}
                    {step === questions.length - 1 && <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>}
                </div>
            </div>
        </AuthLayout>
    );
}

