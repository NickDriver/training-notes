export default function Card({ children }: any) {
  return (
    <div className="flex h-full w-full rounded-lg bg-slate-700 text-white shadow-md shadow-slate-900">
      {children}
    </div>
  )
}