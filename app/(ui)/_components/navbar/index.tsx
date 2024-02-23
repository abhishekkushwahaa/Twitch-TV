"use client";
import Action from "./action";
import Logo from "./logo";
import Search from "./search";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-12 z-[49] bg-muted flex items-center justify-between shadow-sm px-2 lg:px-4">
        <Logo />
        <Search />
        <Action />
      </nav>
    </>
  );
};
