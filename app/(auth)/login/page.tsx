"use client";
import { auhtOptions } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function page() {
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitting form...");
  };
  // const session = await getServerSession(auhtOptions);
  // if (session) {
  //   return redirect("/");
  // }
  return (
    <>
      <div className="login">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
            <div className="flex justify-center">
              <Image
                src="/images/logo.svg"
                width={40}
                height={40}
                alt="logo"
              ></Image>
            </div>
            <h1 className="text-2xl font-medium mt-4 flex justify-center items-center">
              Welcome Back!
            </h1>
            <form>
              <div className="mt-5">
                <label htmlFor="email">Email/Username</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md mt-1"
                  placeholder="Enter your email"
                />
              </div>
            </form>
            <div className="mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded-md mt-1"
                placeholder="Enter your password"
              />
            </div>
            <div className="mt-1">
              <Link
                href="/resetpassword"
                className="flex text-xs justify-end mr-1"
              >
                Forget password?
              </Link>
            </div>
            <div className="mt-5">
              <Button className="w-full font-medium text-md">Login</Button>
              <p className="flex justify-center items-center mt-2 text-sm">
                OR
              </p>
              <Button
                className="w-full font-medium text-md mt-3 border-2 border-gray-500 hover:border-gray-300"
                variant="secondary"
                onClick={() =>
                  signIn("github", { callbackUrl: `${window.location.origin}` })
                }
              >
                Login with Github <Github className="w-5 h-5 ml-3" />
              </Button>
            </div>
            <div className="mt-5 flex justify-center">
              <span className="text-lg">Don&apos;t have an account?</span>
              <Link href="/signup" className="text-lg ml-2 text-[#A172F7]">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
