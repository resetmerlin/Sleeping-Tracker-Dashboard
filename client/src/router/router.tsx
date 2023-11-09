import { createBrowserRouter } from "react-router-dom";
import { HomeController } from "../MVC/controller";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeController />,
  },
]);

export default router;
