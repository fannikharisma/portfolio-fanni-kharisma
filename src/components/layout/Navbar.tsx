import { useState } from "react";
// import { SlArrowDown } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { PiChartDonutFill } from "react-icons/pi";

import { Link } from "react-router-dom";

const styles = {
  link: "flex items-center hover:bg-white hover:text-slate-800 px-2 py-1 rounded-md transition-colors duration-700",
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // const [isSubMenuOpen, setSubMenu] = useState(false);
  // const toggleSubMenu = () => {
  //   setSubMenu(!isSubMenuOpen);
  // };
  return (
    <nav className="bg-sky-950 p-3 text-white shadow-sky-200 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center mx-auto container px-1">
        <button className="flex items-center gap-2">
          <PiChartDonutFill size={20} /> Fanni Kharisma
        </button>
        {/* navbar for large screens */}
        <ul className="md:flex space-x-8 hidden">
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutMe" className={styles.link}>
              About Me
            </Link>
          </li>
          {/* <li className="relative group">
            <button className=" flex items-center gap-2  hover:bg-white hover:text-slate-800 px-2 py-1 rounded-md transition-colors duration-700 ">
              <span>My Projects</span>
              <SlArrowDown size={12} className=" transition-transform duration-300 group-hover:rotate-180 " />
            </button>

            <div className=" absolute top-full left-0 mt-3 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300  bg-sky-800 rounded-lg shadow-lg p-2 z-50 ">
              <a href="#business-analysis" className={`${styles.link} block`}>
                Business Analysis
              </a>

              <a href="#data-analysis" className={`${styles.link} block`}>
                Data Analysis
              </a>

              <a href="#ai-ml" className={`${styles.link} block`}>
                AI / ML
              </a>

              <a href="#web-apps" className={`${styles.link} block`}>
                Web / Apps
              </a>
            </div>
          </li> */}

          <li>
            <a href="#foot" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
        <div className="cursor-pointer md:hidden">{isMenuOpen ? <RiCloseLargeFill size={20} onClick={toggleMenu} /> : <GiHamburgerMenu size={20} onClick={toggleMenu} />}</div>
      </div>
      {isMenuOpen && (
        <ul className="flex space-y-6 flex-col mt-4 text-center md:hidden">
          <li>
            <Link to="/" className={`${styles.link} block`} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutMe" className={`${styles.link} block`} onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          {/* <li>
            <button onClick={toggleSubMenu} className=" w-full flex items-center justify-between px-2 py-1 rounded-md ">
              <span>My Projects</span> <SlArrowDown size={14} className={` transition-transform duration-300 ${isSubMenuOpen ? "rotate-180" : ""} `} />
            </button>

            <div className={` overflow-hidden transition-all duration-300 ${isSubMenuOpen ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0"} `}>
              <div className="flex flex-col gap-2 pl-4">
                <Link to="/projects" className={styles.link} onClick={toggleMenu}>
                  Business Analysis
                </Link>

                <Link to="/projects" className={styles.link} onClick={toggleMenu}>
                  Data Analysis
                </Link>

                <Link to="/projects" className={styles.link} onClick={toggleMenu}>
                  AI / ML
                </Link>

                <Link to="/projects" className={styles.link} onClick={toggleMenu}>
                  Web / Apps
                </Link>
              </div>
            </div>
          </li> */}
          <li>
            <a href="#foot" className={`${styles.link} block`} onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
