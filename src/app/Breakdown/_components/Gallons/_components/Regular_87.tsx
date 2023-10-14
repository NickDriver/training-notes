import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

export default function Regular_87({ onRegularInput }: { onRegularInput: any }) {
  // handler
  function regularInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: ProductObject = { name: Products.regular, voluem: Number(event.target.value) };
    onRegularInput(product);
  }

  return (
    <div className="flex justify-between py-1 bg-slate-400 text-stone-950 rounded-sm">
      <label className="p-1">87-Reg</label>
      <input className="p-1 font-bold" type="number" name="regular" onChange={regularInputHandler} />
    </div>
  )
}