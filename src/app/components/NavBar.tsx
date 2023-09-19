import Link from "next/link";

export default function NavBar(){
    return(
      <>
        <div className="flex justify-between p-2 bg-emerald-400 text-slate-700">
            <ul className="flex">
                <li className="p-2 underline"><Link href="/sizes">Sizes</Link></li>
                <li className="p-2 underline"><Link href="/compartments">Compartments</Link></li>
                <li className="p-2 underline"><Link href="http://google.com">Google</Link></li>
                <li className="p-2">SomeThing-2</li>
                <li className="p-2">SomeThing-3</li> 
            </ul>
            <ul className="flex">
                <li className="underline p-2 "><Link href="/">HOME</Link></li>
            </ul>
        </div>
      </>
    )
}