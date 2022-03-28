import styles from "./Button.module.scss";
import classNames from "classnames";

export default function Button({ className, link, children }) {
  return (
    <button className={classNames(styles["pill-button"], className)}>
      <a href={link}>{children}</a>
    </button>
  );
}
