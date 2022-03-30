import styles from "./Button.module.scss";
import classNames from "classnames";

import { Link } from "react-router-dom";

// Render a prestyled Button, accepting className's, external links,
// control opening new browser tabs, internal Router paths, and button text.
export default function Button({
  className,
  link,
  newTab,
  internalPath,
  children,
}) {
  // If internalPath exists, then render a Link component.
  if (internalPath) {
    return (
      <Link
        className={classNames(styles["pill-button"], className)}
        to={internalPath}
      >
        {children}
      </Link>
    );
    // Otherwise, if no internalPath exists, then render a regular button wrapped
    // wrapping an href.
  } else {
    return (
      <button className={classNames(styles["pill-button"], className)}>
        <a href={link} target={newTab}>
          {children}
        </a>
      </button>
    );
  }
}
