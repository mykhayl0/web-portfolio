import classNames from "classnames";

import smallMob from "../../assets/portrait-crops/mobileSmall__image.jpg";
import mediumMob from "../../assets/portrait-crops/mobileMedium__image.jpg";
import largeMob from "../../assets/portrait-crops/mobileLarge__image.jpg";
import smallTab from "../../assets/portrait-crops/tabSmall__image.jpg";
import largeTab from "../../assets/portrait-crops/tabLarge__image.jpg";
import smallLap from "../../assets/portrait-crops/lapSmall__image.jpg";
import mediumLap from "../../assets/portrait-crops/lapMedium__image.jpg";
import largeLap from "../../assets/portrait-crops/lapLarge__image.jpg";

import ResponsiveMedia from "../../components/ResponsiveMedia";
import Title from "../../components/Title";
import SkillsBubble, { SkillsBubbleGroup } from "../../components/SkillsBubble";
import { developmentSkills, designSkills, cmsStoresSkills } from "./skills";

import { Helmet } from "react-helmet";

import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>mykhaylo.ca | About</title>
      </Helmet>
      <div className={classNames(styles["aboutpage-img-title-wrapper"])}>
        <ResponsiveMedia
          className={styles.portrait}
          smallMob={smallMob}
          mediumMob={mediumMob}
          largeMob={largeMob}
          smallTab={smallTab}
          largeTab={largeTab}
          smallLap={smallLap}
          mediumLap={mediumLap}
          largeLap={largeLap}
          alt="Portrait of Mykhaylo Yaremchuk, a Front-end Web Developer."
        />
        <Title size="medium" className={styles.title}>
          Hello.
        </Title>
      </div>

      <section
        className={classNames(styles["aboutpage__about-me"], styles["top"])}
      >
        <p>
          I'm Mykhaylo, a Ukrainian-born nerd and your next Front-end Engineer.
          In early 2020, I developed a passion for web technologies, and I set
          out to leave my mark.
        </p>
      </section>

      <div className={styles["aboutpage__mid-wrapper"]}>
        <section
          className={classNames(
            styles["aboutpage__about-me"],
            styles["aboutpage__first-section"]
          )}
        >
          <Title size="small">Passion turned into career.</Title>
          <p>
            I am a graduate of the British Colu mbia Institute of Technology as
            a Front-end Web Developer. Since then, I've devoted my time to all
            things tech. I love a challenge, and I seek out everyday problems
            that require unique solutions!
          </p>
          <Title size="small">
            I worship ReactJS and value learning new libraries.
          </Title>
          <p>
            I'm a conscientious, problem-solving, and a self-starting hacker.
            Fan of PC games, whipping up fresh meals, and the outdoors. I'm
            excited about the front-end spectrum and working with diverse and
            positive teams!
            <br />
            <br />
            Let me help you build clean, intuitive, and responsive web
            applications!
          </p>
        </section>

        <section className={styles["aboutpage__second-section"]}>
          <Title size="small">Technical Skills.</Title>

          <SkillsBubbleGroup>
            <SkillsBubble {...developmentSkills} />
            <SkillsBubble {...designSkills} />
            <SkillsBubble {...cmsStoresSkills} />
          </SkillsBubbleGroup>
        </section>
      </div>
    </>
  );
}
