import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const tabsToDisplay = [
    { linkTo: "/", pageName: "Home" },
    { linkTo: "/about", pageName: "Blog" },
    { linkTo: "/gallery", pageName: "Gallery" },
    { linkTo: "contact-us", pageName: "Contact US" },
  ];
  return (
    <footer>
      <p>Powered by <a href="https://www.legalnexhub.com" target="_blank">LegalNex Hub</a> &copy;  </p>
    </footer>
  );
};

export default Footer;
