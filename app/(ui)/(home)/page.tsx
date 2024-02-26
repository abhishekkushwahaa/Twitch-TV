import { getServerSession } from "next-auth";
import { auhtOptions } from "../../utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(auhtOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <h1 className="text-2xl text-yellow-600 font-medium">
      Hello from Home Page
    </h1>
  );
  {
    session ? <h1>Home Page</h1> : <h1>HaHa</h1>;
  }
}
