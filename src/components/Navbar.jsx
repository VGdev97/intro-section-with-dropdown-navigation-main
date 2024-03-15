import { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-menu.svg";
import closeMenu from "../assets/icon-close-menu.svg";
import iconUp from "../assets/icon-arrow-up.svg";
import iconDown from "../assets/icon-arrow-down.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const handleDropdown = (id) => {
    setDropdown((prevDropdown) => ({
      ...prevDropdown,
      [id]: !prevDropdown[id],
    }));
  };
  return (
    <header className="flex justify-between items-center min-h-[100px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="hidden lg:flex items-center gap-[40px]">
          {navLinks.map((link, index) => (
            <div key={link.id} className="relative">
              <div>
                <li
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                  onClick={() => handleDropdown(link.id)}
                >
                  {link.name}
                  {dropdown[link.id] && link.subLinks && (
                    <img src={iconUp} alt="icon" />
                  )}
                  {!dropdown[link.id] && link.subLinks && (
                    <img src={iconDown} alt="icon" />
                  )}
                </li>
                {dropdown[link.id] && (
                  <ul
                    className={`absolute right-2 bg-white py-4 px-5 space-y-2 w-[140px] rounded-lg shadow-md mt-3 ${
                      index >= 1 && "left-[-10px]"
                    }`}
                  >
                    {link.subLinks.map((subLink, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer flex items-center gap-2`}
                      >
                        {subLink.icon && (
                          <img src={subLink.icon} alt={subLink.name} />
                        )}
                        <p className="text-[15px]">{subLink.name}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </ul>
      </nav>

      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="text-black bg-white flex flex-col absolute right-0 top-0 h-screen w-[60%] p-8 gap-8 z-50 ">
            <img
              src={closeMenu}
              alt="close menu"
              className="w-[25px] ml-auto cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
            <ul className="flex flex-col items-start gap-[20px]">
              {navLinks.map((link) => (
                <li className="flex items-center gap-2 cursor-pointer">
                  {link.name}
                  <img src={link.icon} alt="" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-[20px]">
              <a href="/">Login</a>
              <button className="button w-full">Register</button>
            </div>
          </div>
        </div>
      )}

      <img
        src={hamburger}
        alt="hamburger menu"
        className={`flex lg:hidden cursor-pointer ${
          mobileMenu ? "hidden" : "flex"
        }`}
        onClick={() => setMobileMenu(!mobileMenu)}
      />
      <div className="hidden lg:flex items-center gap-[40px]">
        <a href="/">Login</a>
        <button className="button">Register</button>
      </div>
    </header>
  );
};

export default Navbar;
