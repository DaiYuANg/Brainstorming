import * as process from 'process';

interface Configuration {
  port: number;
  database: DatabaseConfiguration;
  auth: AuthConfiguration;
  minio: MinioConfiguration;
}

interface AuthConfiguration {
  administrator: string;
  administratorPassword: string;
}

interface DatabaseConfiguration {
  host: string;
  port: number;
}

interface MinioConfiguration {}

export default (): Configuration => {
  return {
    port: parseInt(process.env.BRAINSTORM_SERVER_PORT!) || 3000,
    database: {
      host: process.env.BRAINSTORM_SERVER_DATABASE_URL || 'localhost',
      port: parseInt(process.env.BRAINSTORM_SERVER_DATABASE_PORT!) || 5432,
    },
    auth: {
      administrator: process.env.BRAINSTORM_SERVER_ADMINISTRATOR || 'admin',
      administratorPassword: crypto.randomUUID(),
    },
    minio: {},
  };
};

export { Configuration };
