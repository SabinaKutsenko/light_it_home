import {random} from "../helper/helper";
import Strategy from "../strategy/strategy";

export default class Battle {
  constructor(armies) {
    this._armies = armies;
  }

  get armies() {
    return this._armies;
  }

  set armies(value) {
    this._armies = value;
  }

  checkArmies() { 
    this.armies = this.armies.filter(army => army.isAlive());
  }

  start() {
   while (true) {

      //получаем случайную атакующую армию
      let attackArmy = this.armies[random(0, this.armies.length - 1)];
      
      // получем данные атакующей армии
      let { squads, strategy, name } = attackArmy;
      // получаем случайный ее отряд
      let attackSquad = squads[random(0, squads.length - 1)];

      // цель изходя из вероятного урона
      // выбираем случайный отряд др армии  ( искючаем атакующую армию)
      const getDefArmy = (armies, attackArmy) => {
        let defArmy = this.armies[random(0, this.armies.length - 1)];     
        if (attackArmy !== defArmy) {
          return defArmy;
        } else {
          return getDefArmy(this.armies, attackArmy);
        }
      }
      let defArmy = getDefArmy(this.armies, attackArmy);

      //Выбираем отряд для нападения согласно стратегии атакующего
      let defSquad = Strategy.getSquad(defArmy, attackArmy.strategy);

      // Проверяем успех атаки и атакуем

      if (attackSquad.attackSuccess() > defSquad.attackSuccess()) {
          /*console.log(attackSquad.name, attackSquad.type, "=>", defSquad.name, defSquad.type);*/
          attackSquad.checkRecharge(); // проверяем таймер и меняем статус на true
          
          defSquad.damageReceived(attackSquad.makeDamage()); // наносим удар

          defSquad.incrementExp(); // добавляем опыт защитникам
          attackSquad.incrementExp(); // добавляем опыт атакующим
          
          attackSquad.setRecharge(); // ставим на перезарядку всех атакующих.
          defSquad.setRecharge(); // ставим на перезарядку всех защитников.

          let defSquad_befor = defArmy.squads;
          let armies_befor = this.armies;


          defSquad.checkUnits(); // переписываем массив _отрядов толко с живыми юнитами
          defArmy.checkSquads(); // переписываем массив _армии только с живими отрядами
          // переписываем массив всеx армий с живыми отрядами
          this.checkArmies();       

         // проверяем сколько и кого убито и выводим результат если данные изменились
        if (defArmy.squads.length < defSquad_befor.length ||
          this.armies.length < armies_befor.length) {
           console.log(attackSquad.name, attackSquad.type, "killed last squad of", defSquad.name, defSquad.type);

         // если отрядов защиты стало меньше( данные изменились) мы выводим новый список участников
          if (defArmy.squads.length < defSquad_befor.length) {
            console.log(`---isAlive List---`);
            for (let i = 0; i < this.armies.length; i++) {
               console.log(`${this.armies[i].name} ${this.armies[i].squads.length} squads`);
            }
          }

          // если армий меньше, сообщаем что текущих защитников убили
          if (this.armies.length < armies_befor.length) {
            console.log(`Army ${defArmy.name} died`);
          }
          console.log("------------End Round--------------");
        }
      }

      //Конец, если осталась только одна армия
      if (this.armies.length === 1) {
        console.log(this.armies[0].name, " WIN!");
        break;
      }
    }
  }

}