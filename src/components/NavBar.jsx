import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <nav className="relative p-5 md:px-10 md:py-5 flex justify-between items-center z-20">
      <h1 className="text-xl text-white font-bold">WanderWay</h1>
      <IoMdMenu
        className="text-white text-3xl cursor-pointer sm:hidden"
        onClick={toggleNavBar}
      />
      <div
        className={`fixed top-0 right-0 w-[200px] h-screen bg-gray-100 transition-transform duration-300 ease-in-out transform ${
          navBar ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-30`}
      >
        <IoMdClose
          className="text-2xl cursor-pointer mt-5 ml-3"
          onClick={toggleNavBar}
        />
        <ul className="flex flex-col justify-center items-start mt-5">
          <a
            href="#"
            className="hover:bg-gray-200 hover:text-orange-500 w-full px-5 py-3"
          >
            <li className="text-lg font-medium">Home</li>
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 hover:text-orange-500 w-full px-5 py-3"
          >
            <li className="text-lg font-medium">Services</li>
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 hover:text-orange-500 w-full px-5 py-3"
          >
            <li className="text-lg font-medium">Tours</li>
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 hover:text-orange-500 w-full px-5 py-3"
          >
            <li className="text-lg font-medium">Contact</li>
          </a>
        </ul>
      </div>
      <ul className="hidden sm:flex justify-center items-center gap-12 text-white">
        <a href="#">
          <li className="text-lg font-medium hover:text-orange-500">Home</li>
        </a>
        <a href="#">
          <li className="text-lg font-medium hover:text-orange-500">
            Services
          </li>
        </a>
        <a href="#">
          <li className="text-lg font-medium hover:text-orange-500">Tours</li>
        </a>
        <a href="#">
          <li className="text-lg font-medium hover:text-orange-500">Contact</li>
        </a>
      </ul>
      <span className="hidden md:block"></span>
    </nav>
  );
};

export default NavBar;
