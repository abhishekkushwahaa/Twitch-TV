import db from "../app/utils/db";

export const getRecommended = async () => {
  const users = await db.user.findMany({
    orderBy: {},
  });
  return users;
};
