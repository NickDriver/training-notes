// 'use client'

import { Product, Products } from "@/app/Breakdown/_data/constants";

export default function Regular_87({ onRegularInput }: { onRegularInput: any }) {
  function regularInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: Product = {name: Products.regular, voluem: Number(event.target.value)};
    onRegularInput(event.target.value);
  }
  return (
    <div className="flex justify-between m-2 bg-slate-400 text-stone-950 rounded-sm">
      <label className="m-1">87-Reg</label>
      <input className="m-1 font-bold" type="number" name="regular" onChange={regularInputHandler} />
    </div>
  )
}