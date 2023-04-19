import { Logger } from '../logger';

export const LegacyLogger: Logger = {
  prefix: 'legacy logger',
  log(message: string): void {
    console.log(`${this.prefix} (legacy): ${message}`);
  },
};
