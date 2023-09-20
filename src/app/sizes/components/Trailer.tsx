import TwoAndTwo from "./TwoAndTwo";
import Compartment from "./Compartment";


export default function Trailer(props: any){
    return (
    <>
    <div className="justify-center content-center p-2 h-full w-5/12 text-indigo-950 text-2xl">
      <div className="flex justify-center items-center border-box h-10  m-1 bg-orange-300 rounded-lg shadow-md shadow-slate-800 text-slate-800 font-bold text-lg">Trailer</div>
      <div className="flex">
        <Compartment className="flex justify-center w-2/3 m-1 bg-orange-100  rounded-l-lg shadow-md shadow-slate-900 " text="2800" />
        <Compartment className="flex justify-center w-1/3 m-1 bg-orange-100  rounded-r-lg shadow-md shadow-slate-900 " text="1800" />
      </div>
      <div className="flex">
        <Compartment className="flex justify-center w-2/3 m-1 bg-green-600  rounded-l-lg shadow-md shadow-slate-900 " text="2500" />
        <Compartment className="flex justify-center w-1/3 m-1 bg-green-600  rounded-r-lg shadow-md shadow-slate-900 " text="1500" />
      </div>
      <div className="flex">
        <Compartment className="flex justify-center w-2/3 m-1 bg-sky-500  rounded-l-lg shadow-md shadow-slate-900 " text="2700" />
        <Compartment className="flex justify-center w-1/3 m-1 bg-sky-500  rounded-r-lg shadow-md shadow-slate-900 " text="1600" />
      </div>
    </div>
        
    </>
    )
}

{/* <Trailer first="1800" second="2800" text="Trailer"/>
            <div className="box-content h-2 w-8 mx-2 bg-orange-300 rounded-lg shadow-md shadow-slate-800 "></div>
            <Trailer first="3000" second="1000" text="Truck" /> */}