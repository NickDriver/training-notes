import { Products, Product } from "@/app/Breakdown/_data/constants";

export default function Premium_91({ onPremiumInput }: { onPremiumInput: any }) {
  function premiumInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const product: Product = { name: Products.premium, voluem: Number(event.target.value), prevState: null };
    onPremiumInput(product);
  }
  return (
    <div className="flex justify-between m-2 bg-red-600 text-stone-950 rounded-sm">
      <label className="m-1">91-Prm</label>
      <input className="m-1 font-bold" type="number" name="premium" onChange={premiumInputHandler} />
    </div>
  )
}