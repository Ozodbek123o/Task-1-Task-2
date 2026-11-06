import { Developer } from './developer.interface.js';
import { Game } from './game.js';

export class FootballGame extends Game {
  developGame(): void {
    console.log('-----------');
    console.log(`Developing Football Game... using ${this.developer.constructor.name}`);
    this.developer.writeCode();
    console.log('-----------');
  }
}
