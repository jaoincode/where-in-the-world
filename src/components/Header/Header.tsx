import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

function Header() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) return localStorage.getItem("theme");
    else return "light";
  });

  useEffect(() => {
    changeTheme();
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => {
      localStorage.setItem("theme", prev === "light" ? "dark" : "light");
      return prev === "light" ? "dark" : "light";
    });
  };

  const changeTheme = () => {
    const html = document.querySelector("html");
    if (html) {
      if (theme === "dark") html.classList.add("dark");
      else html.classList.remove("dark");
    }
  };

  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-5 md:px-10 lg:px-20 dark:bg-slate-700 dark:text-white ">
      <h1 className="font-bold text-base md:text-lg lg:text-xl">
        Where in the world?
      </h1>
      <div className="flex gap-1 items-center">
        {theme === "light" ? (
          <BiMoon className="w-5 h-5" />
        ) : (
          <BiSun className="w-5 h-5" />
        )}
        <button
          className="font-medium text-sm md:text-base"
          onClick={handleTheme}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
