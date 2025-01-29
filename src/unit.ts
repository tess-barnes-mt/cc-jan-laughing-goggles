export class Unit {
  relativeAmount: number;
  relativeUnit?: Unit;

  constructor(amount: number, unit?: Unit) {
    this.relativeAmount = amount;
    this.relativeUnit = unit;
  }

  private get unitName() {
    return this.constructor.name;
  }

  public relativeUnitAmount(): number {
    if (!this.relativeUnit) {
      return this.relativeAmount;
    }

    return this.relativeAmount * this.relativeUnit.relativeUnitAmount();
  }

  public isCompatibleWith(unit: Unit) {
    return this.unitName === unit.unitName;
  }
}
