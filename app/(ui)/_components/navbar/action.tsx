import { Button } from "@/components/ui/button";
import { TicketPlus, Inbox, BellDot, Tv } from "lucide-react";
import Profile from "./profile";
import Link from "next/link";

const Action = () => {
  return (
    <div className="flex items-center justify-between gap-3 cursor-pointer">
      <Inbox className="h-5 w-5 text-muted-foreground hidden md:block" />
      <BellDot className="h-5 w-5 text-muted-foreground hidden md:block" />
      <Button
        className="h-8 md:h-8 md:w-[110px] flex rounded-sm gap-2 items-center"
        variant={"outline"}
      >
        <TicketPlus className="w-4 h-4" />
        <span className="ad-free text-xs hidden md:block">Ad-Free</span>
      </Button>
      <Profile />
    </div>
  );
};

export default Action;
