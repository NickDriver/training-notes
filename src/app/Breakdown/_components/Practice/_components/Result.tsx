import { useState } from "react";

export default function Result({ gallons }: { gallons: any }) {
  const products = Object.keys(gallons);
  const message = products.map((product) => <div className="">{product + " left: " + gallons[product]}</div>);

  return (
    <div className="flex justify-center items-center m-2 w-full h-full bg-slate-800 rounded-md ">
      <div className="flex flex-col justify-start m-2 w-full h-full">
        {message}
      </div>
    </div>
  )
}