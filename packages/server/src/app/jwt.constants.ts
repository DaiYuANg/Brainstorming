import * as crypto from 'crypto';

export const jwtConstants = {
  secret: crypto.randomUUID(),
};
