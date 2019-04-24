import fs from "fs";
import { Battle } from "./core/battle";
import Soldier from "./models/soldier";
import { SoldierFactory } from "./factory/soldierFactory";

export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + "/../data/data.json"));


    const factory = SoldierFactory.getInstance();


    let solder = new Soldier();
	let solder_attack = solder.attackSuccess(77, 22); 

   /* console.log(solder);*/
     console.log(solder_attack);


    const battle = new Battle(json.armies);

    battle.start();
  }
}
