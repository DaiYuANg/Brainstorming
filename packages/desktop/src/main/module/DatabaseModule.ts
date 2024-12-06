import { ContainerModule, interfaces } from 'inversify';
import { DataSource } from 'typeorm';
import { Photo } from '../entity/Photo';

const DatabaseModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(DataSource).toFunction(
    new DataSource({
      type: 'better-sqlite3',
      database: './test.db',
      entities: [Photo],
      synchronize: true,
      logging: true,
    }),
  );
});

export { DatabaseModule };
