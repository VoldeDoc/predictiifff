import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Signin from "@/pages/auth/signin";
import Loading from "@/utils/Loading";
import Signup from "@/pages/auth/signup";

import ButtonT from "@/pages/Ui/button";
import ExampleForm from "./pages/Ui/textinput";

import Home from "@/pages/home/";
import NotFound from "@/pages/404";
import Verification from "@/pages/auth/emailVerification";
import Investment from "@/pages/investing";
import Dashboard_T from "@/pages/dashboard";
import Stocking from "@/pages/stock";
import Market from "@/pages/marketzone";

import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import Trading from "@/pages/trading";
import Educate from "@/pages/education";
import Invest2 from "@/pages/Investing2";
import Save from "@/pages/saving";
import GroupSavings from "@/pages/saving/groupSavings";
import IndividualSavings from "@/pages/saving/individualSavings";
import UniquePortfolios from "@/pages/investing/uniquePortfolio";
import Questions from "./pages/Questionnaire";
import Abt from './pages/About/index';
import AbtUs from "./pages/About/About Us";
import Commit from "./pages/About/Commitment";
import Mission from "./pages/About/Mission";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <main>
        {loading ? (
          <Loading message="please wait..." />
        ) : (
          <>
            <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />

                {/* Authentication */}
                <Route path="/auth/signin" element={<Signin />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route
                  path="/auth/otp-verification"
                  element={<Verification />}
                />

                <Route path="/questions" element={<Questions />} />
                <Route path="/dashboard" element={<Dashboard_T />} />
                <Route path="/investing" element={<Investment />} />
                <Route path="/stock" element={<Stocking />} />
                <Route path="/market-zone" element={<Market />} />
                <Route path="/investing/etfs" element={<Trading />} />
                <Route path="/education" element={<Educate />} />
                <Route path="/investing/global-stock" element={<Invest2 />} />
                <Route path="/investing/unique-portfolios" element={<UniquePortfolios />} />
                <Route path="/savings" element={<Save />} />
                <Route
                  path="/savings/group-savings"
                  element={<GroupSavings />}
                />
                <Route path="/savings/individuals-savings" element={<IndividualSavings />} />
                <Route path="/about" element={<Abt />} />
                <Route path="/about/overview" element={<AbtUs />} />
                <Route path="/about/commitment" element={<Commit />} />
                <Route path="/about/mission-statement" element={<Mission />} />

                {/* Ui */}
                <Route path="/ui/button" element={<ButtonT />} />
                <Route path="/ui/textinput" element={<ExampleForm />} />
              </Routes>
            </PrimeReactProvider>
          </>
        )}
      </main>
    </>
  );
}

export default App;
