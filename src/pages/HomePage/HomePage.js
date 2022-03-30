//
// HomePage.js
//

import styles from "./HomePage.module.scss";

import Button from "../../components/Button";
import Title from "../../components/Title";

import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>mykhaylo.ca | Home</title>
      </Helmet>

      <section className={styles["homepage__intro"]}>
        <p>
          Front-End Web Developer,
          <br />
          Web Designer,
          <br />
          This Is
        </p>

        <Title size="big">
          My
          <br className={styles["homepage__mobile-breaks"]} />
          Khay
          <br className={styles["homepage__mobile-breaks"]} />
          Lo.
        </Title>
        <span className={styles["homepage__pronunciation"]}>
          Pronunciation [mee-KHA-eel-o]
        </span>

        <Button internalPath="/about">Discover</Button>
      </section>
    </>
  );
}
