import Compartment from "./Compartment";
import Trailer from "./Trailer";
import Truck from "./Truck";

export default function TwoAndTwo(){
    return(
    <div className="flex justify-evenly items-center w-full  bg-slate-700 rounded-lg">
        <Trailer />
        <div className="box-content h-2 w-8 bg-orange-300 rounded-lg shadow-lg shadow-slate-900 "></div>
        <Truck />
    </div>
    )

}