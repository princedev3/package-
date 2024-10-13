"use client"
import { LuBox } from "react-icons/lu";
import { PiAnchorSimpleThin,PiRulerThin } from "react-icons/pi";

export default function Home() {
  return (
<div className="  w-full">
  <div className="grid w-full place-items-center  min-h-screen h-full bg-gray-200 pb-40">
  <div className="bg-purple-950 w-full max-w-[325px] h-[280px] rounded-lg p-6 text-white relative">
  <div className="bg-white   w-full max-w-[325px]  h-[450px]  rounded-lg z-10  absolute p-5">
    <h1 className="text-black text-2xl  font-normal  leading-snug">Package Details</h1>
    <div className="bg-gray-100 text-black  border mt-8 mb-14 rounded-lg px-2 py-5 flex items-center justify-between gap-2">
      <div className="">
      <div className="flex gap-1 items-center mb-1">
        <LuBox />
        <span className="uppercase text-xs text-gray-500">weight</span>
       </div>
      <p className="text-gray-600 text-sm">1552739043</p>
      </div>
      <div className="">
      <div className="flex gap-1 items-center">
      <PiAnchorSimpleThin />
        <span className="uppercase text-xs text-gray-500">weight</span>
       </div>
      <p className="text-gray-600 text-sm">0.3KG</p>
      </div>
      <div className="">
      <div className="flex gap-1 items-center">
      <PiRulerThin />
        <span className="uppercase text-xs text-gray-500">weight</span>
       </div>
      <p className="text-gray-600 text-sm">37 X 41 X 7</p>
      </div>
    </div>
    <div className="">
    <div className="flex gap-2">
  <div className="flex flex-col items-center">
    <div className="min-w-2 min-h-2 rounded-full border-2 border-gray-600"></div>
    <div className="h-full w-[2px] bg-gray-600"></div>
  </div>
  <div className="text-black pb-2 leading-none">
   <h3 className="leading-none text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
   <span className="text-gray-400 leading-none text-sm">01/08/2024</span>
  </div>
</div>
      <div className="flex gap-2">
        <div className="flex flex-col items-center">
        <div className="min-w-2 min-h-2  rounded-full border-2 border-gray-600"></div>
        <div className="h-full w-[2px] bg-gray-600"></div>
        </div>
        <div className=" pb-2 leading-none">
        <h3 className="leading-none text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <span className="text-gray-400 leading-none text-sm">01/08/2024</span>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col items-center  ">
        <div className="min-w-2 min-h-2  rounded-full border-2 border-gray-600"></div>
        <div className="h-full w-[2px] bg-gray-600"></div>
        </div>
        <div className=" pb-2 ">
        <h3 className="leading-none text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <span className="text-gray-400 leading-none text-sm">01/08/2024</span>
        </div>
      </div>
    </div>
</div>
</div>
</div>
</div>
  );
}


