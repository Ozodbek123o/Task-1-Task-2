import { Developer } from './developer.interface.js';

export abstract class Game {
  constructor(protected readonly developer: Developer) {}

  abstract developGame(): void;
}
