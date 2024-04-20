import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation/navigation'
import Chart from '@/components/graphics/chart'
export default function Stake() {
	return (
		<>
		<Navigation />
		<div className="bg-black m-1 p-4 sm:mx-auto sm:w-1/2 py-8">
      <div className=" text-white flex flex-row justify-between">
        <div>
			<Link href="/stake">
          <div className="text-3xl font-black hover:text-black hover:bg-white ">STAKE</div>
				</Link>
				<Link href="/stake">
          <div className="bg-[#adff02] p-1 rounded-sm hover:text-[#adff02]s hover:bg-black hover:text-[#adff02] text-xs text-black font-black ">
            UNSTAKE
          </div>
		  </Link>

        </div>

      </div>
	  <label className="flex items-center mt-32 border-2 border-[#adff02] bg-[#adff02]/30 backdrop-blur-sm rounded-xl">
        <input
          className="flex-grow w-full p-4 border-2 text-black bg-transparent border-black outline-none rounded-xl"
          placeholder="123 AAVE"
          inputMode="decimal"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          type="text"
		  />
        <button
          className="flex flex-row hover:bg-white justify-center  gap-2 p-5 py-1 font-semibold text-black  rounded-lg disabled:opacity-50"
          disabled={false}
		  >
          AAVE
          <Image src="/aave.png" alt="arrow-right" width={24} height={10} />
        </button>
      </label>
		<Link href="/">
        <div className="bg-[#adff02] font-black text-xl p-4 mt-8 rounded-lg text-center hover:bg-lime-200 hover:text-black">
          Deposit {"&"} Stake
		  
        </div>
      </Link>
	  
      
    </div>
	<Chart />
			</>
	)
}