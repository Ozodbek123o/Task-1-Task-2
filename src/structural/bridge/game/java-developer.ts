import { Developer } from './developer.interface.js';

export class JavaDeveloper implements Developer {
  writeCode(): void {
    console.log('Writing Java code...');
  }
}
