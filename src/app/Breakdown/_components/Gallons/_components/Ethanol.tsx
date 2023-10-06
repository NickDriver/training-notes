import { Product, Products } from "@/app/Breakdown/_data/constants";

export default function Ethanol({ onEthanolInput }: { onEthanolInput: any }) {
  function ethanolInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: Product = { name: Products.ethanol, voluem: Number(event.target.value), prevState: null };
    onEthanolInput(product);
  }
  return (
    <div className="flex justify-between m-2 bg-sky-600 text-stone-950 rounded-sm">
      <label className="m-1">Ethanol</label>
      <input className="m-1 font-bold" type="number" name="ethanol" onChange={ethanolInputHandler} />
    </div>
  )
}