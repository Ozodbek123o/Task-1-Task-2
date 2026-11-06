import { Developer } from './developer.interface.js';
import { Game } from './game.js';

export class RacingGame extends Game {
  developGame(): void {
    console.log('-----------');
    console.log(`Developing Racing Game... using ${this.developer.constructor.name}`);
    this.developer.writeCode();
    console.log('-----------');
  }
}
