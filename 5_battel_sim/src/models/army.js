import Strategy from "../strategy/strategy";

export default class Army {
  constructor(name, strategy, squads) {
    this.name = name;
    this.strategy = strategy;
    this._squads = squads;
  }

  get squads() {
    return this._squads;
  }

  set squads(value) {
    this._squads = value;
  }

  isAlive() {
    return this._squads.some(squad => squad.isAlive());
  }

  checkSquads() {
    this._squads = this.squads.filter(squad => squad.isAlive());
  }
}