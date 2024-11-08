import { NavbarLink, Dropdown } from "flowbite-react";
import { useLocation } from "react-router-dom";

type NavLink = {
  title: string;
  link: string;
  dropdown?: { subTitle: string; subLink: string }[];
};

function NavBarLinks() {
  const navLinks: NavLink[] = [
    { title: "Trading", link: "/" },
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
      title: "About us",
      link: "/about",
      dropdown: [
        { subTitle: "Mission Statement", subLink: "/about/mission-statement" },
        { subTitle: "Vision", subLink: "/about/vision" },
        { subTitle: "Overview", subLink: "/about/overview" },
        { subTitle: "Our Commitment", subLink: "/about/our-commitment" },
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
                className={isActive ? "active" : undefined}
              >
                {title}
              </NavbarLink>
            }
            inline
          >
            {dropdown.map(({ subTitle, subLink }, subIndex) => (
              <Dropdown.Item
                key={subIndex}
                href={subLink}
                className={pathname === subLink ? "active" : undefined}
              >
                {subTitle}
              </Dropdown.Item>
            ))}
          </Dropdown>
        ) : (
          <NavbarLink
            key={index}
            href={link}
            className={pathname === link ? "active" : undefined}
          >
            {title}
          </NavbarLink>
        );
      })}
    </>
  );
}

export default NavBarLinks;
