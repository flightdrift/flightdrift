/*
 * Author: Jamius Siam
 * Since: 06/05/2026
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import type { JSX } from "react";
import { Button } from "@/components/ui/button.tsx";

// TODO: Implement a default login page later
const Index = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      Flightdrift Login
      <Button>
        <Link to={"/dash/item"}>Dashboard</Link>
      </Button>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
