import DSL from "./_components/DSL";
import E85 from "./_components/E85";
import Ethanol from "./_components/Ethanol";
import Midgrade_89 from "./_components/Midgrade_89";
import Premium_91 from "./_components/Premium_91";
import Regular_87 from "./_components/Regular_87";

export default function Gallons({ regularHandler, midgradeHandler, premiumHandler, e85Handler, dieselHandler, ethanolHandler, resetFrom, submitHandler }:
  { regularHandler: any, midgradeHandler: any, premiumHandler: any, e85Handler: any, dieselHandler: any, ethanolHandler: any, resetFrom: any, submitHandler: any }) {

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