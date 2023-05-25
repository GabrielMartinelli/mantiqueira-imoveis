import { createContext, useState } from "react";

export const MenuOpenContext = createContext();
MenuOpenContext.displayName = "MenuOpen";

export const MenuOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return <MenuOpenContext.Provider value={{ open, setOpen }}>{children}</MenuOpenContext.Provider>;
};
