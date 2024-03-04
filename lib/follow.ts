import db from "../app/utils/db";
import { getSelf } from "@/lib/auth-service";

export async function followingUser(id: string, email: string) {
  const self = await getSelf(id, email);
  const otherUser = await db.user.findMany({
    where: { id, email },
  });

  if (!otherUser[0]) {
    throw new Error("User not found");
  }

  // if (otherUser[0].id === self[0].id) {
  //   throw new Error("You cannot follow yourself");
  // }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self[0].id,
      followingId: otherUser[0].id,
    },
  });
  return false;
}

export const followUser = async (id: string, email: string) => {
  const self = await getSelf(id, email);
  const otherUser = await db.user.findMany({
    where: { id, email },
  });

  if (!otherUser[0]) {
    throw new Error("User not found");
  }

  // if (otherUser[0].id === self[0].id) {
  //   throw new Error("You cannot follow yourself");
  // }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self[0].id,
      followingId: otherUser[0].id,
    },
  });

  if (existingFollow) {
    throw new Error("Already following");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self[0].id,
      followingId: otherUser[0].id,
      followerName: "",
      followingName: "",
    },
    include: {
      following: true,
      follower: true,
    },
  });
  return follow;
};