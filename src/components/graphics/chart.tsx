import Image from "next/image";

export default function Chart() {
  return (
    <>
      <div className="bg-black   text-white m-1 p-4 sm:mx-auto sm:w-1/2 py-8">
        <div className="flex flex-row gap-2">
          <div>
            <Image src="/usdc.png" alt="chart" width={25} height={25} />
          </div>
          <div>USDC</div>
          <div className="text-lime-200/40">USDC</div>
        </div>
        <p className="text-white/50 pt-4">84.32$</p>
        <div>5.969%</div>
        <div className="items-center flex justify-center">
          <Image src="/chart.svg" alt="chart" width={600} height={200} />
        </div>
      </div>
    </>
  );
}
