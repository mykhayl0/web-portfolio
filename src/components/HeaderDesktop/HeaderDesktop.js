import styles from "./HeaderDesktop.module.scss";
import classNames from "classnames";

import { Link, useLocation } from "react-router-dom";

import mykhayloLogo from "../../assets/mykhaylo-logo.svg";
import linkedinIcon from "../../assets/icons/site-icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/development-icons/github-icon.svg";

export default function HeaderDesktop() {
  const { pathname } = useLocation();

  return (
    <>
      <header className={styles["header-desktop__wrapper"]}>
        <Link
          className={styles["header-desktop__mykhaylo-logo-wrapper"]}
          to="/"
        >
          <img
            className={styles["header-desktop__mykhaylo-logo"]}
            src={mykhayloLogo}
            alt="Return home. Logo for mykhaylo.ca"
          />
          <span>Mykhaylo.</span>
        </Link>

        <div className={styles["header-desktop__nav-items"]}>
          <Link
            className={pathname === "/" ? styles["current-page"] : styles[""]}
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              pathname === "/about" ? styles["current-page"] : styles[""]
            }
            to="/about"
          >
            About
          </Link>
          <Link
            className={
              pathname === "/work" ? styles["current-page"] : styles[""]
            }
            to="/work"
          >
            Work
          </Link>
          <Link
            className={
              pathname === "/contact" ? styles["current-page"] : styles[""]
            }
            to="/contact"
          >
            Contact
          </Link>
          <span>|</span>
          <a
            className={styles["header-desktop__profile-icons"]}
            href="https://www.linkedin.com/in/mykhayl0/"
          >
            <img src={linkedinIcon} alt="Visit Mykhaylo's LinkedIn profile." />
          </a>
          <a
            className={styles["header-desktop__profile-icons"]}
            href="https://github.com/mykhayl0"
          >
            <img src={githubIcon} alt="Visit Mykhaylo's GitHub profile." />
          </a>
        </div>
      </header>
    </>
  );
}
