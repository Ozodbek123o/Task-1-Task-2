import { pathToFileURL } from 'node:url';
import { File } from './file.js';
import { Folder } from './folder.js';

export function runFileSystemDemo(): void {
  const computer = new Folder('Computer');
  const documents = new Folder('Documents');
  const photos = new Folder('Photos');
  const university = new Folder('University');

  documents.add(new File('resume.pdf'));
  documents.add(new File('homework.docx'));
  university.add(new File('Java.java'));
  university.add(new File('Python.py'));
  documents.add(university);

  photos.add(new File('photo1.jpg'));
  photos.add(new File('photo2.jpg'));

  computer.add(documents);
  computer.add(photos);
  computer.add(new File('music.mp3'));

  computer.show();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runFileSystemDemo();
}
