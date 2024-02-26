"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/toggleSidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed left-0 flex mt-0 w-60 h-full bg-muted border-r z-50",
        collapsed && "w-16"
      )}
    >
      {children}
    </aside>
  );
};
export default Wrapper;
