"use server";

export const onFollow = async (id: string, email: string) => {
  try {
    console.log("onFollow", id);
  } catch (error) {
    throw new Error("Internal Error");
  }
};
