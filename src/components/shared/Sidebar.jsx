import React from "react";
import {
  RiHome3Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleLine,
} from "react-icons/ri";

function Sidebar(props) {

    const{showMenu} = props;

  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w- 28 h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-xl text-gray-300 uppercase font-bold text-center my-4">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 block rounded-xl text-white"
            >
              <RiHome3Line className="text-lg text-center" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-lg text-center" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-lg text-center" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-lg text-center" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-lg text-center" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-lg text-center" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 block rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleLine className="text-lg text-center" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
