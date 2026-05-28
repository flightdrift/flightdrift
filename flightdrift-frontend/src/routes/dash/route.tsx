/*
 * Author: Jamius Siam
 * Since: 28/05/2026
 */
import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "@/components/sidebar/sidebar.tsx";
import type { JSX } from "react";

const DashboardLayout = (): JSX.Element => {
  return (
    <div className="flex gap-3 p-3 w-full h-screen">
      <Sidebar />
      <main className="bg-white flex-1 drop-shadow-md drop-shadow-black/2 rounded-lg p-4">
        <Outlet />
      </main>
    </div>
  );
};

export const Route = createFileRoute("/dash")({
  component: DashboardLayout,
});
