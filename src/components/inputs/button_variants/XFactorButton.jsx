import React, { useState } from "react";
import { useAppState } from "../../../state/state";
import Button from "../Button";

const XFactorButton = ({ ...rest }) => {
  const [modalClicked, setModalClicked] = useState(false);
  const [state, dispatch] = useAppState();

  const handleClick = () => {
    // Handle the click event here
    console.log("X Factor button clicked");
    if (state.xFactor) {
      dispatch({
        type: "SET",
        payload: { xFactor: false },
      });
    } else {
      setModalClicked(true);
    }
  };

  return (
    <>
      <Button
        {...rest}
        label={state.xFactor ? "X FACTOR ACTIVE" : "X FACTOR"}
        color={state.xFactor ? "green" : "red"}
        onClick={handleClick}
      />
      {modalClicked && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-dark p-4 rounded shadow-lg text-center">
            Are you sure you want to
            <br />
            <span className="text-red-500 font-bold font-mono"> X FACTOR?</span>
            <div className="flex flex-row justify-around w-full gap-4 my-2">
              <button
                className="bg-green-800 p-4 rounded shadow-lg"
                onClick={() => {
                  setModalClicked(false);
                  dispatch({
                    type: "SET",
                    payload: { xFactor: true },
                  });
                }}
              >
                Yes
              </button>
              <button
                className="bg-red-800 p-4 rounded shadow-lg"
                onClick={() => {
                  setModalClicked(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default XFactorButton;
