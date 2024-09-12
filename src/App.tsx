import MoveToTop from "@components/other/MoveToTop";
import SplashScreen from "@components/other/SplashScreen";
import Footer from "@components/ui/Footer";
import NavBar from "@components/ui/NavBar";
import Router from "@utils/Router";
import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import CursorDotFollow from "./components/other/CursorDotFollow";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <NavBar />
          <CursorDotFollow />
          <MoveToTop />
          <div className="container mx-auto px-5">
            <RouterProvider router={Router} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
