import { customNavbarTheme } from "@/utils/FlowBiteCustomThemes";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import AdSlider from "./Tools/adSlider";
import NavBarLinks from "@/utils/NavBarLinks";

export default function Header() {
  return (
    <>
      <AdSlider />
      <div className="w-full bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 sticky top-0 z-50">
        <div className="container mx-auto">
          <Navbar fluid theme={customNavbarTheme}>
            <Navbar.Brand href="/">
              <img src="/assets/images/favicon.png" className="mr-3 h-8 sm:h-11" alt="Predict.if Logo" />
              <span className="self-center whitespace-nowrap text-3xl font-bold text-[#002072]">Predict.if</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Link to="/auth/signin" className="hidden md:block">
                <Button color="dark">Login / Register</Button>
              </Link>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <NavBarLinks />
              <Link to="/auth/signin" className="block md:hidden mt-4">
                <Button color="dark" className="w-full">
                  <NavLink to="/questions">Login / Register</NavLink>
                </Button>
              </Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}