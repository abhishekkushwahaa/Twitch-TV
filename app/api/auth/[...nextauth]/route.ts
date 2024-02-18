import { auhtOptions } from "@/app/utils/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(auhtOptions);
export { handler as GET, handler as POST };
