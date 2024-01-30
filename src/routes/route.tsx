import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/HomePage";
import Blogs from "../pages/blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
