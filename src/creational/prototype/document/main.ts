import { pathToFileURL } from 'node:url';
import { Document } from './document.js';
import { DocumentFactory } from './document-factory.js';

export function runDocumentPrototypeDemo(): void {
  console.log('=== Document Prototype Pattern Demo ===');
  const document = new Document(101, 'Study Notes', 'Prototype pattern notes.', 'Azamov', [
    'design-patterns',
    'study',
  ]);

  const documentFactory = new DocumentFactory(document);
  const firstCopy = documentFactory.cloneDocument();
  const secondCopy = documentFactory.cloneDocument();

  firstCopy.title = 'Updated Study Notes';
  firstCopy.content = 'Updated content for the first copy.';
  firstCopy.tags.push('first-copy');
  secondCopy.title = 'Team Notes';
  secondCopy.content = 'A separate document copy.';
  secondCopy.tags[0] = 'team-work';

  console.log('First copy:', firstCopy.toString());
  console.log('Second copy:', secondCopy.toString());
  console.log('Original remains unchanged:', document.toString());
  console.log('All instances are distinct:', document !== firstCopy && firstCopy !== secondCopy);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runDocumentPrototypeDemo();
}
