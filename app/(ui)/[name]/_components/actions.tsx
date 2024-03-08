"use client";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userID: string;
}

export const Actions = ({ isFollowing, userID }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow(userID, "")
        .then((data) =>
          toast.success(`You are following ${data.following.email}`)
        )
        .catch(() => {
          toast.error("Something went wrong!");
        });
    });
  };
  return (
    <Button disabled={isPending} onClick={onClick} variant="default">
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
