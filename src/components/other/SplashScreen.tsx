import Logo from "@assets/logo-white.png";
import React from "react";

const SplashScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-950 bg-opacity-20 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-60 w-60 animate-spin rounded-full border-b-4 border-white"></div>
        <img src={Logo} alt="Logo" className="animate-splash relative z-10" />
      </div>
    </div>
  );
};

export default SplashScreen;
