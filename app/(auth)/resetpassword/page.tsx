import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
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
              Reset Password!
            </h1>

            <div className="mt-5">
              <label htmlFor="email">Email/Username</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-md mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded-md mt-1"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mt-6">
              <Button className="w-full font-medium text-md">Reset</Button>
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
};
export default page;
