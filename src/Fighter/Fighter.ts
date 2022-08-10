import Energy from '../Energy';
import SimpleFighter from './SimplesFighter';

export default interface Fighter extends SimpleFighter {
  defense: number,
  energy?: Energy,

  special?(enemy: Fighter): void,
  levelUp(): void,
}