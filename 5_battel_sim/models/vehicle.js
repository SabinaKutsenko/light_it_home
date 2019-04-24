import Unit from "./unit";

export default class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this._operators = operators || [];  // 1-3 unit
  }

  makeDamage(operators) {
    // return (0.5 * (1 + health / 100) * random(50 + experience, 100)) / 100;
    return 0.1 + operators.experience / 100;
  }

  attackSuccess(health, operators) {
    let gavg = {
      let result;
      for( let i = 0, i < operators.length, i++ ) {
        result += operators[i].attackSuccess(operators[i].health);
      }
    }

    return 0.5 *(1 + health / 100) * gavg 
  }

  getTotalHealth() {}

  set recharge(val) {
    if ( val < 1000 ) {
      this._recharge = 1000;  // ms
    } else {
      this._recharge = val;
    }
  }

  isAlive(health, operators) {
    return (health > 0 && operators.length > 0) ? true : false;
  }

  incExpForOperators(operator) {

  }

  _delete() {}
}