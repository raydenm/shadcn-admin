import { createBrowserRouter } from "react-router-dom";
import GeneralError from "@/features/error/pages/general-error";
import NotFoundError from "@/features/error/pages/not-found-error";
import MaintenanceError from "@/features/error/pages/maintenance-error";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    lazy: async () => ({
      Component: (await import("@/features/auth/pages/sign-in")).default,
    }),
  },
  {
    path: "/sign-up",
    lazy: async () => ({
      Component: (await import("@/features/auth/pages/sign-up")).default,
    }),
  },
  {
    path: "/forgot-password",
    lazy: async () => ({
      Component: (await import("@/features/auth/pages/forgot-password")).default,
    }),
  },

  // Error routes
  { path: "/500", Component: GeneralError },
  { path: "/404", Component: NotFoundError },
  { path: "/503", Component: MaintenanceError },

  // Fallback 404 route
  { path: "*", Component: NotFoundError },
]);

export default router;
