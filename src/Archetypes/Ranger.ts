import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    this._archetypeInstances += 1;
    return this._archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}