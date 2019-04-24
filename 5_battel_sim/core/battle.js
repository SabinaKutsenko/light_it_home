import {Strategy} from "../strategy/strategy";

export class Battle {
  armies = [];

  constructor(armies) {
    this.armies = armies;
  }

  start() {
  	function randomInteger(min, max) {
	    var rand = min + Math.random() * (max + 1 - min);
	    rand = Math.floor(rand);
	    return rand;
	  }

	 // получаем весь массив
  	 let armies = this.armies;
  	 //получаем случайную атакующую армию
      let attackArmy = armies[randomInteger(0, armies.length - 1)];
      // получем данные армии
      let { squads, strategy, name } = attackArmy;
      // получаем случайный ее отряд
      let attackSquad = squads[randomInteger(0, squads.length - 1)];

      

      //выбираем цель изходя из вероятного урона
      	// - случайный отряд др армии  ( в массиве нет текущей армии)
      	// - самый слабый отряд  -
      	                    // считаем предпологаемый урон каждой армии ( average the attack success каждой еденицы ) units.length
      	// - самый сильный отряд  -
      	                    // считаем предпологаемый урон каждой армии
const gettargetArmy = (armies, attackArmy) => {
      let targetArmy = armies[randomInteger(0, armies.length - 1)];
      if (attackArmy !== targetArmy) {
        return targetArmy;
      } else {
      	targetArmy(armies, attackArmy);
      }
  }
  let targetArmy = gettargetArmy(armies, attackArmy);

     /* let getTargetArmy = (armies)  => {
	    switch (this.strategy) {
	      case "random":
	        return Strategy.randomStrategy(armies, this);
	        break;
	      case "weakest":
	        return Strategy.weakestStrategy(armies, this);
	        break;
	      case "strongest":
	        return Strategy.strongestStrategy(armies, this);
	        break;
	    }
	  }*/

	  // 
	  // war
	  let attackSuccess = 1 /*attackSquad.attackSuccess();*/
      let targetSuccess = 2 /*targetSquad.attackSuccess();*/

      if (attackSuccess > targetSuccess) { 
      	// attackSquad наносит damage
      	// targetSquad получет урон 

      } else {
      	// ничья
      }

      // attackSquad  перезаряжается

      //

      console.log('attackArmy', attackArmy);
     /* console.log(strategy);*/
      console.log('targetArmy', targetArmy);
      console.log();
      console.log();
      console.log();


  }
}
