import styles from "./ResponsiveMedia.module.scss";
import classNames from "classnames";

// Utilize the HTML srcSet to provide responsive media based on user screensize.
// This component loads the correct portrait photo on the About page based on the users viewport.
export default function ResponsiveMedia({
  alt,
  className,
  smallMob, // 320px
  mediumMob, // 375px
  largeMob, // 425px

  smallTab, // 600px
  largeTab, // 768px
}) {
  return (
    <img
      className={classNames(styles["box-shadow"], className)}
      src={smallMob}
      srcSet={`${smallMob} 320w, ${mediumMob} 375w, ${largeMob} 425w, ${smallTab} 600w, ${largeTab} 768w`}
      alt={alt}
    />
  );
}
