import React from "react";
import { useSettings } from "../state/state";

const Layout = ({ children }) => {
  const [settings, settingsDispatch] = useSettings();

  return (
    <div className={settings.darkMode ? "dark" : ""}>
      <div className="font-body bg-white dark:bg-black-primary text-black dark:text-white w-screen h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
