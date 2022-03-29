import styles from "./Gist.module.scss";

import { useEffect } from "react";
import ReactGist from "react-gist";

export default function Gist({ id }) {
  useEffect(
    function () {
      const iframeId = `gist-${id}`;
      const iframeElement = document.getElementById(iframeId);
      iframeElement.classList.add(styles["gist-iframe"]);

      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = `${process.env.PUBLIC_URL}gist.css`;

      iframeElement.contentDocument.head.append(linkElement);
    },
    [id]
  );

  return <ReactGist id={id} />;
}
