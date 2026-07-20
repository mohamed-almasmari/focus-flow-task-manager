import React from "react";
import { SidebarData } from "./SidebarData.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { setOpenSidebar } from "../../redux/slices/authSlice";
import { MdOutlineAddTask, MdSettings } from "react-icons/md";
import clsx from "clsx";
const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[1];
  const sidebarLinks = user?.isAdmin ? SidebarData : SidebarData.slice(0, 5);

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg:-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-blue-700 text-neutral-100" : "",
        )}
      >
        {el.icon}
        <span className="hover:text-[#ebebef]">{el.label}</span>
      </Link>
    );
  };
  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };
  return (
    <div className="w-64 h-screen flex flex-col justify-between p-5 border-r border-gray-200">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">TaskMe</span>
      </h1>
      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>
      <div className="pt-4 border-t border-gray-100">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800 dark:text-white">
          <MdSettings />
          <span>Setting</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
