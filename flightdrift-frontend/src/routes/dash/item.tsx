/*
* Author: Jamius Siam
* Since: 29/05/2026
*/

import type { JSX } from "react";
import { createFileRoute } from "@tanstack/react-router";

const Item = (): JSX.Element => {
 return (
  <div></div>
 );
};

export const Route = createFileRoute("/dash/item")({
  component: Item,
});