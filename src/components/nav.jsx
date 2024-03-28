import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navunder from "./navunder";
import Featurs from "../featurs";

function Nav() {
  useEffect(() => {
    const navunderdv = document.querySelector(".navunderdv");
    const verificationbtn = document.querySelector(".verificationbtn");
    const nav = document.querySelector(".nav");

    const navlogo = document.querySelector(".navlogo");
    const menu = document.querySelector(".menu");
    const menuclose = document.querySelector(".menuclose");
    const responcemenu = document.querySelector(".responcemenu");
    const responcemenuparent = document.querySelector(".responcemenuparent");

    menu.addEventListener("click", (e) => {
      responcemenuparent.style.display = "block";
      menu.style.display = "none";
      menuclose.style.display = "block";
    });
    menuclose.addEventListener("click", (e)=>{
      menuclose.style.display = "none";
      menu.style.display = "block";
      responcemenuparent.style.display = "none";
    })

    verificationbtn.addEventListener("mousemove", (e)=>{
      navunderdv.style.display = "block"
      navunderdv.style.top = "140%"
      navunderdv.style.left = "37%"
 })
 navunderdv.addEventListener("mouseleave", (e)=>{
      navunderdv.style.display = "none"
 })
 nav.addEventListener("mouseleave", (e)=>{
      navunderdv.style.display = "none"
 })
  });

  return (
    <div className="top nav z-50 relative w-[100vw] sm:min-h-[10vh] py-3 border-b sm:bg-white border-zinc-600 flex items-center justify-between px-8">
      <div>
{/*   ====================================================================================
                                THIS IS LOGO OF NAV
=======================================================================================  */}
        <img
          src="https://raw.githubusercontent.com/Abhay7111/gonukkad/main/public/BIZ%20GROWTH%20LOGO.png"
          className="sm:h-16 navlogo"
        />
      </div>
      <div className="responcemenuparent">
      <div className="flex responcemenu gap-10 items-center">
        <ul className="responcemenuul sm:flex sm:gap-8 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../About">About</Link>
          </li>
          <li>
            <Link to="../Our-Services">Our Services</Link>
          </li>
          <li className="verificationbtn">
            <Link to="../Verification">Business Verification</Link>
          </li>
          <li>
            <Link to="../Blogs">Blogs</Link>
          </li>
        </ul>
        <p className="contactbtnparent items-center flex justify-center">
          <Link className="px-4 py-2 hover:bg-[#01335E] font-semibold bg-[#195180] text-zinc-200 hover:text-zinc-white rounded-lg contactbtn" to="../contact">Contact</Link>
        </p>
        <div className=" transition-all absolute top-[30vh] left-[12%] navunderdv hidden">
          <Navunder />
        </div>
      </div>
      </div>
      <div className="menubtn sm:hidden cursor-pointer">
        <i class="ri-menu-3-line menu"></i>
        <i class="ri-close-large-line menuclose hidden"></i>
      </div>
    </div>
  );
}

export default Nav;
