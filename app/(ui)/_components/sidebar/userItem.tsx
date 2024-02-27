"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/toggleSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";
import { LiveBadge } from "@/components/live-badge";

interface UserItemProps {
  name: string;
  email: string;
  image: string;
  islive?: boolean;
}

const UserItem = ({ name, email, image, islive }: UserItemProps) => {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);
  const href = `/${name}`;
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive ? "bg-primary-foreground" : "hover:bg-primary-foreground"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-2",
            collapsed && "justify-center"
          )}
        >
          <UserAvatar image={image} name={name} isLive={islive}></UserAvatar>
          {collapsed ? "" : <p className="text-sm font-medium">{name}</p>}
          {!collapsed && islive && <LiveBadge className="" />}
        </div>
      </Link>
    </Button>
  );
};
export default UserItem;

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
