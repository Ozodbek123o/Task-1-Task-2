import { Copyable } from '../copyable.interface.js';

export class GameCharacter implements Copyable<GameCharacter> {
  constructor(
    private id: number,
    private name: string,
    private level: number,
    private weapon: string
  ) {}

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getLevel(): number {
    return this.level;
  }

  setLevel(level: number): void {
    this.level = level;
  }

  getWeapon(): string {
    return this.weapon;
  }

  setWeapon(weapon: string): void {
    this.weapon = weapon;
  }

  clone(): GameCharacter {
    return new GameCharacter(this.id, this.name, this.level, this.weapon);
  }

  toString(): string {
    return `GameCharacter(id=${this.id}, name='${this.name}', level=${this.level}, weapon='${this.weapon}')`;
  }
}
