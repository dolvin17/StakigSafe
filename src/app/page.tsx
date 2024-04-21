"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Rkbutton } from "@/components/rainbowkit/rkbutton";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

export default function Page() {
  const { address } = useAccount();
  const { openChainModal } = useChainModal();
  const { openConnectModal = openChainModal } = useConnectModal();
  const { openAccountModal = openConnectModal } = useAccountModal();
  const router = useRouter();

  useEffect(() => {
	if (address) {
	  router.push("/welcome");
	}
  }, [address]);	
  return (
    <>
      <div>
        <Image
          className="absolute hover:scale-125 animate-pulse animate-infinite animate-duration-[10000ms] "
          alt="melon"
          src="/fam23(1).png"
          width={150}
          height={150}
        />
      </div>
      <div className="w/1 flex flex-col items-center h-[900px] justify-center">
        <div className="   flex scale-125 items-center justify-center ">
          <Image
            className=" pointer-events-none animate-pulse animate-infinite animate-duration-[3000ms] animate-"
            alt="jungle"
            src="/jungle.svg"
            width={700}
            height={500}
          />
        </div>
        <Image
          className=" absolute hover:scale-125 animate-pulse animate-infinite animate-duration-[10000ms] animate-ease-out translate-x-8 -translate-y-24"
          alt="melon"
          src="/melon.png"
          width={200}
          height={200}
        />
        <div className="text-[#adff02] hover:scale-125 animate-pulse animate-infinite animate-duration-[10000ms m-4 w-[200px] text-center border-[#adff02] rounded-xl border-2 border-double bg-black p-4">
          {" "}
          Create Safe Account
        </div>
        <Rkbutton />{" "}
      </div>
    </>
  );
}
