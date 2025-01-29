import { Unit } from "./unit";

export class Quantity {
  amount: number;
  unit: Unit;

  constructor(amount: number, unit: Unit) {
    this.amount = amount;
    this.unit = unit;
  }

  // how many teaspoons? (base units)
  private relativeQuantityAmount() {
    return this.amount * this.unit.relativeUnitAmount();
  }

  equals(other: Quantity) {
    if (!this.unit.isCompatibleWith(other.unit)) {
      throw new Error();
    }

    const amount = this.relativeQuantityAmount();
    const otherAmount = other.relativeQuantityAmount();

    return amount === otherAmount;
  }

  // as lets you choose which unit to return in
  add(other: Quantity, as: Unit = this.unit) {
    if (!this.unit.isCompatibleWith(other.unit)) {
      throw new Error();
    }

    const relativeAmount =
      (this.relativeQuantityAmount() + other.relativeQuantityAmount()) /
      as.relativeUnitAmount();

    return new Quantity(relativeAmount, as);
  }
}
