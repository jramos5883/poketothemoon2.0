"use client";
import Link from "next/link";

import { Oleo_Script } from "@next/font/google";
import { Fugaz_One } from "@next/font/google";

const oleoScript = Oleo_Script({
  weight: "700",
  subsets: ["latin"],
});

const fugazOne = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="container-fluid navbar">
      <div className="nav-link-container container-fluid">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/aboutus">
          About Us
        </Link>
        <h2 className={oleoScript.className}>POKE TO THE MOON</h2>
        <h2 className={fugazOne.className}>POKE TO THE MOON</h2>
        <Link className="nav-link" href="/menu">
          Menu
        </Link>
        <Link className="nav-link" href="/location">
          Location
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
