import styles from "./Button.module.scss";
import classNames from "classnames";

import { Link } from "react-router-dom";

export default function Button({
  className,
  link,
  newTab,
  internalPath,
  children,
}) {
  if (internalPath) {
    return (
      <Link
        className={classNames(styles["pill-button"], className)}
        to={internalPath}
      >
        {children}
      </Link>
    );
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
