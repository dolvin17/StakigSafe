import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div className=" px-2 flex bg-transparent backdrop-blur-sm flex-row gap-16 sm:w-1/2 mx-auto py-8">
        <Link href="/">
          <div className="text-[#adff02] w-[100px] text-center border-[#adff02] rounded-xl border-2 border-double bg-black p-4">
            Home
          </div>
        </Link>
        <Link href="/portfolio">
          <div className="text-[#adff02]  w-[100px] text-center border-[#adff02] rounded-xl border-2 border-double bg-black p-4 ">
            Portfolio
          </div>
        </Link>
      </div>
    </>
  );
}
