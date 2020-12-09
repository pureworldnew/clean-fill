import React from "react";
import logo from "../assets/images/logo.png";
export default function Header() {
  return (
    <header className="flex flex-col justify-between bg-header-back">
      <div className="w-full lg:flex float-left text-right lg:text-center p-4 mb-32">
        <div className="lg:hidden w-full float-right">TEST</div>
        <img
          src={logo}
          className="Logo w-1/5 float-left lg:float-none"
          alt="logo"
        />
        <nav className="hidden lg:block w-3/5 mx-3">
          <ul className="flex justify-between">
            <li>
              <a href="/">Buy on Uniswap</a>
            </li>
            <li>
              <a href="/">Staking Pool</a>
            </li>
            <li>
              <a href="/">DEX</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Audit Report</a>
            </li>
          </ul>
        </nav>
        <div className="float-right lg:float-none flex m-auto">
          <button className="mx-3">Sign In</button>
          <button className="mx-3">Sign Out</button>
        </div>
      </div>
      <div className="flex m-auto">
        <button className="mx-3">Need Fill</button>
        <button className="mx-3">Have Fill</button>
      </div>
    </header>
  );
}
