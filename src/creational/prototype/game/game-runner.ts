import { pathToFileURL } from 'node:url';
import { CharacterFactory } from './character-factory.js';
import { GameCharacter } from './game-character.js';

export function runGamePrototypeDemo(): void {
  console.log('=== Game Character Prototype Pattern Demo ===');
  const character = new GameCharacter(1, 'Original Hero', 5, 'Iron Sword');
  const characterFactory = new CharacterFactory(character);
  const firstClone = characterFactory.cloneCharacter();
  const secondClone = characterFactory.cloneCharacter();

  firstClone.setName('Archer');
  firstClone.setLevel(8);
  firstClone.setWeapon('Longbow');
  secondClone.setName('Knight');
  secondClone.setLevel(12);
  secondClone.setWeapon('Steel Axe');

  console.log('First clone:', firstClone.toString());
  console.log('Second clone:', secondClone.toString());
  console.log('Original remains unchanged:', character.toString());
  console.log('Every clone is a new object:', character !== firstClone && firstClone !== secondClone);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runGamePrototypeDemo();
}
