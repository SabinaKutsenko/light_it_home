/*import BaseUnit from "./baseUnit";*/
import {gavg} from "../helper/helper";

export default class Squad /*extends BaseUnit*/ {
  constructor(name, type, units) {
/*    super();*/
    this.name = name;
    this.type = type;
    this._units = units;
  }

  get units() {
    return this._units;
  }

  set units(value) {
    this._units = value;
  }

  makeDamage() {
    // получаем юнитов склада, отовых к бою
    let recharged = this._units.filter(unit => unit.isRecharged);
    // считаем наносимый урон этих юнитов
    let arrDamage = recharged.map(unit => unit.makeDamage());
    return (arrDamage.length === 0) ? 0 : arrDamage.reduce((acc, item) => acc + item);
  } 

  isAlive() {
    return this._units.some(unit => unit.isAlive());
  }

  checkUnits() {
    let wasUnits = this._units.length;
    // переписываем массив units
    this._units = this._units.filter(unit => {
      return unit.isAlive();
    });
    let isUnits = this._units.length;
    // если после боя стало меньше, то отображаем в логе
    if(wasUnits > isUnits) {
      console.log('Squad of', this.name, 'is DEAD. (', wasUnits - isUnits , this.type ,')' );
    }
  }

  
  attackSuccess() {
    /*The attack success probability of a squad is determined as the geometric average o the attack success probability ofeach member.*/
    let unitsAttackSuccessArr = this._units.map(unit => unit.attackSuccess());
    return gavg(unitsAttackSuccessArr);
  } 

  damageReceived(totalDamage) {
    /*The damage received on a successful attack is distributed evenly to all squad members. 
    The damage inflicted on asuccessful attack is the accumulation of the damage inflicted by each squad member.*/
    let damage = totalDamage / this._units.length;
    this._units.forEach(unit => unit.damageReceived(damage));
  } 

  setRecharge() {
    let toRecharge = this._units.filter(unit => 
      unit.isRecharged);
    toRecharge.forEach(unitToRecharge => {
      unitToRecharge.setRecharge();
    });
  }

  checkRecharge() {
    // получаем всех кто неперезаряжен и проверяем истекло ли время перезарядки
    let onRecharge = this._units.filter(unit => !unit.isRecharged);
    onRecharge.forEach(unitOnRecharge => unitOnRecharge.checkRecharge());
  }

  incrementExp() {
    this._units.forEach(unit => unit.incrementExp());
  }
}