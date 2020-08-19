import { writeFile } from 'fs';
import { config } from 'dotenv';

const targetPath = [
  './src/environments/environment.ts',
  './src/environments/environment.prod.ts'
];

console.log('Reading environment variables and updating angular...');
config();

let n = 0;

function success(): void {
  if (n === 0) { n++; }
  else if (n === 1) { console.log('Success!'); }
}

const envConfigFile = `export const environment = {
  comingSoon: ${process.env.COMING_SOON || 0},
  production: ${process.env.PRODUCTION || false}
};
`;

const envProdConfigFile = `export const environment = {
  comingSoon: ${process.env.COMING_SOON || 0},
  production: ${process.env.PRODUCTION || true}
};
`;

writeFile(targetPath[0], envConfigFile, err => {
  if (err) { throw console.error(err); }
  else { success(); }
});

writeFile(targetPath[1], envConfigFile, err => {
  if (err) { throw console.error(err); }
  else { success(); }
});


