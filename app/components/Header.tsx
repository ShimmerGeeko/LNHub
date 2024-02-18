import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const tabsToDisplay = [
    { linkTo: "/", pageName: "Home" },
    { linkTo: "/about", pageName: "Blog" },
    { linkTo: "/gallery", pageName: "Gallery" },
    { linkTo: "contact-us", pageName: "Contact US" },
  ];
  return (
    <header
      style={{
        padding: ".5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E5EAF2",
      }}
    >
      <Image height={50} width={140} src={`/logo.png`} alt={"logo"} />
      <nav aria-label="main mailbox folders" style={{ width: "30%" }}>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "1.5rem",
            fontSize: "1.1rem",
            color:'#000'
          }}
        >
          {tabsToDisplay.map((tabItem, tabIndex) => (
            <li key={tabIndex}>
              <Link href={tabItem.linkTo}>{tabItem.pageName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
