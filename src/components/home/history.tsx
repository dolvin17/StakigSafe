import Image from "next/image";

export default function History() {
  return (
    <>
      <Cards
        date="April 14th"
        icon="/aave.png"
        type="Unstake"
        time="13:26 PM"
        amount="-$160"
        amount2=""
        currency="-160 USDC"
      />
      <Cards
        date="April 11th"
        icon="/ethereum.svg"
        type="Transfer Outcome"
        time="11:32 AM"
        amount="-$260"
        amount2=""
        currency="-0.1 ETH"
		/>
      <Cards
        date="April 10th"
        icon="/aave.png"
        type="Deposit and Stake"
        time="11:32 AM"
        amount=""
        amount2="+$1260"
        currency="15 AAVE"
      />
	   <Cards
        date="April 9th"
        icon="/usdc.png"
        type="Swap"
        time="11:34 AM"
        amount="-1260 USDC"
        amount2="+15 AAVE"
        currency=""
      />
	   <Cards
        date="April 8th"
        icon="/usdc.png"
        type="Swap"
        time="11:34 AM"
        amount="-260 USDC"
        amount2="+0.1 ETH"
        currency=""
      />
	   <Cards
        date="April 7th"
        icon="/usdc.png"
        type="Transfer Income"
        time="9:11 AM"
        amount=""
        amount2="+$1520"
        currency="1520 USDC"
      />
    </>
  );
}

function Cards({
  date,
  icon,
  type,
  time,
  amount,
  amount2,
  currency,
}: {
  date: string;
  icon: string;
  type: string;
  time: string;
  amount: string;
  amount2: string;
  currency: string;
}) {
  return (
    <>
      <div className="bg-black m-1 p-4 sm:mx-auto sm:w-1/2 py-3">
        <h3 className="text-[#adff02] p-1">{date}</h3>
        <div className="flex flex-row justify-between border-b-2 py-3 items-center border-[#adff02]">
          <div className="flex flex-row">
            <div className="px-2">
              <Image alt="sol" src={icon} width={50} height={30} />
            </div>
            <div className="text-white">
              <p>{type}</p>
              <p>{time}</p>
            </div>
          </div>
          <div>
            <p className="text-red-500 text-center">{amount}</p>
            <p className="text-[#adff02] text-center">{amount2}</p>
            <p className="text-white">{currency}</p>
          </div>
        </div>
      </div>
    </>
  );
}
