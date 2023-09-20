export default function Card({children}: any){
  return (
    <div className="flex flex-col items-center h-full w-full my-2 rounded-lg bg-slate-700 text-white shadow-md shadow-slate-900 hover:bg-rose-400">
      {children}
    </div>
  )
}