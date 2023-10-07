import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

export default function E85({ onE85Input }: { onE85Input: any }) {
  function e85InputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: ProductObject = { name: Products.e85, voluem: Number(event.target.value) }
    onE85Input(product);
  }
  return (
    <div className="flex justify-between m-2 bg-yellow-500 text-stone-950 rounded-sm">
      <label className="m-1">E85</label>
      <input className="m-1 font-bold" type="number" name="e85" onChange={e85InputHandler} />
    </div>
  )
}