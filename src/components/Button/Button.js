import styles from "./Button.module.scss";
import classNames from "classnames";

export default function Button({ className, link, newTab, children }) {
  return (
    <button className={classNames(styles["pill-button"], className)}>
      <a href={link} target={newTab}>
        {children}
      </a>
    </button>
  );
}
