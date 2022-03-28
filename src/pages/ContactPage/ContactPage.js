import styles from "./ContactPage.module.scss";
import classNames from "classnames";
import { useRef, useEffect } from "react";

import Button from "../../components/Button";
import Title from "../../components/Title";

function checkNameValidity(inputElement) {
  if (inputElement.validity.valueMissing) {
    inputElement.setCustomValidity("I'd like to know your name.");
  } else {
    inputElement.setCustomValidity("");
  }
}

export default function ContactPage() {
  const nameInputRef = useRef(null);

  useEffect(() => {
    checkNameValidity(nameInputRef.current);
  }, []);

  return (
    <>
      <Title size="medium">Let's Sync Up.</Title>

      <p className={classNames(styles["contactpage__intro-text"])}>
        Like what you see? Shoot me an email. I'll get back to you within 1-2
        business days.
      </p>

      <form
        action="https://public.herotofu.com/v1/00c39a20-ada9-11ec-b83f-8f17e10d6288"
        method="post"
      >
        <div className={classNames(styles["contactpage__inputs-wrapper"])}>
          <div className={classNames(styles["contactpage__user-inputs"])}>
            <label htmlFor="name">Your Name.</label>
            <input
              name="name"
              id="name"
              type="text"
              onChange={(event) => checkNameValidity(event.currentTarget)}
              required
              ref={nameInputRef}
            />
          </div>

          <div className={classNames(styles["contactpage__user-inputs"])}>
            <label htmlFor="email">Your Email.</label>
            <input name="email" id="email" type="email" required />
          </div>

          <div className={classNames(styles["contactpage__user-inputs"])}>
            <label htmlFor="message">Your Message.</label>
            <textarea
              rows="10"
              name="message"
              id="message"
              type="message"
              required
            />
          </div>

          <p className={classNames(styles["contactpage__collab-text"])}>
            Collaboration is a step away.
          </p>

          <div className={classNames(styles.arrow, styles.bounce)}></div>

          <Button className={styles.submit_form}>
            <input
              className={classNames(styles["contactpage__submit-form"])}
              type="submit"
              value="Connect"
              id="submit"
            />
          </Button>
        </div>
      </form>
      <p className={classNames(styles["contactpage__alt-email"])}>
        Alternatively, email directly to hello@mykhaylo.ca
      </p>
    </>
  );
}
