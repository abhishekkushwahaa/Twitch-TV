"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/toggleSidebar";
import { useState, useEffect } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const [isClient, setIsClient] = useState(false);
  const { collapsed } = useSidebar((state) => state);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <aside
      className={cn(
        "fixed left-0 mt-0 w-60 h-full bg-muted border-r z-50 rounded-sm",
        collapsed && "w-16"
      )}
    >
      {children}
    </aside>
  );
};
export default Wrapper;
