export default function Card({ children }: any) {
  return (
    <div className="flex flex-col items-center flex-wrap h-full w-full my-2 rounded-lg bg-slate-700 text-white shadow-md shadow-slate-900">
      {children}
    </div>
  )
}