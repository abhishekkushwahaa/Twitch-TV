import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div className={cn("text-rose-500 text-center", className)}>
      <p className="text-[10px]">Live</p>
    </div>
  );
};
