import type { Metadata } from "next";
import Card from "./_components/Card";

export const metadata: Metadata = {
  title: 'Compartments',
  description: 'Compartments codes pe Vendors',
}

export default function CompartmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex justify-center p-2 w-full bg-slate-900 text-emerald-400 text-bold text-2xl rounded-lg shadow-md shadow-slate-900">Compartments</div>
      <Card>
        {children}
      </Card>

    </section>
  )
}