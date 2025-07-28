import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/logo.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "INICIO",
    "MÚSICA",
    "VIDEOS",
    "CONCIERTOS",
    "GALERÍA",
    "INTEGRANTES",
  ];

  // Cierra el menú si se cambia el tamaño a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="w-full">
        <div className="bg-gradient-to-l from-black to-gray-600 w-full">
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto sm:h-12 lg:h-14 object-contain transition-all duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-12 text-base lg:text-xl font-bold text-white">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-[rgb(203,213,225)] font-semibold hover:text-[rgb(255,70,70)] transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-blue-400 focus:outline-none"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden w-full bg-gradient-to-b from-red-800 via-black to-black backdrop-blur-sm px-4 pt-2 pb-4 space-y-1 shadow max-h-screen overflow-y-auto
"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-[rgb(203,213,225)] font-semibold hover:text-[rgb(255,70,70)] transition-all duration-300"   //text-[rgb(203,213,225)] font-semibold hover:text-[rgb(255,70,70)] transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </Transition>
    </nav>
  );
};
