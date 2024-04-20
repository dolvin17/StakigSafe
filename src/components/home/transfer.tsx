import { IoIosArrowDropdown } from "react-icons/io";
import Link from 'next/link';

export default function Transfer() {
  return (
    <div className="bg-black m-1 p-4 sm:mx-auto sm:w-1/2 py-8">
      <div className=" text-white flex flex-row justify-between">
        <div>
          <div className="flex flex-row gap-2 items-center">All accounts
		  <Link href="/">
		  <IoIosArrowDropdown />
		  </Link>
		  </div>
          <div className="text-3xl font-black ">$232</div>
        </div>
		<Link href="/">
        <div className="rounded-xl bg-white/10 flex items-center justify-center p-4 hover:bg-white hover:text-black">Add / Withdraw</div>
		</Link>
      </div>
		<Link href="/">
      <div className="bg-orange-500 p-4 mt-8 rounded-lg text-center hover:bg-white hover:text-black">
        Transfer
      </div>
		</Link>
    </div>
  );
}
