import classNames from "classnames";

import smallMob from "../../assets/portrait-crops/mobileSmall__image.jpg";
import mediumMob from "../../assets/portrait-crops/mobileMedium__image.jpg";
import largeMob from "../../assets/portrait-crops/mobileLarge__image.jpg";
import ResponsiveMedia from "../../components/ResponsiveMedia";
import Title from "../../components/Title";
import SkillsBubble, { SkillsBubbleGroup } from "../../components/SkillsBubble";
import { developmentSkills, designSkills, cmsStoresSkills } from "./skills";

import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  return (
    <>
      <div className={classNames(styles["aboutpage-img-title-wrapper"])}>
        <ResponsiveMedia
          className={styles.portrait}
          smallMob={smallMob}
          mediumMob={mediumMob}
          largeMob={largeMob}
          alt="Portrait of Mykhaylo Yaremchuk, a Front-end Web Developer."
        />
        <Title size="medium" className={styles.title}>
          Hello.
        </Title>
      </div>

      <section className={classNames(styles["aboutpage__about-me"])}>
        <p>
          I'm Mykhaylo, a Ukrainian-born nerd and your next Front-end Engineer.
          In early 2020, I developed a passion for web technologies, and I set
          out to leave my mark.
        </p>
        <Title size="small">Passion turned into career.</Title>
        <p>
          I am a graduate of the British Columbia Institute of Technology as a
          Front-end Web Developer. Since then, I've devoted my time to all
          things tech. I love a challenge, and I seek out everyday problems that
          require unique solutions!
        </p>
        <Title size="small">
          I worship ReactJS and value learning new libraries.
        </Title>
        <p>
          I'm a conscientious, problem-solving, and a self-starting hacker. Fan
          of PC games, whipping up fresh meals, and the outdoors. I'm excited
          about the front-end spectrum and working with diverse and positive
          teams!
          <br />
          <br />
          Let me help you build clean, intuitive, and responsive web
          applications!
        </p>
      </section>

      <section className={classNames(styles["aboutpage__skills"])}>
        <Title size="small">Technical Skills</Title>

        <SkillsBubbleGroup>
          <SkillsBubble {...developmentSkills} />
          <SkillsBubble {...designSkills} />
          <SkillsBubble {...cmsStoresSkills} />
        </SkillsBubbleGroup>
      </section>
    </>
  );
}
