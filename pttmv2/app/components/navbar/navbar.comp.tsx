"use client";
import Link from "next/link";

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
        <h2 className="poke-header">POKE TO THE MOON</h2>
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
