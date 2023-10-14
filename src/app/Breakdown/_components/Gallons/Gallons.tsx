import { useState } from "react";
import DSL from "./_components/DSL";
import E85 from "./_components/E85";
import Ethanol from "./_components/Ethanol";
import Midgrade_89 from "./_components/Midgrade_89";
import Premium_91 from "./_components/Premium_91";
import Regular_87 from "./_components/Regular_87";
import { ProductObject } from "../../_data/constants";


export default function Gallons({ submitHandler, resetForm }:
  { submitHandler: any, resetForm: any }) {

  // Statese per product
  const [regular, setRegular] = useState<ProductObject | null>(null);
  const [midgrade, setMidgrade] = useState<ProductObject | null>(null);
  const [premium, setPremium] = useState<ProductObject | null>(null);
  const [e85, setE85] = useState<ProductObject | null>(null);
  const [diesel, setDiesel] = useState<ProductObject | null>(null);
  const [ethanol, setEthanol] = useState<ProductObject | null>(null);
  let temp_gallons: ProductObject[] = [];

  // Handlers per product
  function regularHandler(data: ProductObject) {
    setRegular(data);
  }

  function midgradeHandler(data: ProductObject) {
    setMidgrade(data);
  }

  function premiumHandler(data: ProductObject) {
    setPremium(data);
  }

  function e85Handler(data: ProductObject) {
    setE85(data);
  }

  function dieselHandler(data: ProductObject) {
    setDiesel(data);
  }

  function ethanolHandler(data: ProductObject) {
    setEthanol(data);
  }

  function resetFormButton() {
    setRegular(null);
    setMidgrade(null);
    setPremium(null);
    setE85(null);
    setDiesel(null);
    setEthanol(null);
    resetForm([]);
  }

  function submitButtonHandler(event: any) {
    event.preventDefault();
    if (regular) temp_gallons.push(regular);
    if (midgrade) temp_gallons.push(midgrade);
    if (premium) temp_gallons.push(premium);
    if (e85) temp_gallons.push(e85);
    if (diesel) temp_gallons.push(diesel);
    if (ethanol) temp_gallons.push(ethanol);
    submitHandler(temp_gallons);
  }

  return (
    <div className="p-2 bg-sky-800 rounded-md">
      <form className="flex flex-col space-y-2">
        <Regular_87 onRegularInput={regularHandler} />
        <Midgrade_89 onMidgradeInput={midgradeHandler} />
        <Premium_91 onPremiumInput={premiumHandler} />
        <E85 onE85Input={e85Handler} />
        <DSL onDieselInput={dieselHandler} />
        <Ethanol onEthanolInput={ethanolHandler} />
        <div className="flex justify-center space-x-1 max-h-fit text-stone-950 font-bold rounded-sm">
          <button className="flex justify-center items-center p-1 w-1/3 h-10 bg-slate-400 rounded-md border-4 border-emerald-400 shadow-md shadow-slate-700" type="reset" onClick={resetFormButton}>Clear</button>
          <button className="flex justify-center items-center p-1 w-2/3 h-10 bg-slate-400 rounded-md border-4 border-emerald-400 shadow-md shadow-slate-700 " type="submit" onClick={submitButtonHandler}>Submit</button>
        </div>
      </form>
    </div>
  )
}