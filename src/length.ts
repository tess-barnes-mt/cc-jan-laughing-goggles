import { Unit } from "./unit";

export class Length extends Unit {
  constructor(amount: number, unit?: Unit) {
    super(amount, unit);
  }
}

export const INCH = new Length(1);
export const FOOT = new Length(12, INCH);
export const YARD = new Length(3, FOOT);
export const FURLONG = new Length(220, YARD);
export const MILE = new Length(8, FURLONG);
