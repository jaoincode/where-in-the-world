import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Social from "./components/Social";

import Country from "./pages/Country";

import Home from "./pages/Home";

function AllRoutes() {
  return (
    <Router>
      <Social />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
