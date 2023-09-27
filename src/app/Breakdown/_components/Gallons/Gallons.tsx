import DSL from "./_components/DSL";
import E85 from "./_components/E85";
import Ethanol from "./_components/Ethanol";
import Midgrade_89 from "./_components/Midgrade_89";
import Premium_91 from "./_components/Premium_91";
import Regular_87 from "./_components/Regular_87";

export default function Gallons() {
  return (
    <div className="flex justify-center items-center flex-wrap box-border max-w-1/4 m-2 bg-sky-800 rounded-md">
      {/* Gallons Box */}
      {/* Form comes here, all in one or bunch of small components - ? */}
      <form>
        <Regular_87 />
        <Midgrade_89 />
        <Premium_91 />
        <E85 />
        <DSL />
        <Ethanol />
      </form>
    </div>
  )
}