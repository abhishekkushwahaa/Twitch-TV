import db from "../app/utils/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async (id: string, email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  let userEmail;
  try {
    const self = await getSelf(id, email);
    userEmail = self.email;
  } catch {
    userEmail = null;
  }

  let users = [];
  if (userEmail) {
    users = await db.user.findMany({
      where: {
        NOT: {
          email: userEmail,
        },
      },
      orderBy: {},
    });
  } else {
    users = await db.user.findMany({
      orderBy: {},
    });
  }
  return users;
};
