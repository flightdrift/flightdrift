/*
 * Author: Jamius Siam
 * Since: 28/05/2026
 */
import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/header/header.tsx";
import Sidebar from "@/components/sidebar/sidebar.tsx";
import type { JSX } from "react";

const DashboardLayout = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3.5 p-4 w-full h-screen">
      <Header />
      <div className="flex-1 flex gap-3">
        <Sidebar />
        <main className="bg-white flex-1 drop-shadow-md drop-shadow-black/2 rounded-lg p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/dash")({
  component: DashboardLayout,
});
