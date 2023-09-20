import Compartment from "./Compartment";

export default function Semi({children, num}: any){
  return (
    <>
      <div>SEMI</div>
      <div className="flex justify-center flex-row-reverse m-1 w-96 hover:bg-slate-300">
        <Compartment num={1} size={3500} vendor={"Shell"} comp_code={"11"} color={" bg-yellow-400 "} />
        <Compartment num={2} size={1600} vendor={"Shell"} comp_code={"12"} color={" bg-yellow-400 "}  />
        <Compartment num={3} size={1000} vendor={"Shell"} comp_code={"13"} color={" bg-yellow-400 "}  />
        <Compartment num={4} size={2000} vendor={"Shell"} comp_code={"14"} color={" bg-yellow-400 "}  />

        {children}
      </div>
    </>
  )
}