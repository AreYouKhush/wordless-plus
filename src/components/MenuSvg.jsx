import * as React from "react";
import {motion} from 'framer-motion';

export const MenuSvg = (props) => {
  return (
    <motion.svg
    //   width={240}
    //   height={200}
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        d="M10 10H230"
        stroke="white"
        strokeWidth={20}
        strokeLinecap="round"
        initial={{
            x: [300, 54, 1]
        }}
      />
      <motion.path
        d="M10 100H230"
        stroke="white"
        strokeWidth={20}
        strokeLinecap="round"
        initial={{
            opacity: 0
        }}
      />
      <motion.path
        d="M10 190H230"
        stroke="white"
        strokeWidth={20}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};
