import { Copyable } from '../copyable.interface.js';

export class Document implements Copyable<Document> {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public author: string,
    public tags: string[] = []
  ) {}

  clone(): Document {
    return new Document(this.id, this.title, this.content, this.author, [...this.tags]);
  }

  toString(): string {
    return `Document(id='${this.id}', title='${this.title}', content='${this.content}', author='${this.author}', tags=[${this.tags.join(', ')}])`;
  }
}
