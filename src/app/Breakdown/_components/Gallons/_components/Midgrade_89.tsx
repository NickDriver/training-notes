import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

export default function Midgrade_89({ onMidgradeInput }: { onMidgradeInput: any }) {
  // handler
  function midgradeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: ProductObject = { name: Products.midgrade, voluem: Number(event.target.value) };
    onMidgradeInput(product);
  }

  return (
    <div className="flex justify-between m-2 bg-blue-600 text-stone-950 rounded-sm">
      <label className="m-1">89-Mid</label>
      <input className="m-1 font-bold" type="number" name="midgrade" onChange={midgradeInputHandler} />
    </div>
  )
}