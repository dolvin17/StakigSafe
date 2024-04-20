import Link from "next/link";
import Deposit from "@/components/portfolio/Deposit";
import Navigation from "@/components/navigation/navigation";
import Assets from "@/components/portfolio/assets";

export default function Portfolio() {
  return (
	<>
	<Navigation />
    <Deposit />
	<Assets />
	</>
  );
}
