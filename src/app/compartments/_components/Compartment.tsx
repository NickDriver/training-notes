
enum Vendors {
  SHELL = "Shell",
  VERNON = "Vernon",
}

enum VendorColor {
  SHELL = " bg-yellow-400 ",
  VERNON = " bg-sky-400 ",
}

interface Vendor {
  color: VendorColor;
  comp_code: String;
}

const vendor_data: Vendor = {
  color: VendorColor.SHELL,
  comp_code: "",
}

const w_num: string = "w-3/4 ";

export default function Compartment({ size, num, vendor }: any) {
  if (vendor === Vendors.SHELL) {
    vendor_data.color = VendorColor.SHELL;
    if (num === 1) {
      vendor_data.comp_code = "11";
    }
    if (num === 2) {
      vendor_data.comp_code = "12";
    }
    if (num === 3) {
      vendor_data.comp_code = "13";
    }
    if (num === 4) {
      vendor_data.comp_code = "14";
    }
  }

  if (vendor === Vendors.VERNON) {
    vendor_data.color = VendorColor.VERNON;
    if (num === 1) {
      vendor_data.comp_code = "1";
    }
    if (num === 2) {
      vendor_data.comp_code = "2";
    }
    if (num === 3) {
      vendor_data.comp_code = "3";
    }
    if (num === 4) {
      vendor_data.comp_code = "4";
    }
  }

  return (
    <div className={w_num + 'm-1 p-1 bg-slate-500 text-slate-900 rounded-md shadow-md shadow-slate-800'}>
      <div className="flex justify-center items-center font-bold">{num}</div>
      <div className={"flex flex-col items-center p-1 text-sm font-normal rounded-md" + vendor_data.color}>
        <p className="underline">{vendor}</p>
        <p className="">{"code: " + vendor_data.comp_code}</p>
      </div>
    </div>
  )

}