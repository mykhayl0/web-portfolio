import styles from "./InProgress.module.scss";
import Title from "../Title";
import Button from "../Button";

import { Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// InProgress is an "Under Construction page".
// Can only be accessed via WorkTiles that are not completed.
export default function InProgress() {
  const { state } = useLocation();

  if (!state?.accessAllowed) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Helmet>
        <title>mykhaylo.ca | In Progress</title>
      </Helmet>
      <Title size="medium">Oops.</Title>
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
