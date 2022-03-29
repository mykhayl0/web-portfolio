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
          projectTitle={"Kino\nMovies"}
          language={"React, Sass"}
          source="/kino-movies"
        />
        <WorkTile
          projectTitle={"Web\nPortfolio"}
          language={"React, Sass"}
          source="/in-progress"
          state={{ accessAllowed: true }}
        />
        <WorkTile
          projectTitle={"Laika Dog\nWalking"}
          language={"WordPress, WooCommerce"}
          source="/in-progress"
          state={{ accessAllowed: true }}
        />
      </section>
    </>
  );
}
