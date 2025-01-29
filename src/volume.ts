import { Unit } from "./unit";

export class Volume extends Unit {
  constructor(amount: number, unit?: Unit) {
    super(amount, unit);
  }
}

export const TEASPOON = new Volume(1);
export const TABLESPOON = new Volume(3, TEASPOON);
export const OUNCE = new Volume(2, TABLESPOON);
export const CUP = new Volume(8, OUNCE);
export const PINT = new Volume(2, CUP);
export const QUART = new Volume(2, PINT);
export const GALLON = new Volume(4, QUART);
