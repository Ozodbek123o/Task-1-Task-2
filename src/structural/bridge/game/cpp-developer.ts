import { Developer } from './developer.interface.js';

export class CppDeveloper implements Developer {
  writeCode(): void {
    console.log('Writing C++ code...');
  }
}
