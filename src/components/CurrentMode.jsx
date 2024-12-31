import React, { useMemo } from "react";
import { useAppState } from "../state/state";
import Configure from "./Configure";

const CurrentMode = () => {
  const [state, dispatch] = useAppState();
  const renderedMode = useMemo(() => {
    switch (state.mode) {
      case "Configure":
        return <Configure />;
      case "Scout":
        return <div></div>;
      case "Review":
        return <div></div>;
      case "ConfigureQualitative":
        return <div></div>;
      case "Qualitative":
        return <div></div>;
      case "Settings":
        return <div></div>;
      case "ScanData":
        return <div></div>;
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
