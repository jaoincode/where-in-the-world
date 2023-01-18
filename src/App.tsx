import Header from "./components/Header";

import AllRoutes from "./routes";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
