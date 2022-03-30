import "./App.scss";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MatchMedia from "../MatchMedia";

import HeaderMobile from "../HeaderMobile";
import HeaderDesktop from "../HeaderDesktop";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import WorkPage from "../../pages/WorkPage/WorkPage";
import ContactPage from "../../pages/ContactPage";
import ThankYou from "../../pages/ThankYou";
import InProgress from "../InProgress/InProgress";
import MovieDatabase from "../../pages/SingleWorks/MovieDatabase";
import Footer from "../Footer";

function App() {
  const { pathname } = useLocation();

  useEffect(
    function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [pathname]
  );

  return (
    <>
      {/* Use MatchMedia to control whether HeaderMobile or HeaderDesktop is rendered. */}
      <MatchMedia mediaQuery="(max-width: 899px)">
        <HeaderMobile />
      </MatchMedia>

      <MatchMedia mediaQuery="(min-width: 900px)">
        <HeaderDesktop />
      </MatchMedia>

      <div className="app__flex-wrapper">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/in-progress" element={<InProgress />} />

            <Route path="/kino-movies" element={<MovieDatabase />} />
          </Routes>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
