import styles from "./ProjectDetails.module.scss";
import classNames from "classnames";
import Button from "../Button";

import githubIcon from "../../assets/icons/development-icons/github-icon.svg";

// ProjectDetails completes the beginning structure of single project pages.
// Auto fills information that is passed through props, such as the project languages,
// the GitHub repository link, and the external project URL link.
export default function ProjectDetails({ languages, repoLink, projectURL }) {
  return (
    <section className={classNames(styles["project-details-wrapper"])}>
      <span className={classNames(styles["project-languages"])}>
        {languages}
      </span>
      <div className={classNames(styles["details-wrapper"])}>
        <a target="_blank" href={repoLink}>
          <div className={classNames(styles["github-wrapper"])}>
            <img
              className={classNames(styles["github-icon"])}
              src={githubIcon}
              alt="GitHub Repository"
            />
            <div className={classNames(styles.arrow, styles.bounce)}></div>
          </div>
        </a>
      </div>
      <div className={classNames(styles["button-wrapper"])}>
        <Button internalPath="/work">Go Back</Button>
        <Button link={projectURL} newTab={"_blank"}>
          Result
        </Button>
      </div>
    </section>
  );
}
