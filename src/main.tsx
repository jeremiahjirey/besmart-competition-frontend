import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import "./index.css";
import App from "./App.tsx";
import AuthenticationPage from "./pages/AuthenticationPage.tsx";
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage.tsx";
import ParticipantDashboardPage from "./pages/Participans/ParticipantDashboardPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/auth", element: <AuthenticationPage /> },
  { path: "/dashboard", element: <ParticipantDashboardPage /> },
  { path: "/admin/dashboard", element: <AdminDashboardPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" richColors />
  </StrictMode>,
);
