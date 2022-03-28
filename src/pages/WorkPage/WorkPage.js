import styles from "./WorkPage.module.scss";
import classNames from "classnames";

import Title from "../../components/Title";
import WorkTile from "../../components/WorkTile";

export default function WorkPage() {
  return (
    <>
      <Title size="medium">Work.</Title>
      <section className={classNames(styles["work-tiles"])}>
        <WorkTile
          projectTitle={"Movie\nDatabase"}
          language={"React, Sass"}
          source="/"
        />
        <WorkTile
          projectTitle={"Web\nPortfolio"}
          language={"React, Sass"}
          source="/"
        />
        <WorkTile
          projectTitle={"Laika\n Dog Walking"}
          language={"WordPress, WooCommerce"}
          source="/"
        />
      </section>
    </>
  );
}
