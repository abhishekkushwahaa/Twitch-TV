import db from "../app/utils/db";

export const getSelf = async (id: string, email: string) => {
  const user = await db.user.findMany({
    where: { id: id, email: email },
  });

  if (!user) {
    throw new Error("Not found user!");
  }

  return user;
};
