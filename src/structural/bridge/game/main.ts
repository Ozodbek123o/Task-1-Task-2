import { pathToFileURL } from 'node:url';
import { CppDeveloper } from './cpp-developer.js';
import { FootballGame } from './football-game.js';
import { JavaDeveloper } from './java-developer.js';
import { RacingGame } from './racing-game.js';

export function runBridgeGameDemo(): void {
  console.log('=== Bridge Pattern (game) Demo ===');
  const combinations = [
    new RacingGame(new JavaDeveloper()),
    new RacingGame(new CppDeveloper()),
    new FootballGame(new JavaDeveloper()),
    new FootballGame(new CppDeveloper()),
  ];
  combinations.forEach((game) => game.developGame());
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runBridgeGameDemo();
}
