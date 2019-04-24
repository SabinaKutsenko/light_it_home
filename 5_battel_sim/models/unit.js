import BaseUnit from "./baseUnit";

export default class Unit extends BaseUnit {
  constructor(health, recharge, power) {
    super();
    this.health = health;
    this.recharge = recharge;
    this.timeRecharged = 200;
    this.power = power;
  }

  setRecharge() {
    // num
    return;
  }

  isRecharged() {
    // bool
    return;
  }

  startRecharge() {
    return;
  }

  getHealth() {
    return this.health;
  }

  setHealth(val) {
     if (val < 0) {
      this.health = 0;
    }
    if (val > 100) {
      this.health = 100;
    }
    else {
      this.health = val;
    }
  }
}
