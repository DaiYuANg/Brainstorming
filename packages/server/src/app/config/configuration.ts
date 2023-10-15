import * as process from 'process';

interface Configuration {
  port: number;
  database: DatabaseConfiguration;
  auth: AuthConfiguration;
}

interface AuthConfiguration {
  defaultUser: string;
  defaultPassword: string;
}

interface DatabaseConfiguration {
  host: string;
  port: number;
}

export default (): Configuration => {
  return {
    port: parseInt(process.env.BRAINSTORM_SERVER_PORT!) || 3000,
    database: {
      host: process.env.BRAINSTORM_SERVER_DATABASE_URL || 'localhost',
      port: parseInt(process.env.BRAINSTORM_SERVER_DATABASE_PORT!) || 5432,
    },
    auth: {
      defaultUser: process.env.BRAINSTORM_SERVER_ADMINISTRATOR || 'admin',
      defaultPassword: crypto.randomUUID(),
    },
  };
};

export { Configuration };
