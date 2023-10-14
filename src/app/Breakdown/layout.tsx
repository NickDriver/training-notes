import type { Metadata } from "next";
import Card from "../components/Card";

export const metadata: Metadata = {
  title: 'Breakdown',
  description: 'Practice Breakdown',
}

export default function CompartmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <div className="flex justify-center p-2 w-full bg-slate-900 text-emerald-400 text-bold text-2xl rounded-lg shadow-md shadow-slate-900">Breakdown</div>
      <Card>
        {children}
      </Card>
    </section>
  )
}