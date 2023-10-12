'use client'

import { useRouter } from "next/navigation";
import Breakdown from "./Breakdown/page";
import { useEffect } from "react";

export default function Home() {
  // return (
  //   <>
  //     <div className='flex justify-center p-2 w-full bg-slate-900 text-emerald-400 text-bold text-2xl rounded-lg shadow-md shadow-slate-900'>Main Page</div>
  //   </>
  // )
  const { push } = useRouter();
  useEffect(() => {
    push("/Breakdown");
  }, []);
  return (<></>)
}
