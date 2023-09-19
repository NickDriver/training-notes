import Link from "next/link";

export default function NavBar(){
    return(
      <>
        <div className="flex justify-between p-2 bg-teal-700">
            <ul className="flex bg-slate-500">
                <li className="p-2 underline"><Link href="/sizes">Sizes</Link></li>
                <li className="p-2">Compartments</li>
                <li className="p-2">SomeThing-1</li>
                <li className="p-2">SomeThing-2</li>
                <li className="p-2">SomeThing-3</li> 
            </ul>
            <ul className="flex bg-red-300">
                <li className="underline p-2 "><Link href="/">HOME</Link></li>
            </ul>
        </div>
      </>
    )
}