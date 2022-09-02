import { Appsignal } from '@appsignal/nodejs';
import * as dotenv from 'dotenv';

dotenv.config();

const name = process.env.APPSIGNAL_NAME;
const pushApiKey = process.env.APPSIGNAL_PUSH_API_KEY;
const active =
  process.env.APPSIGNAL_ACTIVE === '1' ||
  process.env.APPSIGNAL_ACTIVE === 'true';

export const appsignal = new Appsignal({
  active,
  name,
  pushApiKey,
  logLevel: 'trace',
  logPath: 'logs'
});
