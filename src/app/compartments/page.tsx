import Card from "./components/Card";
import Compartment from "./components/Compartment";
import Semi from "./components/Semi";

export default function Compartments(){
  return (
  <div>
    <div className="flex justify-center p-2 w-full bg-slate-900 text-emerald-400 text-bold text-2xl rounded-lg shadow-md shadow-slate-900">Compartments</div>
    <Card>
      {/* <div className="flex justify-center m-1 text-orange-600 text-1xl hover:bg-slate-400">TEST DIV</div> */}
      <Semi>
      </Semi>
      {/* <Semi>
        <Compartment num={1} size={3500} />
        <Compartment num={2} size={1600} />
        <Compartment num={3} size={1000} />
        <Compartment num={4} size={2000} />
      </Semi> */}
    </Card>
  </div>
  )
}