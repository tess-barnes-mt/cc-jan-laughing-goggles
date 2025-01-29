import { Unit } from "./unit";

describe("unit", () => {
  describe("relativeUnitAmount", () => {
    it("returns original amount of no relative unit is defined", () => {
      expect(new Unit(1).relativeUnitAmount()).toBe(1);
    });

    it("returns relative amount if relative unit is defined", () => {
      expect(new Unit(1, new Unit(3)).relativeUnitAmount()).toBe(3);
      expect(new Unit(2, new Unit(7)).relativeUnitAmount()).toBe(14);
    });
  });
});
