import styles from "./MovieDatabase.module.scss";

import classNames from "classnames";

import Gist from "../../../components/Gist";
import ProjectDetails from "../../../components/ProjectDetails";
import Title from "../../../components/Title";

export default function MovieDatabase() {
  return (
    <>
      <Title size="medium">Kino Movies.</Title>
      <ProjectDetails
        languages="React, SCSS"
        repoLink="https://github.com/mykhayl0/kino-movies.git"
        projectURL="https://mykhaylo.ca/movie-database/"
      />
      <section className={classNames(styles["movie-database-details"])}>
        <Title size="small">Kino. It's just movies.</Title>
        <p>
          Kino Movies is a movie database built around React components,
          utilizing the TMDB API. Kino in Russian translates to movie. This
          simplicity was carried forward through to the design of the
          application. The objective was to create a responsive, scalable, and a
          minimalistic product utilizing one of my favourite JavaScript
          libraries, React.
        </p>
      </section>

      <section className={classNames(styles["movie-database-details"])}>
        <Title size="small">Component Switching.</Title>
        <p>
          Kino Movies has two types of headers: HeaderMobile.js and
          NavDesktop.js. With the help of the useMemo hook, a function was
          created to detect the user viewport size and switch between
          components.
        </p>
        <Gist id="585da02d62c7a65341965269f676a489" />
      </section>

      <section className={classNames(styles["movie-database-details"])}>
        <Title size="small">Saving Favourite Movies.</Title>
        <p>
          As Kino Movies does not have an account system, nor a backend database
          to store user information, saving to local storage was the solution.
          By setting a key of "favourites" within the browser local storage,
          it's possible to retrieve and set items within an array.
        </p>
        <Gist id="5279aee653fe0653a4f08d3e1978282c" />
      </section>
    </>
  );
}
