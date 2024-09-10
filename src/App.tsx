import MoveToTop from "@components/other/MoveToTop";
import NavBar from "@components/ui/NavBar";
import Router from "@utils/Router";
import React from "react";
import { RouterProvider } from "react-router-dom";
import CursorDotFollow from "./components/other/CursorDotFollow";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <CursorDotFollow />
      <MoveToTop />
      <div className="container mx-auto px-5">
        <RouterProvider router={Router} />
      </div>
    </>
  );
};

export default App;
