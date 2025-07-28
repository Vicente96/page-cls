import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Integrantes",
    "Musica",
    "Videos",
    "Conciertos",
    "Galería",
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className=" px-0 sm:px-6 lg:px-0">
        <div className="bg-gradient-to-l from-black/80 to-gray-600/60">
          <div className="flex justify-between items-center h-20 px-6">
            {/* Logo */}
            <div className="flex-shrink-0 text-xl font-bold text-white hover:text-blue-400 hover:text-2xl transition-all duration-300">
              MyBrand
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12 text-xl font-bold text-white">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 font-semibold hover:text-blue-400 hover:text-2xl transition-all duration-300"
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
                  className="h-6 w-6"
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
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1 shadow"
            ref={ref}
          >
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // opcional: cerrar al hacer clic
                className="block text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
                 
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
