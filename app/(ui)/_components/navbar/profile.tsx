"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";

interface ProfileProps {
  data: User;
}

export default function Profile({ data }: ProfileProps) {
  return (
    <div className="flex items-center">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={data && data.image ? data.image : ""}
            alt="Avatar"
            size="sm"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-8 gap-2">
            <p className="font-medium text-md">abc@gmail.com</p>
          </DropdownItem>
          <DropdownItem key="settings" className="text-sm">
            My Settings
          </DropdownItem>
          <DropdownItem key="help_and_feedback" className="text-sm">
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            key="logout"
            className="text-sm text-red-600"
            onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
