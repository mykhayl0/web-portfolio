//
// NavMobile.js
// Control the navigation panel on mobile screens.
//

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./NavMobile.styles.scss";

// NavMobile accepts two parameters, open and onClose.
export default function NavMobile({ open, onClose }) {
  // Only activate effect if the parameter "open" changes.
  useEffect(() => {
    // If NavMobile is open, add classList to the body.
    if (open) {
      document.body.classList.add("no-overflow");
      // Else, remove the class.
    } else {
      document.body.classList.remove("no-overflow");
    }
  }, [open]);

  return (
    <>
      {/* If the NavMobile is open, pass a className. */}
      <div className={open ? "nav-panel open" : "nav-panel"}></div>
    </>
  );
}
