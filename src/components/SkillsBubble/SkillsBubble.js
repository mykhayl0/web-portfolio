//
// SkillsBubble.js
// Construct a new BloomingMenu and render a set of skills via props.
//

import "./SkillsBubble.styles.scss";

import {
  useEffect,
  useRef,
  useMemo,
  useContext,
  useState,
  useCallback,
} from "react";

import Context from "./context";
import EnhancedBloomingMenu from "./EnhancedBloomingMenu";

const separator = "__";
const classPrefix = `skills-bubble${separator}`;
const classExp = new RegExp(
  `${classPrefix}[a-z0-9]+${separator}([a-z0-9_-]+)`,
  "gi"
);

const addSharedClassNames = function (item) {
  const classNameList = Array.from(
    item.className.matchAll(classExp),
    (match) => classPrefix + match[1]
  );

  item.classList.add(...classNameList);
};

// Construct and control the skill bubbles using the props passed.
export default function SkillsBubble({
  category,
  skills,
  startAngle,
  endAngle,
}) {
  const { getGroup, addToGroup } = useContext(Context);
  const [menu, setMenu] = useState(null);
  const wrapperRef = useRef(null);

  const uniqueClassPrefix = useMemo(
    () => classPrefix + Math.random().toString(36).substr(2, 9) + separator,
    []
  );

  useEffect(() => {
    const wrapperElement = wrapperRef.current;

    const menu = addToGroup(
      new EnhancedBloomingMenu({
        itemsNum: skills.length,
        mainContent: category,
        injectBaseCSS: false,
        CSSClassPrefix: uniqueClassPrefix,
        radius: 120,
        startAngle: startAngle,
        endAngle: endAngle,
        fatherElement: wrapperElement,
      })
    );

    menu.onOpened = function () {
      wrapperElement.classList.remove("is-closing");
      wrapperElement.classList.add("is-open");

      getGroup().forEach(function (item) {
        if (item !== menu) {
          item.close();
        }
      });
    };

    menu.onClosed = function () {
      wrapperElement.classList.remove("is-open");
      wrapperElement.classList.add("is-closing");
    };

    setMenu(menu);
    menu.render();

    document
      .querySelectorAll(`[class^=${uniqueClassPrefix}]`)
      .forEach(addSharedClassNames);

    const itemsElements = menu.props.elements.items;

    // Loop through the menu list items. Generate DOM elements "img" and "span" along with classnames.
    itemsElements.forEach(function (itemElement, index) {
      const buttonElement = itemElement.querySelector(
        `.${uniqueClassPrefix}item-btn`
      );
      const skill = skills[index];

      const iconElement = document.createElement("img");
      iconElement.src = skill.icon;
      iconElement.alt = `${skill.name} icon`;
      iconElement.className = `${uniqueClassPrefix}item-icon`;
      addSharedClassNames(iconElement);

      const skillNameElement = document.createElement("span");
      skillNameElement.textContent = skill.name;
      skillNameElement.className = `${uniqueClassPrefix}item-name`;
      addSharedClassNames(skillNameElement);

      buttonElement.append(iconElement, skillNameElement);
    });

    return function () {
      menu.remove();
    };
  }, [
    category,
    uniqueClassPrefix,
    startAngle,
    endAngle,
    skills,
    addToGroup,
    getGroup,
  ]);

  const animationEndHandler = useCallback(function (event) {
    switch (event.animationName) {
      case "skills-bubble__open-scroll-animation":
        event.currentTarget.scrollIntoView({ behavior: "smooth" });
        break;

      case "skills-bubble__close-scroll-animation":
        event.currentTarget.classList.remove("is-closing");
        break;

      default:
        break;
    }
  }, []);

  return (
    <div
      className={`${uniqueClassPrefix}wrapper`}
      ref={wrapperRef}
      onAnimationEnd={animationEndHandler}
    />
  );
}
