import Unit from "./unit";
import {random, gavg} from "../helper/helper";

export default class Vehicle extends Unit {
  constructor(name, health, recharge, operators) {
    super(name, health, recharge);
    this.operators = operators; 
    this.health = health;
  }

  isAlive() {
    return super.isAlive() && (this.operators.some(unit => unit.isAlive()));
  }

  makeDamage() {
    /*0.1 + sum(operators.experience / 100)*/
    let arrOperatorsExp = this.operators.map(operator => operator._experience);
    return 0.1 + arrOperatorsExp.reduce((acc, item) => acc + item) / 100;
  }

  attackSuccess() {
    /*The Vehicle attack success probability is determined as follows:
    0.5 * (1 + vehicle.health / 100) * gavg(operators.attack_success)
    where gavg is the geometric average of the attack success of all the vehicle operators*/
    let arrAttackSuccess = this.operators.map(operator => operator.attackSuccess());
    return 0.5 * (1 + this.health / 100) * gavg(arrAttackSuccess);
  }

  damageReceived(damage) {
    /*The total damage inflicted on the vehicle is distributed to the operators as follows:
     60% of the total damage is inflictedon the vehicle 
     20% of the total damage is inflicted on a random vehicle operator 
     The rest of the damage is inflictedevenly to the other operators (10% each)*/

    super.damageReceived(damage * 0.6);
    let randOperator = random(0, this.operators.length - 1);
    this.operators.forEach((operator, idx) => {
       (randOperator === idx) ?
       operator.damageReceived(damage * 0.2) : operator.damageReceived(damage * 0.1)
    });
  }

  incrementExp() {
    this.operators.forEach(operator => operator.incrementExp());
  }
}
