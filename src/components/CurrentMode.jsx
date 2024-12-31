import React, { useMemo } from "react";
import { useAppState } from "../state/state";
import Configure from "./Configure";
import Settings from "./Settings";
import Qualitative from "./Qualitative";
import Scout from "./Scout";
import Review from "./Review";
import ScanData from "./ScanData";
import Edit from "./Edit";

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
      case "Qualitative":
        return <Qualitative />;
      case "Settings":
        return <Settings />;
      case "ScanData":
        return <ScanData />;
      case "Edit":
        return <Edit />;
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
