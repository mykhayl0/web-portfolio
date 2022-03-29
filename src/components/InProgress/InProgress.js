import styles from "./InProgress.module.scss";
import classNames from "classnames";
import Title from "../Title";
import Button from "../Button";
import { Navigate, useLocation } from "react-router-dom";

export default function InProgress() {
  const { state } = useLocation();

  if (!state?.accessAllowed) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Title size="small">Oops.</Title>
      <p className={styles["inprogress__p"]}>
        I'm working extra hard to make this page glorious.
        <br />
        <br />
        Check back soon for something amazing.
      </p>
      <Button internalPath="/">Go Home</Button>
    </>
  );
}
