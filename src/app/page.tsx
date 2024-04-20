import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <>
	<div className="w/1 flex flex-col items-center h-[900px] justify-center">

      <div className="h-[600px]   flex scale-125 items-center justify-center ">
        <Image className="animate-fade-up animate-infinite animate-duration-[3000ms] animate-" alt="jungle" src="/jungle.svg" width={700} height={500} />
      </div>
		<Image className="absolute hover:scale-125 animate-pulse animate-infinite animate-duration-[10000ms] animate-ease-out translate-x-8 -translate-y-24" alt="melon" src="/melon.png" width={200} height={200} />
	  <div className=" flex gap-12  flex-col text-white w-1/2 items center justify-center">

	  <div className=" text-xl text-center"> Connec a Wallet</div>
	  <div className=" text-xl text-center"> Connec a Wallet</div>
	  <div className=" text-xl text-center"> login </div>
	  </div>

	</div>
	

    </>
  );
}
