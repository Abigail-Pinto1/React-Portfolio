import { useEffect, useState } from "react";
import { FaRegMoon, FaHeart, FaCrown } from "react-icons/fa";

const themes = [
  { name: "synthwave", icon: <FaRegMoon size={22} /> },
  { name: "valentine", icon: <FaHeart size={22} /> },
  { name: "luxury", icon: <FaCrown size={22} /> },
];

export default function ThemeSwitcher() {
  const [index, setIndex] = useState(
    themes.findIndex((t) => t.name === localStorage.getItem("theme")) || 0
  );

  const theme = themes[index].name;

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full border bg-base-200 hover:bg-base-300 
                 shadow-md transition-all duration-300 flex items-center justify-center"
    >
      {themes[index].icon}
    </button>
  );
}
