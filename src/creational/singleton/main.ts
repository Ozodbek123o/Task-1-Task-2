import { pathToFileURL } from 'node:url';
import { DatabaseHelper } from './database-helper.js';

export function runSingletonDemo(): void {
  console.log('=== Singleton Pattern Demo ===');
  const firstReference = DatabaseHelper.getInstance();
  const secondReference = DatabaseHelper.getInstance();
  console.log('Both calls return the same instance:', firstReference === secondReference);
  const databaseHelper = firstReference;
  databaseHelper.getData();
  databaseHelper.executeQuery('select * from instances limit 1');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runSingletonDemo();
}
