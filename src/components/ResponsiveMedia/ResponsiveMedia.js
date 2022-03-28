import styles from "./ResponsiveMedia.module.scss";
import classNames from "classnames";

export default function ResponsiveMedia({
  alt,
  className,
  largeMob,
  mediumMob,
  smallMob,
}) {
  return (
    <img
      className={classNames(styles["box-shadow"], className)}
      src={smallMob}
      srcSet={`${smallMob} 320w, ${mediumMob} 375w, ${largeMob} 425w`}
      alt={alt}
    />
  );
}
