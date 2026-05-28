/*
 * Author: Jamius Siam
 * Since: 29/05/2026
 */
import { Button } from "@/components/ui/button.tsx";
import { ChevronDown } from "lucide-react";
import type { JSX } from "react";

const OrganizationSelector = (): JSX.Element => {
  return (
    <Button
      type="button"
      variant="outline"
      className={
        "px-2 py-4 h-6 flex-1 justify-between rounded-[5px] text-[13px] font-normal " +
        "text-foreground hover:bg-transparent border-muted-foreground/35"
      }>
      <span className="flex items-center gap-[7px]">
        <img
          src="/organization_icon.png"
          alt="Sable Order"
          className="size-[15px] rounded-[3px] object-cover"
        />
        <span className="text-[13px] font-normal leading-none text-foreground">Sable Order</span>
      </span>
      <ChevronDown size={15} strokeWidth={1.8} className="text-foreground" />
    </Button>
  );
};

export default OrganizationSelector;
