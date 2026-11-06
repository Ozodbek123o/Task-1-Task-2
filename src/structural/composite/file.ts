import { FileSystem } from './file-system.interface.js';

export class File implements FileSystem {
  constructor(private readonly name: string) {}

  show(depth = 0): void {
    console.log(`${'\t'.repeat(depth)}File: ${this.name}`);
  }
}
