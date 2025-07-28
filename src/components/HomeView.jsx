import React from "react";
import heroImage from "../assets/homeImg.png"; // ajusta la ruta según tu estructura

export const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 via-black to-black">
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 pt-24">
        <img
          src={heroImage}
          alt="Imagen principal"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};
