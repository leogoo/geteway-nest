import { parse } from 'yaml';
import path from 'path';
import fs from 'fs';

function getEnv() {
  return process.env.NODE_ENV;
}

export function getConfig() {
  const env = getEnv();
  const configPath = path.join(process.cwd(), `./.config/.${env}.yaml`);
  const file = fs.readFileSync(configPath, 'utf8');
  const config = parse(file);
  return config;
}
