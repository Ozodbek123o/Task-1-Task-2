import { FileSystem } from './file-system.interface.js';

export class Folder implements FileSystem {
  private readonly children: FileSystem[] = [];

  constructor(private readonly name: string) {}

  add(child: FileSystem): void {
    this.children.push(child);
  }

  remove(child: FileSystem): boolean {
    const index = this.children.indexOf(child);
    if (index === -1) {
      return false;
    }

    this.children.splice(index, 1);
    return true;
  }

  show(depth = 0): void {
    console.log(`${'\t'.repeat(depth)}Folder: ${this.name}`);
    for (const child of this.children) {
      child.show(depth + 1);
    }
  }
}
