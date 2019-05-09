import Squad from "../models/squad";
import SoldierFactory from "./soldierFactory";
import VehicleFactory from "./vehicleFactory";

let instance = null;
export default class SquadFactory {
  constructor() {
    if (instance) {
      return instance;
    } else {
      instance = this;
    }
  }

  static getInstance() {
    return new SquadFactory();
  }

  createSquad(name, data) {
    if(data.type === "vehicles") {
        let vehicleFactory = VehicleFactory.getInstance();
        let vehicles = vehicleFactory.createVehicles(name, data.units);
        return new Squad(name, data.type, vehicles);
    } else if (data.type === "soldiers") {
        let soldierFactory = SoldierFactory.getInstance();
        let soldiers = soldierFactory.createSoldiers(name, data.units);
        return new Squad(name, data.type, soldiers);
    }
  }

  createSquads(name, arr) {
    return arr.map(squad => this.createSquad(name, squad));
  }
}