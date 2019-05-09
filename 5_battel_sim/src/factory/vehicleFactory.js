import Vehicle from "../models/vehicle";
import SoldierFactory from "./soldierFactory";

let instance = null;
export default class VehicleFactory {
  constructor() {
    if (instance) {
      return instance;
    } else {
      instance = this;
    }
  }

  static getInstance() {
    return new VehicleFactory();
  }

  createVehicle(name, data) {
    let soldierFactory = SoldierFactory.getInstance();
    let soldiers = soldierFactory.createSoldiers(name, data.operators);
    return new Vehicle(name, data.health, data.recharge, soldierFactory.createSoldiers(name, soldiers));
  }

  createVehicles(name, arr) {
    return arr.map(vehicle => this.createVehicle(name, vehicle));
  }

}