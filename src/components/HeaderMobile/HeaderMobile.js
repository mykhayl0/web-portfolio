//
// HeaderMobile.js
// Header component for mobile screens. Controls the functionality.
//

import "./HeaderMobile.styles.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

import NavMobile from "../NavMobile";
import mykhayloLogo from "../../assets/mykhaylo-logo.svg";

export default function HeaderMobile() {
  // Control the state of the navigation when it's open. By default it's closed (false).
  const [navOpen, setNavOpen] = useState(false);

  // Handle the hamburger icon when a user interacts.
  const hamburgerClickHandler = () => {
    // If the navigation is open, then setNavOpen to false - closing the nav.
    if (navOpen) {
      setNavOpen(false);

      // If the navigatin is not open, then setNavOpen to true - opens the nav.
    } else {
      setNavOpen(true);
    }
  };

  // Control the state of the navigation when the user selects a link.
  // Ex: user selects Home, the navigation panel contracts.
  const closeNavHandler = () => {
    setNavOpen(false);
  };

  return (
    <>
      <header className="header-menu-mobile">
        {/* When the user selects any of the navigation buttons, then call the hamburgerClickHandler() */}

        <Link to="/">
          <img
            className="mykhaylo-logo"
            src={mykhayloLogo}
            alt="mykhaylo.ca. Return home."
          />
        </Link>

        {/* Control whether the NavMobile component is open or closed, based on its attribute values. */}
        <NavMobile open={navOpen} onClose={closeNavHandler} />

        <button className="hamburger-button" onClick={hamburgerClickHandler}>
          <div className="hamburger-icon">
            <input className="hamburger-icon__selected" type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </button>
      </header>
    </>
  );
}
