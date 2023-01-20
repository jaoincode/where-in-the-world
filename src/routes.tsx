import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Country from "./pages/Country";
import Home from "./pages/Home";

function AllRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
