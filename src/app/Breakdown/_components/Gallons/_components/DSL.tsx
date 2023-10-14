import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

export default function DSL({ onDieselInput }: { onDieselInput: any }) {
  // handler
  function dieselInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: ProductObject = { name: Products.diesel, voluem: Number(event.target.value) }
    onDieselInput(product);
  }

  return (
    <div className="flex justify-between p-1 bg-green-700 text-stone-950 rounded-sm">
      <label className="" data-testid="label-diesel">Diesel</label>
      <input className="w-3/4 font-bold" type="number" name="diesel" onChange={dieselInputHandler} />
    </div>
  )
}