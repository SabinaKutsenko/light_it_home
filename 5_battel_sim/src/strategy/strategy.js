export default class Strategy {

	static strongestStrategy(armies, attackArmy) {
    let attackSquad = attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let targetArmy = this._strongestTargetArmy(armies, attackArmy);
    let targetSquad = this._randomTargetSquad(targetArmy);

    return {
      attackSquad,
      targetArmy,
      targetSquad
    };
  }

  static weakestStrategy(armies, attackArmy) {
    let attackSquad = attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let targetArmy = this._weakestTargetArmy(armies, attackArmy);
    let targetSquad = this._randomTargetSquad(targetArmy);

    return {
      attackSquad,
      targetArmy,
      targetSquad
    };
  }
  static randomStrategy(armies, attackArmy) {
    let attackSquad = attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let targetArmy = this._randomTargetArmy(armies, attackArmy);
    let targetSquad = this._randomTargetSquad(targetArmy);

    return {
      attackSquad,
      targetArmy,
      targetSquad
    };
  }
}