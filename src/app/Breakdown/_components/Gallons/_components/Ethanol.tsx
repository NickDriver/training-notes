import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

export default function Ethanol({ onEthanolInput }: { onEthanolInput: any }) {
  // handler
  function ethanolInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: ProductObject = { name: Products.ethanol, voluem: Number(event.target.value) };
    onEthanolInput(product);
  }

  return (
    <div className="flex justify-between bg-sky-600 text-stone-950 rounded-sm">
      <label className="">Ethanol</label>
      <input className=" font-bold" type="number" name="ethanol" onChange={ethanolInputHandler} />
    </div>
  )
}