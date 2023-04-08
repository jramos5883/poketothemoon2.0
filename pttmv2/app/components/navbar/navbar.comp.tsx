"use client";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="container-fluid navbar">
      <h1>POKE TO THE MOON</h1>
      <div className="nav-link-container">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/aboutus">
          About Us
        </Link>
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
