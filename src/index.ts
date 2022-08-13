import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import getRandomInt from './utils';

const player1 = new Character('Djodjo');
const player2 = new Character('Ali');
const player3 = new Character('Jade');

const randomNumber = getRandomInt(5, 10);

for (let i = 0; i <= randomNumber; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battleArray: Battle[]) => {
  battleArray.forEach((battle) => {
    battle.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};