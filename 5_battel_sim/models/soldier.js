import Unit from "./unit";

export default class Soldier extends Unit {
  _experience = 0; // [0-50]

  set experience(val) {
    if (val > 0 && val <= 50) {
      this._experience = val;
    } else if (val < 0) {
      this._experience = 1;
    } else {
      this._experience = 50;
    }
  }

  get experience() {
    return this._experience;
  }

  attackSuccess(health, experience) {
    // number
    return 0.5 * (1 + health) * Math.random(50 + experience, 100) / 100;
  }

  makeDamage(experience) {
    // number
    return 0.05 + experience / 100
  }
}