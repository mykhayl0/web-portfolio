import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import styles from "./WorkTile.module.scss";

// WorkTile creates a container on the /work page that accepts the project title,
// the language, the project source.
export default function WorkTile({ projectTitle, language, source, ...props }) {
  return (
    <Link {...props} to={source} className={classNames(styles["work-tile"])}>
      <span className={classNames(styles["work-tile__project-title"])}>
        {projectTitle}
      </span>
      <span className={classNames(styles["work-tile__language"])}>
        {language}
      </span>
    </Link>
  );
}
