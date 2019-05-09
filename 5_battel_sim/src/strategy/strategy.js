import {random} from "../helper/helper";

export default class Strategy {
  static getSquad( army, strategy) {
    let { squads } = army;
    if (strategy === "weakest") {
      let targetSquad = squads[0];
      for(let i=0; squads.length > i; i++) {
        targetSquad = (targetSquad.attackSuccess() > squads[i].attackSuccess()) ? squads[i] : targetSquad;
      }
      return targetSquad;
    } else if (strategy === "strongest") {
      let targetSquad = squads[0];
      for(let i=0; squads.length > i; i++) {
        targetSquad = (targetSquad.attackSuccess() < squads[i].attackSuccess()) ? squads[i] : targetSquad;
      }
      return targetSquad;
    } else {
      return squads[random(0, squads.length - 1)];
    }
  }
}