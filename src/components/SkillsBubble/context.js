import { createContext } from "react";

const Context = createContext({
  addToGroup(menu) {
    return menu;
  },
  getGroup() {
    return [];
  },
});

export const { Provider, Consumer } = Context;
export default Context;
