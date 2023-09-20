import Card from "./components/Card";
import Compartment from "./components/Compartment";
import Semi from "./components/Semi";

export default function Compartments(){
  return (
  <div>
    <div className="flex justify-center p-2 w-full bg-slate-900 text-emerald-400 text-bold text-2xl rounded-lg shadow-md shadow-slate-900">Compartments</div>
    <Card>
      <Semi />
    </Card>
  </div>
  )
}