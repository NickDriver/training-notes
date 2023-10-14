import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

export default function E85({ onE85Input }: { onE85Input: any }) {
  // handler
  function e85InputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: ProductObject = { name: Products.e85, voluem: Number(event.target.value) }
    onE85Input(product);
  }

  return (
    <div className="flex justify-between bg-yellow-500 text-stone-950 rounded-sm">
      <label className="">E85</label>
      <input className=" font-bold" type="number" name="e85" onChange={e85InputHandler} />
    </div>
  )
}