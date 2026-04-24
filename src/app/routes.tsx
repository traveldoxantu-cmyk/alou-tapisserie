import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: () => <div className="h-screen w-screen flex items-center justify-center bg-[#0a0a0a] text-white">404 - Page Non Trouvée</div>,
  },
]);
