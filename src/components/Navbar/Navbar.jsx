import React, { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="bg-white fixed top-0 right-0 left-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center ">
        <a href="/" className="text-3xl font-bold">
          {" "}
          Lo<span className="text-orange-500 uppercase">g</span>o{" "}
        </a>
        {/* danhmuc desktop*/}
        <ul className="md:flex items-center gap-x-16 hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wider text-orange-500"
                  : "font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              }
            >
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allproduct"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wider text-orange-500"
                  : "font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              }
            >
              Sản Phẩm
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wider text-orange-500"
                  : "font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              }
            >
              Liên Hệ
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-x-5">
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search.."
              autoComplete="off"
              className=" flex-1 h-[5vh] px-3 focus:outline-none"
            />

            <button className="flex items-center justify-center bg-gradient-to-b from-red-400 to-orange-500 text-white w-10 h-10 rounded-full text-xl mt-[3px] mr-[2px]">
              <IoSearchSharp />
            </button>
          </div>
          <a
            href=""
            className="flex items-center justify-center text-2xl text-zinc-800 "
          >
            <IoHeartSharp />
          </a>
          <Link
            to="/cart"
            className="flex items-center justify-center text-2xl text-zinc-800"
          >
            <RiShoppingBag4Fill />
          </Link>
          <a
            href=""
            className="flex items-center justify-center text-2xl text-zinc-800 "
          >
            <MdAccountCircle />
          </a>

          {/* danhmucmobile */}
          <a
            href=""
            className="text-zinc-800 text-3xl md:hidden "
            onClick={toggleMenu}
          >
            <TbMenu2 />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
