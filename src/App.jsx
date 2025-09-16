import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import ShoppingCard from "./pages/ShoppingCard";
import Profile from "./pages/Profile";
import Servise from "./pages/Servise";
import About from "./pages/About";

export default function App() {
  const { user } = useSelector((state) => state.auth);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} replace /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/shoppingCard",
      element: user ? <ShoppingCard /> : <Navigate to={"/login"} replace />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/servise",
      element: <Servise />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
