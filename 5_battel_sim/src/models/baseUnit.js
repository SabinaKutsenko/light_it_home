export default class BaseUnit {
  constructor(name, health, recharge) {
    this.name = name;
    this.health = health;
    this.recharge = recharge;
  }

  isAlive() {
    return this.health > 0;
  }

  attackSuccess() {
    return 0.5 * (1 + this.health / 100);
  }

  damageReceived(damage) {
    let newHealth = this.health - damage;
    this.setHealth(newHealth);
  }
}
