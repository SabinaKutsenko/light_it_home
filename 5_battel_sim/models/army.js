import Squad from "./squad";

export default class Army extends Squad {
  constructor(units, strategy) {
    super();
    this.units = units;
    this.strategy = strategy;
  }

  isAlive() {
  	return Squad.length > 0 ? true : false
  }

  checkSquads() {}
}