import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
     <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M124.557 43.607L86.8 23.745a4.488 4.488 0 00-6.063 1.884l-.442.84L53.24 20.74a4.5 4.5 0 00-5.32 3.47l-.3 1.438-22.31.732a4.492 4.492 0 00-4.34 4.64l.136 4.141L4.44 39.35a4.5 4.5 0 00-3.26 5.45l14.87 59.16a4.5 4.5 0 004.36 3.39 4.571 4.571 0 001.09-.13l41.38-10.4a4.5 4.5 0 002.53-1.74l.941-.031 9.5 2.01 16.125 8.482a4.445 4.445 0 002.082.516 4.5 4.5 0 003.981-2.4l28.4-53.988a4.494 4.494 0 00-1.882-6.062zM83.389 27.025a1.388 1.388 0 01.877-.729 1.849 1.849 0 011.134.1 347.43 347.43 0 013.666 1.928l-5.724-1.212zM50.86 24.83a1.492 1.492 0 011.45-1.18 1.553 1.553 0 01.31.03L60 25.241l-9.291.3zm12.2 68.4a1.49 1.49 0 01-.91.68l-41.38 10.4a1.5 1.5 0 01-1.81-1.08L4.09 44.07a1.488 1.488 0 011.08-1.81l41.38-10.4a1.458 1.458 0 011.8 1.08l.29 1.17 13.24 52.61 1.35 5.38a1.488 1.488 0 01-.17 1.13zm8.13-1.77a1.505 1.505 0 01-1.04.47l-3.923.028a4.39 4.39 0 00-.087-.588l-1.19-4.75 1.91-.06-.57-17.3-5.66.19-.75-2.98 6.31-.21-1.07-32.69-13.41.44-.45-1.8a4.488 4.488 0 00-5.44-3.26l-21.735 5.463-.115-3.493a1.461 1.461 0 01.4-1.07 1.505 1.505 0 011.04-.47l42.64-1.4h.05a1.5 1.5 0 011.49 1.44l.11 3.48 1.11 33.67.1 3.09.58 17.82.1 2.91a1.5 1.5 0 01-.4 1.07zm12.22.01l-.53 2.49a1.5 1.5 0 01-1.77 1.15l-7.71-1.632a4.467 4.467 0 001.19-3.188l-.07-2.17 4.68.99 3.59-16.93-8.86-1.88-.1-3.09 9.58 2.03 6.78-32-17.47-3.7-.14-4.22a4.491 4.491 0 00-.321-1.486l22.1 4.676a1.493 1.493 0 011.15 1.77l-.69 3.27-7.039 33.26-.65 3.05-3.72 17.6zm40.375-43.2l-28.4 53.989a1.5 1.5 0 01-2.012.625l-9.951-5.235a4.448 4.448 0 002.388-3.069l.35-1.67 7.01 3.69 8.06-15.32-11.34-5.97.65-3.05 12.09 6.36 15.23-28.95L97.58 39l.87-4.1a4.45 4.45 0 00.03-1.621l24.681 12.983a1.492 1.492 0 01.624 2.011z" />
      <path d="M9.541 46.82l35.355-8.893 7.983 31.736-35.354 8.893zM18.243 81.478l35.355-8.893 4.222 16.784-35.355 8.893z" />
    </svg>
  );
};

export default Icon;
