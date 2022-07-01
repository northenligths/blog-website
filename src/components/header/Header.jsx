import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex-col">
      <div className="header flex items-center justify-between px-4 py-2 border md:justify-around border-none">
        <img alt="" src="assets/images/logo.png" className="logo h-10 w-44" />

        {showMenu ? (
          <section className="md:hidden px-3 py-4 flex flex-col gap-2 border">
            <GrClose className="m-auto py" onClick={toggleMenu} />
            <button className=" px-3 py-1 bg-blue-700 rounded-lg md:py-3 md:px-7 text-white font-bold shadow-sm ">
              Sign Up
            </button>
            <button className="px-2 mt-3 md:rounded-lg md:py-3 md:px-7 md:font-bold shadow-sm border border-blue-700 text-blue-700">
              Book a demo
            </button>
            <li className="list-none">Why Sales Blink</li>
            <li className="list-none">Pricing</li>
            <li className="list-none">Resources</li>
            <li className="list-none">Login</li>
          </section>
        ) : (
          <div className="buttons px-4 md:hidden" onClick={toggleMenu}>
            <AiOutlineMenu />
          </div>
        )}

        <div className="navLinks hidden md:flex items-center gap-14">
          <span className="">Why SalesBlink ?</span>
          <span className="">Pricing</span>
          <span className="">Resources</span>
          <span className="">Login</span>
        </div>

        <div className="hidden md:flex gap-3 ">
          <button className=" md:bg-blue-700 rounded-lg py-3 px-7 text-white font-bold shadow-sm ">
            Sign Up
          </button>
          <button className=" md:rounded-lg py-3 px-7 text-white font-bold shadow-sm border border-blue-700 text-blue-700">
            Book a demo
          </button>
        </div>
      </div>

      <span className="flex items-center justify-center pt-28 text-3xl font-bold">
        SalesBlink Blog
      </span>
      <p className="text-black flex items-center justify-center py-4">
        Sales,Cold Emails and everything in between...
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          <MdCall />
          <span className="text-blue-700 font-bold">Cold Call</span>
        </div>
        <div className="flex items-center gap-1">
          <MdCall />
          <span className="text-blue-700 font-bold">Cold Call</span>
        </div>
        <div className="flex items-center gap-1">
          <MdCall />
          <span className="text-blue-700 font-bold">Cold Call</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
