//
// HomePage.js
// Render the Home page.
//

import styles from "./HomePage.module.scss";

import Button from "../../components/Button";
import Title from "../../components/Title";

export default function HomePage() {
  return (
    <section className={styles["homepage-intro__mobile"]}>
      <p>
        Front End Web Developer,
        <br />
        Web Designer,
        <br />
        This Is
      </p>

      <Title size="big">
        My
        <br />
        Khay
        <br />
        Lo.
      </Title>

      <Button link="http://localhost:3000/about">Discover</Button>
    </section>
  );
}
