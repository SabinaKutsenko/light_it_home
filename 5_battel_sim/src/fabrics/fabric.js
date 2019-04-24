import {Army} from "../models/army";
import {Squad} from "../models/squad";
import {Vehicle} from "../models/vehicle";
import {Soldier} from "../models/soldier";

export class Fabric {
  static getInstance() {
    return new Fabric();
  }

  createArmies(armies) {
    return (
      armies.map(army => {
        return this.createArmy(army);
      })
    );
  }

  createArmy(armyData) {
    let army = this.createSquads(armyData.squads);
    return new Army(armyData.name, armyData.strategy, army);
  }

  createSquads(squads) {
    return (
      squads.map(squad => {
        return this.createSquad(squad);
      })
    );
  }

  createSquad(squadData) {
    switch (squadData.type) {
      case "vehicles":
        let vehicles = this.createVehicles(squadData.units);
        return new Squad(squadData.type, vehicles);
      case "soldiers":
        let soldiers = this.createSoldiers(squadData.units);
        return new Squad(squadData.type, soldiers);
    }
  }

  createVehicles(vehicles) {
    return (
      vehicles.map(vehicle => {
        return this.createVehicle(vehicle);
      })
    );
  }

  createVehicle(vehicleData) {
    let soldiers = this.createSoldiers(vehicleData.operators);
    let vehicle = new Vehicle(vehicleData.health, vehicleData.recharge, this.createSoldiers(soldiers));
    return vehicle;
  }

  createSoldiers(soldiers) {
    return (
      soldiers.map(soldier => {
        return this.createSoldier(soldier);
      })
    );
  }
  
  createSoldier(soldierData) {
    let soldier = new Soldier(soldierData.health, soldierData.recharge);
    return soldier;
  }
}