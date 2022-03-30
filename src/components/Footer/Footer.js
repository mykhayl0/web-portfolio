import styles from "./Footer.module.scss";
import classNames from "classnames";

import linkedInIcon from "../../assets/icons/site-icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/development-icons/github-icon.svg";
import mykhayloLogo from "../../assets/mykhaylo-logo.svg";
import emailIcon from "../../assets/icons/site-icons/email-icon.svg";

import { Link } from "react-router-dom";

// Render a Footer component with GitHub, LinkedIn icons, including the Mykhaylo logo
// and a copyright text.
export default function Footer() {
  return (
    <footer>
      <div className={classNames(styles["footer__media-icons"])}>
        <a target="_blank" href="https://www.linkedin.com/in/mykhayl0">
          <img src={linkedInIcon} alt="Visit Mykhaylo's LinkedIn profile." />
        </a>

        <a target="_blank" href="https://github.com/mykhayl0">
          <img src={githubIcon} alt="Visit Mykhaylo's GitHub profile." />
        </a>

        <Link to="/contact">
          <img src={emailIcon} alt="Send an email." />
        </Link>
      </div>

      <img
        className={classNames(styles["footer__mykhaylo-logo"])}
        src={mykhayloLogo}
        alt="Logo for mykhaylo.ca"
      />

      <span className={classNames(styles["footer__copyright"])}>
        © 2022 Mykhaylo Yaremchuk
      </span>
    </footer>
  );
}
