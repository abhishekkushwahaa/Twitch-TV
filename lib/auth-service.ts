import db from "../app/utils/db";

export const getSelf = async (name: string, email: string) => {
  const user = await db.user.findUnique({
    where: { name: name, email: email },
  });

  if (!user) {
    throw new Error("Not found user!");
  }

  return user;
};
