import { followUser, unfollowUser } from "./../lib/follow";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string, email: string) => {
  try {
    const followedUser = (await followUser(id, email)) as {
      following: { email: string };
    };
    revalidatePath("/");
    if (followedUser) {
      revalidatePath(`/${followedUser.following.email}`);
    }
    return followedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};

export const onUnfollow = async (id: string, email: string) => {
  try {
    const unfollowedUser = await unfollowUser(id, email);
    revalidatePath("/");

    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.email}`);
    }

    return unfollowedUser;
  } catch (err) {
    throw new Error("Internal Error");
  }
};
