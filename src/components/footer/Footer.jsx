import React from "react";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer bg-[#202942]">
      <div className="md:flex items-center justify-center gap-20 pb-16">
        <div className="md:pb-14">
          <div className="pt-12 px-4 pb-6 md:pt-0">
            <img
              src="/assets/images/logo-light.png"
              alt=""
              className="w-44 h-10"
            />
            <p className="pt-5 text-lg text-gray-400 md:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            </p>
          </div>
          <div className="social pb-6">
            <span className="px-4 text-2xl text-white">Follow us on</span>
            <div className="facebook flex items-center gap-1 px-4 py-1">
              <ImFacebook className="text-xl text-gray-400" />{" "}
              <span className="text-gray-400">Facebook</span>
            </div>
            <div className="instagram flex items-center gap-1 px-4 py-1">
              <FiInstagram className="text-xl text-gray-400" />{" "}
              <span className="text-gray-400">Facebook</span>
            </div>
            <div className="twitter flex items-center gap-1 px-4 py-1">
              <FiTwitter className="text-xl text-gray-400" />{" "}
              <span className="text-gray-400">Facebook</span>
            </div>
            <div className="youtube flex items-center gap-1 px-4 py-1">
              <ImYoutube className="text-xl text-gray-400" />{" "}
              <span className="text-gray-400">Facebook</span>
            </div>
          </div>
        </div>
        <div>
          <div className="company pb-6 md:pt-28">
            <span className="px-4 text-2xl text-white">Company</span>
            <div className="flex items-center gap-1 px-4 pb-1 pt-4">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
          </div>

          <div className="tools pb-6">
            <span className="px-4 text-2xl text-white"> Free Tools</span>
            <div className="flex items-center gap-1 px-4 pb-1 pt-4">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
          </div>
        </div>

        <div className="solutions pb-6 md:pb-28">
          <span className="px-4 text-2xl text-white"> Solutions</span>
          <div className="flex items-center gap-1 px-4 pb-1 pt-4">
            <MdKeyboardArrowRight className="text-xl text-gray-400" />
            <span className="text-gray-400">lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-1 px-4 pb-1 pt-2">
            <MdKeyboardArrowRight className="text-xl text-gray-400" />
            <span className="text-gray-400">lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-1 px-4 pb-1 pt-2">
            <MdKeyboardArrowRight className="text-xl text-gray-400" />
            <span className="text-gray-400">lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-1 px-4 pb-1 pt-2">
            <MdKeyboardArrowRight className="text-xl text-gray-400" />
            <span className="text-gray-400">lorem Ipsum</span>
          </div>
        </div>
        <div>
          <div className="comparison pb-6 md:pt-28">
            <span className="px-4 text-2xl text-white"> Comparison</span>
            <div className="flex items-center gap-1 px-4 pb-1 pt-4">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
          </div>

          <div className="legal pb-6">
            <span className="px-4 text-2xl text-white"> Legal</span>
            <div className="flex items-center gap-1 px-4 pb-1 pt-4">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
            <div className="flex items-center gap-1 px-4 pb-1 pt-2">
              <MdKeyboardArrowRight className="text-xl text-gray-400" />
              <span className="text-gray-400">lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-400 border border-gray-400" />
      <div className="flex items-center justify-center gap-2 py-3">
        <RiCopyrightLine className="text-xl text-gray-400" />
        <span className="text-gray-400 text-xl">Future Blink Product</span>
      </div>
    </div>
  );
};

export default Footer;
