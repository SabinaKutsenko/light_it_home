import BaseUnit from "./baseUnit";

export default class Unit extends BaseUnit {
  constructor(name, health, recharge) {
    super();
    this.name = name;
    this.health = health;
    this.recharge = recharge;
    this.isRecharged = true;
    this.time = 0;
  }

  setRecharge() {
    this.isRecharged = false;
    this.time = Date.now();
  }

  checkRecharge() {
    if (Date.now() - this.time > this.recharge) {
      this.isRecharged = true;
    }
  }

  getHealth() {
    return this.health;
  } 

  setHealth(value) {
    if (value < 0) {
      this.health = 0;
    }
    if (value > 100) {
      this.health = 100;
    }
    else {
      this.health = value;
    }
  } 
}