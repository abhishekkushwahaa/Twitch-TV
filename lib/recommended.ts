import db from "../app/utils/db";

export const getRecommended = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const users = await db.user.findMany({
    orderBy: {},
  });
  return users;
};
