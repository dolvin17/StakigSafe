import Link from "next/link";
import Image from "next/image";
import { Rkbutton } from "../rainbowkit/rkbutton";

export default function Navigation() {
  return (
    <>
      <div className=" px-2 flex bg-transparent backdrop-blur-sm flex-row gap-16 sm:w-1/2 mx-auto py-8">
        <Link href="/">
          <Image alt="sol" src="/fam23.png" width={150} height={50} />
        </Link>
        <div className="items-center">
          <Link href="/permitionsless">
            <div className="text-[#adff02] hover:scale-125  m-2 w-[200px] text-center border-[#adff02] rounded-xl border-2 border-double bg-black p-4 ">
              Home
            </div>
          </Link>
          <Link href="/portfolio">
            <div className="text-[#adff02] hover:scale-125  m-2 w-[200px] text-center border-[#adff02] rounded-xl border-2 border-double bg-black p-4 ">
              Portfolio
            </div>
          </Link>
          <Rkbutton />
        </div>
      </div>
    </>
  );
}
