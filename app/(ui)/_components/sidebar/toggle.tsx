"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { useSidebar } from "@/store/toggleSidebar";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";

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

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};
