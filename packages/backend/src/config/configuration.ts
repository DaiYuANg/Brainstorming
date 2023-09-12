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
    port: parseInt(process.env.port!) || 8080,
    database: {
      host: process.env.DATABASE_PORT || 'localhost',
      port: parseInt(process.env.port!) || 3306,
    },
  };
};

// export default () => ({
//     port: parseInt(process.env.PORT, 10) || 3000,
//     database: {
//         host: process.env.DATABASE_HOST,
//         port: parseInt(process.env.DATABASE_PORT, 10) || 5432
//     }
// });

export { Configuration };
