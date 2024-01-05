import React, { useState } from "react";
import { MenuSvg } from "./MenuSvg";
import CloseMenuSvg from "./CloseMenuSvg";
import Menu from "./Menu";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center text-4xl w-4/5 mt-5 mb-2 px-5">
        <div className="w-5">
          {!menuState ? (
            <MenuSvg onClick={() => setMenuState(true)}></MenuSvg>
          ) : (
            <CloseMenuSvg onClick={() => setMenuState(false)}></CloseMenuSvg>
          )}
        </div>
        <div className="font-bold">
          <span>Word</span>
          <span className="text-gray-400">less+</span>
        </div>
        <div></div>
      </div>
      <hr className="w-4/5 opacity-20" />
      {menuState && (
        <div>
          <Menu></Menu>
        </div>
      )}
    </>
  );
};

export default Navbar;
