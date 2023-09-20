export default function Compartment({size, num, vendor, comp_code, color}: any){
  let w_num: string = "w-3/4 ";
  // if (size === 3500) {
  //   w_num = "w-5/12 ";
  // } else if (size === 1600) {
  //   w_num = "w-1/5 ";
  // } else if (size === 1000) {
  //   w_num = "w-1/8 ";
  // } else if (size === 2000) {
  //   w_num = "w-1/4 ";
  // }
  return (
    <div className={w_num + 'm-1 p-1 bg-sky-500 text-slate-900'}>
      <div className="flex justify-center items-center font-bold">{num}</div>
      <div className={"flex flex-col items-center p-1 text-sm font-normal" + color}>
        <p className="">{vendor}</p>
        <p className="">{comp_code}</p>
      </div>
    </div>
  )

}