import Compartment from "./Compartment";

enum Vendors {
  SHELL = "Shell",
  VERNON = "Vernon",
}

export default function Semi({ children }: any) {
  return (
    <div className="flex flex-col items-center">
      <div>SEMI</div>
      <div className="flex justify-center flex-row-reverse m-1 w-96">
        <Compartment num={1} size={3500} vendor={Vendors.SHELL} />
        <Compartment num={2} size={1600} vendor={Vendors.SHELL} />
        <Compartment num={3} size={1000} vendor={Vendors.SHELL} />
        <Compartment num={4} size={2000} vendor={Vendors.SHELL} />
      </div>
      <div className="flex justify-center flex-row-reverse m-1 w-96">
        <Compartment num={1} size={3500} vendor={Vendors.VERNON} />
        <Compartment num={2} size={1600} vendor={Vendors.VERNON} />
        <Compartment num={3} size={1000} vendor={Vendors.VERNON} />
        <Compartment num={4} size={2000} vendor={Vendors.VERNON} />
      </div>
    </div>
  )
}