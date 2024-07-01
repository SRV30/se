import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../images/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Logo from "./logo";
import "./NavBar.css"

const options = {
  burgerColorHover: "#0000FF",
  logo,
  logoWidth: "30vmax",
  navColor1: "white",
  logoHoverSize: "20px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  nav1Content: () => (
    <>
      <Logo />
      <div className="flex items-center gap-4">
        <div className="text-lg cursor-pointer">
          <FaUserAlt />
        </div>
        <div className="text-lg cursor-pointer">
          <PiShoppingCartSimpleFill />
        </div>
      </div>
    </>
  ),
  nav3Content: () => (
    <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
      <input
        type="text"
        placeholder="search here..."
        className="w-full outline-none"
      />
      <div className="text-lg min-w-[50px] h-8 bg-red-600 items-center justify-center rounded-r-full text-white">
        <IoIosSearch />
      </div>
    </div>
  ),
};

const NavBar = () => {
  return (
    <div>
      <ReactNavbar {...options} className="menuBurger" />
    </div>
  );
};

export default NavBar;
