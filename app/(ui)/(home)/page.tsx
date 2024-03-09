import { getServerSession } from "next-auth";
import { auhtOptions } from "../../utils/auth";
import { redirect } from "next/navigation";
import Video from "@/components/video";

export default async function Home() {
  const session = await getServerSession(auhtOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="absolute p-1 sm:p-5">
      <p className="text-xl font-medium">
        Welcome to the
        <span className="text-purple-400"> Twitch-TV</span>
      </p>
      <Video />
      <p className="text-xl font-medium">
        Watch
        <span className="text-purple-400"> Live Streaming</span>
      </p>
    </div>
  );
}
