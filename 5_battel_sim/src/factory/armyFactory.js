import Army from "../models/army";
import SquadFactory from "./squadFactory";

export default class ArmyFactory {
  static getInstance() {
    return new ArmyFactory();
  }

  createArmies(armies) {
    return (
      armies.map(army => {
        return this.createArmy(army);
      })
    );
  }

  createArmy(armyArr) {
    let squadFactory = SquadFactory.getInstance();
    let army = squadFactory.createSquads(armyArr.name, armyArr.squads);
    return new Army(armyArr.name, armyArr.strategy, army);
  }

}