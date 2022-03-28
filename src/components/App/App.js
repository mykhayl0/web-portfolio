import "./App.scss";

import { Routes, Route } from "react-router-dom";

import HeaderMobile from "../HeaderMobile";
import MatchMedia from "../MatchMedia";

import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import WorkPage from "../../pages/WorkPage/WorkPage";
import ContactPage from "../../pages/ContactPage";
import ThankYou from "../../pages/ThankYou";

function App() {
  return (
    <>
      <MatchMedia mediaQuery="(max-width: 10000px)">
        <HeaderMobile />
      </MatchMedia>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
