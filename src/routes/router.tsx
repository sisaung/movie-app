import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import HomePage from "../pages/home/HomePage";
import Category from "../pages/category/Category";
import DetailPage from "../pages/detail/DetailPage";
import CastPage from "../pages/cast/CastPage";
import SearchPage from "../pages/Search/SearchPage";
import ExplorePage from "../pages/explore/ExplorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "explore/:mediaType",

        children: [
          {
            index: true,
            element: <ExplorePage />,
          },
          {
            path: ":exploreItem",
            element: <ExplorePage />,
          },
        ],
      },
      {
        path: "category/animation",
        element: <Category />,
      },
      {
        path: ":mediaType/:id",
        element: <DetailPage />,
      },
      {
        path: ":mediaType/:id/cast",
        element: <CastPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
