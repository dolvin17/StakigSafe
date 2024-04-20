import Image from "next/image";

export default function History() {
  return (
    <Cards
      date="April 14th"
      icon="/solana.png"
      type="Withdraw"
      time="13:26 PM"
      amount="-$160"
      currency="-1 SOL"
    />
  );
}

function Cards({
  date,
  icon,
  type,
  time,
  amount,
  currency,
}: {
  date: string;
  icon: string;
  type: string;
  time: string;
  amount: string;
  currency: string;
}) {
  return (
    <>
      <div className="bg-black m-1 p-4 sm:mx-auto sm:w-1/2 py-8">
        <h3 className="text-orange-400 p-1">{date}</h3>
        <div className="flex flex-row justify-between border-b-2 py-3 items-center border-white">
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
            <p className="text-red-400">{amount}</p>
            <p className="text-white">{currency}</p>
          </div>
        </div>
      </div>
    </>
  );
}
