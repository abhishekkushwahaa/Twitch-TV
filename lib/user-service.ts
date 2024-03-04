import db from "../app/utils/db";

export async function getUser(email: string, name: string, id: string) {
  return await db.user.findMany({
    where: {
      name,
      email,
      id,
    },
  });
}
