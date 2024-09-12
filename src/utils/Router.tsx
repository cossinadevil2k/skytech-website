import Default from "@pages/Default";
import Index from "@pages/Index";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

const Routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Index />} />
    <Route
      path="*"
      element={<Default />}
      errorElement={<Navigate to={"/"} />}
    />
  </>,
);

const Router = createBrowserRouter(Routes);
export default Router;
