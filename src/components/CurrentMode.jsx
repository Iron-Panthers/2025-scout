import React, { useMemo } from "react";
import { useAppState } from "../state/state";
import Configure from "./Configure";
import Settings from "./Settings";
import Qualitative from "./Qualitative";
import Scout from "./Scout";
import Review from "./Review";

const CurrentMode = () => {
  const [state, dispatch] = useAppState();
  const renderedMode = useMemo(() => {
    switch (state.mode) {
      case "Configure":
        return <Configure />;
      case "Scout":
        return <Scout />;
      case "Review":
        return <Review />;
      case "ConfigureQualitative":
        return <div></div>;
      case "Qualitative":
        return <Qualitative />;
      case "Settings":
        return <Settings />;
      case "ScanData":
        return <div></div>;
      case "Edit":
        return <div>Edit</div>;
      default:
        return (
          <div>
            <div>Someone, somewhere, fucked up majorly</div>
            <div>It was probably you</div>
          </div>
        );
    }
  }, [state.mode]);

  return renderedMode;
};

export default CurrentMode;
