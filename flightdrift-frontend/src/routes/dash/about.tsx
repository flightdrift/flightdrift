import type { JSX } from "react";
import { createFileRoute } from "@tanstack/react-router";

const About = (): JSX.Element => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis illum ipsa, laborum
      laudantium modi perspiciatis quo reiciendis rerum sequi voluptatum.
    </div>
  );
};

export const Route = createFileRoute("/dash/about")({
  component: About,
});
