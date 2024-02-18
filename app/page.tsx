import { getServerSession } from "next-auth";
import { auhtOptions } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(auhtOptions);
  return (
    <h1 className="text-2xl text-yellow-600 font-medium">Hello from Home</h1>
  );
  {
    session ? <h1>Home Page</h1> : <h1>Heehhee</h1>;
  }
}
