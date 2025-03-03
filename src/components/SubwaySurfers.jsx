// this is a joke don't worry about it
import React, { useEffect, useRef, useState } from "react";

const SubwaySurfers = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fixed bottom-1/2 right-0 p-4 transform translate-y-1/2 bg-blue-400 rounded-lg opacity-80 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "Close" : "Open"}
      </div>
      <div
        className={
          "absolute h-screen w-screen opacity-20 " + (isOpen ? "-z-50" : "z-10")
        }
      >
        {/* <iframe
        className="w-full h-full"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/i0M4ARe9v0Y?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=i0M4ARe9v0Y&modestbranding=1&iv_load_policy=3&fs=0&rel=0`}
      ></iframe> */}
        <iframe
          id="iframehtml5"
          width="100%"
          height="100%"
          frameborder="0"
          border="0"
          class="iframe-default"
          src="https://block-blast.io/game/block-blast/"
        ></iframe>
      </div>
    </>
  );
};

export default SubwaySurfers;
