import React, { useEffect, useState } from "react";
import { Sun, Moon, Gem } from "lucide-react";


export default function ThemeSwitcher() {
  const themes = ["luxury", "dark", "light"];

  // Load theme from localStorage or fallback to "luxury"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "luxury"
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // persist choice
  }, [theme]);

  const cycleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={cycleTheme}
      className="btn btn-circle border-2 border-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-700 text-white shadow-lg hover:scale-110 transition-transform"
    >
      {theme === "light" && <Sun size={20} />}
      {theme === "dark" && <Moon size={20} />}
      {theme === "luxury" && <Gem size={20} />}
    </button>
  );
}
 