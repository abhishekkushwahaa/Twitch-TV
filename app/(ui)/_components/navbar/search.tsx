"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import qs from "query-string";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;
    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: encodeURIComponent(value) },
      },
      { skipEmptyString: true }
    );
    router.push(url);
  };
  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-38 sm:w-[400px] flex items-center"
    >
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className=" border-gray-700 bg-muted focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 h-8 text-xs rounded-sm "
      />
      {value && (
        <X
          className="absolute top-2.5 right-14 h-4 w-4 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button type="submit" size="sm" variant="secondary">
        <SearchIcon className="h-[16px] w-[16px] text-muted-foreground" />
      </Button>
    </form>
  );
};
export default Search;
