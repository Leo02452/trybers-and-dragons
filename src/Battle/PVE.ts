import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
import PVP from './PVP';

export default class PVE extends Battle {
  player: Fighter;
  fighters: SimpleFighter[];

  constructor(player: Fighter, fighters: SimpleFighter[]) {
    super(player);
    this.player = player;
    this.fighters = fighters;
  }

  fight(): number {
    const finalBattleResult = this.fighters
      .reduce((acc: number, fighter: SimpleFighter) => {
        if (acc !== -1) {
          const pvp = new PVP(this.player, fighter);
          const battleResult = pvp.fight();
          return battleResult;
        }
        return acc;
      }, 0);
    return finalBattleResult;
  }
}