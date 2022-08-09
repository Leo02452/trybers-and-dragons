export default abstract class Race {
  protected _name: string;
  protected _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }
}

console.log(Race.name);