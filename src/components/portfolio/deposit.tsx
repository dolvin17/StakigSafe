import Link from 'next/link'

export default function Deposit() {
	return (
		<div className="bg-black m-1 p-4 sm:mx-auto sm:w-1/2 py-8">
      <div className=" text-white flex flex-row justify-between">
        <div>
          <div className="text-3xl font-black ">$1260</div>
          <div className="bg-[#adff02] p-1 rounded-sm text-xs text-black font-black ">
            +$33.38 (10.4%)
          </div>
        </div>
      </div>
      <Link href="/">
        <div className="bg-[#adff02] font-black text-xl p-4 mt-8 rounded-lg text-center hover:bg-lime-200 hover:text-black">
          Deposit {"&"} Stake
        </div>
      </Link>
    </div>
	)
}