import { followingUser } from "@/lib/follow";
import { getUser } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserPageProps {
  params: {
    name: string;
    email: string;
    id: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUser(params.email, params.name, params.id);

  if (!user) {
    notFound();
  }

  const isFollowing = await followingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>Name: {user[0]?.name}</p>
      <p>Email: {user[0]?.email}</p>
      <p>ID: {user[0]?.id}</p>
      <p>Following: {`${isFollowing}`}</p>
      <Actions />
    </div>
  );
};

export default UserPage;
