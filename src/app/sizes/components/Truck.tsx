import Compartment from "./Compartment";

export default function Truck(props: any){
  return(
    <div className="justify-center content-center p-2 h-full w-5/12 text-indigo-950 text-2xl">
      <div className="flex justify-center items-center border-box h-10  m-1 bg-orange-300 rounded-lg shadow-lg shadow-slate-800 text-slate-800 font-bold text-lg">Truck</div>
        <div className="flex">
          <Compartment className="flex justify-center w-1/4 m-1 bg-orange-100 rounded-l-lg shadow-md shadow-slate-900 " text="1000" />
          <Compartment className="flex justify-center w-3/4 m-1 bg-orange-100 rounded-r-lg shadow-md shadow-slate-900 " text="3000" />
        </div>
        <div className="flex">
          <Compartment className="flex justify-center w-1/4 m-1 bg-green-600 rounded-l-lg shadow-md shadow-slate-900 " text="800" />
          <Compartment className="flex justify-center w-3/4 m-1 bg-green-600 rounded-r-lg shadow-md shadow-slate-900 " text="2800" />
        </div>
        <div className="flex">
          <Compartment className="flex justify-center w-1/4 m-1 bg-sky-500 rounded-l-lg shadow-md shadow-slate-900 " text="900" />
          <Compartment className="flex justify-center w-3/4 m-1 bg-sky-500 rounded-r-lg shadow-md shadow-slate-900 " text="2800" />
        </div>
    </div>
  )
}