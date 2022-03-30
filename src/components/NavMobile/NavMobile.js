import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import styles from "./NavMobile.module.scss";
import classNames from "classnames";

// NavMobile is rendered on screens smaller than 899px. Rendering Link components.
export default function NavMobile({ open, ...props }) {
  // Only activate effect if the parameter "open" changes.
  useEffect(() => {
    // If NavMobile is open, add classList to the body.
    if (open) {
      document.body.classList.add(styles["no-pointer-no-overflow"]);
      // Else, remove the class.
    } else {
      document.body.classList.remove(styles["no-pointer-no-overflow"]);
    }
  }, [open]);

  const { pathname } = useLocation();

  return (
    <>
      {/* If the NavMobile is open, pass a className. */}
      <div
        className={classNames(
          styles["content-dark-overlay"],
          open ? styles.open : styles.closed
        )}
      />
      <nav
        {...props}
        className={classNames(
          styles["nav-open"],
          open ? styles.open : styles.closed,
          props.className
        )}
      >
        <ul className={styles["nav-items"]}>
          <li>
            <Link
              className={classNames(
                pathname === "/" ? styles["current-page"] : styles[""]
              )}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                pathname === "/about" ? styles["current-page"] : styles[""]
              )}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                pathname === "/work" ? styles["current-page"] : styles[""]
              )}
              to="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                pathname === "/contact" ? styles["current-page"] : styles[""]
              )}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
