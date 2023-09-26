import { Compartment_t, TruckType, Vendors, VendorColor, TrailersCompartments } from "../_components/Compartment"

export const data_shell: Compartment_t[] = [
  {
    compartment: 1,
    compartments: TrailersCompartments.TUB,
    size: 4000,
    vendor: Vendors.SHELL,
    truck_type: TruckType.TUB,
    comp_code: 11,
    vendor_color: VendorColor.SHELL,
  },
  {
    compartment: 1,
    compartments: TrailersCompartments.TRAILER_3,
    size: 1800,
    vendor: Vendors.SHELL,
    truck_type: TruckType.THREE,
    comp_code: 21,
    vendor_color: VendorColor.SHELL,
  },
  {
    compartment: 2,
    compartments: TrailersCompartments.TRAILER_3,
    size: 100,
    vendor: Vendors.SHELL,
    truck_type: TruckType.THREE,
    comp_code: 22,
    vendor_color: VendorColor.SHELL,
  },
  {
    compartment: 3,
    compartments: TrailersCompartments.TRAILER_3,
    size: 1800,
    vendor: Vendors.SHELL,
    truck_type: TruckType.THREE,
    comp_code: 23,
    vendor_color: VendorColor.SHELL,
  }
]

export const data_vernon: Compartment_t[] = [
  {
    compartment: 1,
    compartments: TrailersCompartments.TUB,
    size: 4000,
    vendor: Vendors.VERNON,
    truck_type: TruckType.TUB,
    comp_code: 1,
    vendor_color: VendorColor.VERNON,
  },
  {
    compartment: 1,
    compartments: TrailersCompartments.TRAILER_3,
    size: 1800,
    vendor: Vendors.VERNON,
    truck_type: TruckType.THREE,
    comp_code: 11,
    vendor_color: VendorColor.VERNON,
  },
  {
    compartment: 2,
    compartments: TrailersCompartments.TRAILER_3,
    size: 1000,
    vendor: Vendors.VERNON,
    truck_type: TruckType.THREE,
    comp_code: 12,
    vendor_color: VendorColor.VERNON,
  },
  {
    compartment: 3,
    compartments: TrailersCompartments.TRAILER_3,
    size: 1800,
    vendor: Vendors.VERNON,
    truck_type: TruckType.THREE,
    comp_code: 13,
    vendor_color: VendorColor.VERNON,
  }
]