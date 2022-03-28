import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import styles from "./WorkTile.module.scss";

export default function WorkTile({ projectTitle, language, source }) {
  return (
    <Link to={source} className={classNames(styles["work-tile"])}>
      <span className={classNames(styles["work-tile__project-title"])}>
        {projectTitle}
      </span>
      <span className={classNames(styles["work-tile__language"])}>
        {language}
      </span>
    </Link>
  );
}
