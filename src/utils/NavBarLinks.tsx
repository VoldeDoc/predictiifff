import { NavbarLink, Dropdown } from "flowbite-react";
import { useLocation } from "react-router-dom";

type NavLink = {
  title: string;
  link: string;
  dropdown?: { subTitle: string; subLink: string }[];
};

function NavBarLinks() {
  const navLinks: NavLink[] = [
    { title: "Home", link: "/" },
    {
      title: "Investment",
      link: "/investing",
      dropdown: [
        { subTitle: "Stocks/Bonds", subLink: "/investing/global-stock" },
        { subTitle: "ETF’s", subLink: "/investing/etfs" },
        { subTitle: "Commodities", subLink: "/investing/commodities" },
        { subTitle: "Unique Portfolios", subLink: "/investing/unique-portfolios" },
        { subTitle: "Currencies", subLink: "/investing/currencies" },
        { subTitle: "Indices", subLink: "/investing/indices" },
      ],
    },
    {
      title: "Savings",
      link: "/savings",
      dropdown: [
        {
          subTitle: "Predict.if account",
          subLink: "/savings/predict-if-account",
        },
        {
          subTitle: "Individuals Savings",
          subLink: "/savings/individuals-savings",
        },
        { subTitle: "Group Savings", subLink: "/savings/group-savings" },
      ],
    },
    {
      title: "Wealth Management",
      link: "/wealth-management",
      dropdown: [
        {
          subTitle: "Smart Portfolios (AI powered Tracker)",
          subLink: "/wealth-management/smart-portfolios",
        },
        {
          subTitle: "Self Design (AI powered Tracker)",
          subLink: "/wealth-management/self-design",
        },
        {
          subTitle: "Wealth Management (AI powered Tracker)",
          subLink: "/wealth-management/wealth-management",
        },
      ],
    },
    {
      title: "Education",
      link: "/education",
      dropdown: [
        { subTitle: "Academy", subLink: "/education" },
        { subTitle: "News & Insights", subLink: "/education/news-insights" },
        { subTitle: "Digest", subLink: "/education/digest" },
        { subTitle: "Forum", subLink: "/education/forum" },
      ],
    },
   
    {
      title: "About us",
      link: "/about",
      dropdown: [
        { subTitle: "Mission Statement", subLink: "/about/mission-statement" },
        { subTitle: "Overview", subLink: "/about/overview" },
        { subTitle: "Our Commitment", subLink: "/about/commitment" },
        { subTitle: "Corporate Social Responsibility", subLink: "/about/csr" },
      ],
    },
  ];

  const pathname = useLocation().pathname;

  return (
    <>
      {navLinks.map(({ title, link, dropdown }, index) => {
        const isActive =
          pathname.startsWith(link) ||
          (dropdown &&
            dropdown.some(({ subLink }) => pathname.startsWith(subLink)));
        return dropdown ? (
          <Dropdown
            key={index}
            label={
              <NavbarLink
                href={link}
                className={`font-bold ${isActive ? "active border-b-2 border-blue-800 text-blue-800" : ""}`}
              >
                {title}
              </NavbarLink>
            }
            inline
            className="bg-blue-800"
          >
            {dropdown.map(({ subTitle, subLink }, subIndex) => (
              <Dropdown.Item
                key={subIndex}
                href={subLink}
                className={`${
                  pathname === subLink ? "active bg-blue-800 text-white hover:text-black" : "text-white hover:text-black"
                }`}
              >
                {subTitle}
              </Dropdown.Item>
            ))}
          </Dropdown>
        ) : (
          <NavbarLink
            key={index}
            href={link}
            className={`font-bold ${pathname === link ? "active border-b-2 border-blue-500 text-blue-500" : ""}`}
          >
            {title}
          </NavbarLink>
        );
      })}
    </>
  );
}

export default NavBarLinks;