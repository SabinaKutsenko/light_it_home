export default class BaseUnit {
  constructor(name, health, recharge) {
    this.name = name;
    this.health = health;
    this.recharge = recharge;
  }

  makeDamage() {
    // number
    throw new Error("This method has to be defined");
  }

  isAlive(health) {
    // bool
    return (health > 0) ? true : false;
  }

  attackSuccess() {
    // number
    throw new Error("This method has to be defined");
  }

  damageReceived() {
    // damage: number
    throw new Error("This method has to be defined");
  }
}
