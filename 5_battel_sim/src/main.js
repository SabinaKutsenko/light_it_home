import fs from 'fs';
import ArmyFactory from "./factory/armyFactory";
import Battle from "./core/battle";

export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));
    let factory = ArmyFactory.getInstance();
    let armies = factory.createArmies(json.armies);

    const battle = new Battle(armies);

    (armies.length >= 2) ? battle.start() : console.log("There are should be more then 1 army");
    
  }
}