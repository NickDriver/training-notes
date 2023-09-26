import { Compartment_t, TruckType, Vendors, VendorColor, TrailersCompartments } from "../_components/Compartment"

export const data_shell: Compartment_t[] = [
  {
    compartment: 1,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 3500,
    vendor: Vendors.SHELL,
    truck_type: TruckType.SEMI,
    comp_code: 11,
    vendor_color: VendorColor.SHELL,
  },
  {
    compartment: 2,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 1700,
    vendor: Vendors.SHELL,
    truck_type: TruckType.SEMI,
    comp_code: 12,
    vendor_color: VendorColor.SHELL,
  },
  {
    compartment: 3,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 1000,
    vendor: Vendors.SHELL,
    truck_type: TruckType.SEMI,
    comp_code: 13,
    vendor_color: VendorColor.SHELL,
  },
  {
    compartment: 4,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 2000,
    vendor: Vendors.SHELL,
    truck_type: TruckType.SEMI,
    comp_code: 14,
    vendor_color: VendorColor.SHELL,
  }
]

export const data_vernon: Compartment_t[] = [
  {
    compartment: 1,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 3500,
    vendor: Vendors.VERNON,
    truck_type: TruckType.SEMI,
    comp_code: 1,
    vendor_color: VendorColor.VERNON,
  },
  {
    compartment: 2,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 1700,
    vendor: Vendors.VERNON,
    truck_type: TruckType.SEMI,
    comp_code: 2,
    vendor_color: VendorColor.VERNON,
  },
  {
    compartment: 3,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 1000,
    vendor: Vendors.VERNON,
    truck_type: TruckType.SEMI,
    comp_code: 3,
    vendor_color: VendorColor.VERNON,
  },
  {
    compartment: 4,
    compartments: TrailersCompartments.SEMI_TRAILER,
    size: 2000,
    vendor: Vendors.VERNON,
    truck_type: TruckType.SEMI,
    comp_code: 4,
    vendor_color: VendorColor.VERNON,
  }
]