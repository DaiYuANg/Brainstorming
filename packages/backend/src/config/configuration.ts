import * as process from 'process';

interface Configuration {
  port: number;
  database: DatabaseConfiguration;
}

interface DatabaseConfiguration {
  host: string;
  port: number;
}

export default (): Configuration => {
  return {
    port: parseInt(process.env.ROCKIE_PORT!) || 3000,
    database: {
      host: process.env.DATABASE_PORT || 'localhost',
      port: parseInt(process.env.DATABASE_PORT!) || 5432,
    },
  };
};

export { Configuration };
