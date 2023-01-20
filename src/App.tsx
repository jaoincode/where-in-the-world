import { useEffect } from "react";
import AllRoutes from "./routes";

function App() {
  const getActualTheme = () => {
    const theme = localStorage.getItem("theme");
    const html = document.querySelector("html");

    if (html) {
      if (theme === "dark") html.classList.add("dark");
      else html.classList.remove("dark");
    }
  };

  useEffect(() => {
    getActualTheme();
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <AllRoutes />
    </div>
  );
}

export default App;
