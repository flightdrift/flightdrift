/*
 * Author: Jamius Siam
 * Since: 28/05/2026
 */
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import type { ComponentProps, JSX } from "react";

type NavMenuItemProps = ComponentProps<typeof Button> & {
  active?: boolean;
};

const NavMenuItem = ({
  active = false,
  children,
  className,
  variant = "ghost",
  ...props
}: NavMenuItemProps): JSX.Element => {
  return (
    <Button
      type="button"
      variant={variant}
      className={cn(
        "h-7 w-full justify-start gap-2 rounded-[5px] px-2 py-4 text-[13px] font-normal leading-none text-[#616161]",
        className,
        active && "bg-nav-active hover:bg-nav-active",
      )}
      {...props}>
      {children}
    </Button>
  );
};

export default NavMenuItem;
