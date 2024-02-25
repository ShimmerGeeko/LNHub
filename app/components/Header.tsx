"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  // const isActive =  pathname
  console.log(pathname)

  const tabsToDisplay = [
    { linkTo: "/", pageName: "Home" },
    { linkTo: "/about", pageName: "Blog" },
    { linkTo: "/gallery", pageName: "Gallery" },
    { linkTo: "contact-us", pageName: "Contact US" },
  ];
  return (
    <header>
      <Image height={60} width={150} src={`/logo.png`} alt={"logo"} />
      <nav aria-label="main mailbox folders" style={{ width: "30%" }}>
        <ul>
          {tabsToDisplay.map((tabItem, tabIndex) => (
            // let isActive =  pathname
            <li key={tabIndex}>
              <Link className={`link ${pathname === tabItem.linkTo && 'link-active'}`} href={tabItem.linkTo}>{tabItem.pageName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
