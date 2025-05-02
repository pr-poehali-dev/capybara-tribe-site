import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CapybaraTribe from "./pages/CapybaraTribe"; // Добавляем новую страницу
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CapybaraTribe />, // Ставим племя капибар как главную страницу
  },
  {
    path: "/original",
    element: <Index />, // Сохраняем старую главную страницу на другом маршруте
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
