import Soldier from "../models/soldier";

let instance = null;
export default class SoldierFactory {
  constructor() {
    if (instance) {
      return instance;
    } else {
      instance = this;
    }
  }

  static getInstance() {
    return new SoldierFactory();
  }

  createSoldier(name, data) {
    return new Soldier(name, data.health, data.recharge);
  }

  createSoldiers(name, arr) {
    return arr.map(soldier => this.createSoldier(name, soldier));
  }

}