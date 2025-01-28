import React from "react";
import SubwaySurfers from "../components/SubwaySurfers";
import { useSettings } from "../state/state";

const Layout = ({ children }) => {
  const [settings, settingsDispatch] = useSettings();

  return (
    <div className={settings.darkMode ? "dark" : ""}>
      <div className="font-body bg-light dark:bg-dark text-black dark:text-white w-screen h-screen transition-colors duration-500 overflow-scroll">
        {settings.subwaySurf && <SubwaySurfers />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
