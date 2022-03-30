/* eslint-disable jsx-a11y/heading-has-content */
import classNames from "classnames";
import styles from "./Title.module.scss";

// Generate Title components based on the prop.size value.
export default function Title(props) {
  if (props.size === "big") {
    return (
      <h1
        {...props}
        className={classNames(styles["title-big"], props.className)}
      />
    );
  } else if (props.size === "medium") {
    return (
      <h2
        {...props}
        className={classNames(styles["title-medium"], props.className)}
      />
    );
  } else {
    return (
      <h3
        {...props}
        className={classNames(styles["title-small"], props.className)}
      />
    );
  }
}
