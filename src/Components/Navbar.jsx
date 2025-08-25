import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../Pages/Themeswitcher";


export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "luxury"
  );

  useEffect(() => {
    document.querySelector("div[data-theme]")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/70 backdrop-blur border-b border-neutral/40">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl tracking-wide">
          <span className="h-display text-2xl">PIN<span className="text-primary">GAIL</span></span>
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#work">Works</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Theme toggle luxury <-> light */}
        <ThemeSwitcher/>
        <a href="/signup" className="btn btn-sm btn-primary">Contact Me</a>
      </div>
    </div>
  );
}
