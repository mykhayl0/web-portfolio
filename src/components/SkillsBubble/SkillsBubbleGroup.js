import { useCallback, useMemo, useRef } from "react";

import { Provider } from "./context";

export default function SkillsBubbleGroup({ children }) {
  const menuListRef = useRef([]);

  const removeFromGroup = useCallback(function (menu) {
    menuListRef.current = menuListRef.current.filter(function (item) {
      return item !== menu;
    });
  }, []);

  const addToGroup = useCallback(
    function (menu) {
      if (menuListRef.current.includes(menu)) {
        return menu;
      }

      const removeFn = menu.remove;

      const groupedMenu = Object.assign(
        Object.create(Object.getPrototypeOf(menu)),
        {
          ...menu,
          remove() {
            removeFromGroup(this);
            return removeFn.call(this);
          },
        }
      );

      menuListRef.current.push(groupedMenu);
      return groupedMenu;
    },
    [removeFromGroup]
  );

  const contextValue = useMemo(
    function () {
      return {
        addToGroup,
        getGroup() {
          return menuListRef.current;
        },
      };
    },
    [addToGroup]
  );

  return <Provider value={contextValue}>{children}</Provider>;
}
