"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { useSidebar } from "@/store/toggleSidebar";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div>
          <Button className="hidden lg:block p-2 mt-1 ml-6" variant="ghost">
            <Hint label={label} side="right" asChild>
              <ChevronLast size={20} onClick={onExpand} />
            </Hint>
          </Button>
        </div>
      )}
      {!collapsed && (
        <div>
          <Button className="h-auto p-2 ml-[200px] mt-2" variant="ghost">
            <Hint label={label} side="right" asChild>
              <ChevronFirst size={20} onClick={onCollapse} />
            </Hint>
          </Button>
        </div>
      )}
    </>
  );
};
