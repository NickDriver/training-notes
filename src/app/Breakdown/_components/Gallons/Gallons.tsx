import { FormEventHandler, useState } from "react";
import DSL from "./_components/DSL";
import E85 from "./_components/E85";
import Ethanol from "./_components/Ethanol";
import Midgrade_89 from "./_components/Midgrade_89";
import Premium_91 from "./_components/Premium_91";
import Regular_87 from "./_components/Regular_87";

export default function Gallons({ onGallonsInput }: { onGallonsInput: any }) {
  const [regular, setRegular] = useState<Number>(0);
  const [midgrade, setMidgrade] = useState<Number>(0);
  const [premium, setPremium] = useState<Number>(0);
  const [e85, setE85] = useState<Number>(0);
  const [diesel, setDiesel] = useState<Number>(0);
  const [ethsnol, setEthanol] = useState<Number>(0);

  function regularHandler(data: Number) {
    setRegular(data);
  }

  function midgradeHandler(data: Number) {
    setMidgrade(data);
  }

  function premiumHandler(data: Number) {
    setPremium(data);
  }

  function e85Handler(data: Number) {
    setE85(data);
  }

  function dieselHandler(data: Number) {
    setDiesel(data);
  }

  function ethanolHandler(data: Number) {
    setEthanol(data);
  }

  function resetFrom() {
    setRegular(0);
    setMidgrade(0);
    setPremium(0);
    setE85(0);
    setDiesel(0);
    setEthanol(0);

    const form_data = {
      regular: 0,
      midgrade: 0,
      premium: 0,
      e85: 0,
      diesel: 0,
      ethsnol: 0,
    }
    onGallonsInput(form_data);
  }


  function submitHandler(event: any) {
    event.preventDefault();
    const form_data = {
      regular: regular,
      midgrade: midgrade,
      premium: premium,
      e85: e85,
      diesel: diesel,
      ethsnol: ethsnol,
    }
    setRegular(0);
    setMidgrade(0);
    setPremium(0);
    setE85(0);
    setDiesel(0);
    setEthanol(0);
    onGallonsInput(form_data);
  }

  return (
    <div className="flex justify-center items-center max-w-1/4 m-2 bg-sky-800 rounded-md">
      <form>
        <Regular_87 onRegularInput={regularHandler} />
        <Midgrade_89 onMidgradeInput={midgradeHandler} />
        <Premium_91 onPremiumInput={premiumHandler} />
        <E85 onE85Input={e85Handler} />
        <DSL onDieselInput={dieselHandler} />
        <Ethanol onEthanolInput={ethanolHandler} />
        <div className="flex justify-center max-h-fit m-2 text-stone-950 font-bold rounded-sm">
          <button className="flex justify-center items-center w-1/3 h-10 m-1 bg-slate-400 rounded-md border-4 border-emerald-400 shadow-md shadow-slate-700" type="reset" onClick={resetFrom}>Clear</button>
          <button className="flex justify-center items-center w-2/3 h-10 m-1 bg-slate-400 rounded-md border-4 border-emerald-400 shadow-md shadow-slate-700 " type="submit" onClick={submitHandler}>Submit</button>
        </div>
      </form>
    </div>
  )
}