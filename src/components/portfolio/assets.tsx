import Image from "next/image";
import React from "react";

export default function Assets() {
  return (
    <>
	<div className="h-[800px]">

	      <Cards
        icon="/usdc.png"
        assets="USDC"
        value="260 · 1$"
        dolars="260$"
		/>
      <Cards
        icon="/aave.png"
        assets="AAVE"
        value="15 · 80,32$"
        dolars="1204.80$"
		/>
      <Cards
        icon="/ethereum.svg"
        assets="ETHER"
        value="0.01 · 3.234$"
        dolars="$288"
		/>


		</div>
    </>
  );
}

function Cards({
  icon,
  assets,
  value,
  dolars,
}: {
  icon: string;
  assets: string;
  value: string;
  dolars: string;
}) {
  return (
    <>
      <div className="bg-black m-1 p-4 sm:mx-auto sm:w-1/2 py-3">
        <div className="flex flex-row justify-between border-b-2 py-3 items-center border-[#adff02]">
          <div className="flex flex-row">
            <div className="px-2">
              <Image alt="sol" src={icon} width={50} height={30} />
            </div>
            <div className="text-white">
              <p>{assets}</p>
              <p>{value}</p>
            </div>
          </div>
          <div>
            <p className="text-[#adff02] text-center">{dolars}</p>
          </div>
        </div>
      </div>
    </>
  );
}
