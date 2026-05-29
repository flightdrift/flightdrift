/*
 * Author: Jamius Siam
 * Since: 06/05/2026
 */
import { createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";

// TODO: Implement a default login page later
const Index = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      <img src="/flightdrift_logo_light.svg" alt="Flightdrift Logo" className="h-7" />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
