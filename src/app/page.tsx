import Arrival from "@/components/arrival";
import Browser from "@/components/browser";
import Hero from "@/components/hero";
import HeroButtom from "@/components/herobuttom";
import { MarqueeDemo } from "@/components/reviews";
import TopSelling from "@/components/top-selling";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
      <Hero />
       <HeroButtom/>
      <Suspense>
      <Arrival />
      </Suspense>
      <Suspense>
      <TopSelling />
      </Suspense>
      <Browser /> 
      <MarqueeDemo/> 
    </div>
  )
}
