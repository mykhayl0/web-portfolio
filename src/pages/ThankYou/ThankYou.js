import classNames from "classnames";
import styles from "./ThankYou.module.scss";

import Title from "../../components/Title";
import Button from "../../components/Button";

export default function ThankYou() {
  return (
    <>
      <Title size="medium">Yes.</Title>
      <p className={classNames(styles["thankspage__text"])}>
        You have good taste, and more goodness is coming your way.
        <br />
        <br />
        I'll get back to your email within 24-48 business hours.
        <br />
        <br />
        Yours truly,
        <br />
        Mykhaylo.
      </p>
      <Button link="http://localhost:3000/">Go Home</Button>
    </>
  );
}
