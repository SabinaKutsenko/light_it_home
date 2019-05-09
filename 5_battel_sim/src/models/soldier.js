import Unit from "./unit.js";
import {random} from "../helper/helper";

export default class Soldier extends Unit {
  _experience = 0; 

  constructor(name, health, recharge) {
    super(name, health, recharge);
  }

  setExperience(value) {
    if (value > 50) {
      this._experience = 50;
    } else if (value < 0) {
      this._experience = 0;
    } else {
      this._experience = value;
    }
  } 

  /*get _experience() {
    return this._experience;
  }*/

  attackSuccess() {
    return 0.5 * (1 + this.health) * random(50 + this._experience, 100) / 100;
  }

  makeDamage() {
    return 0.05 + this._experience / 100;
  } 

  incrementExp() {
    this.setExperience(this._experience +=1);
  }
}