import { ContainerModule, interfaces } from 'inversify';
import { DataSource } from 'typeorm';
import { Photo } from '../entity/Photo';

let DatabaseModule = new ContainerModule(
  (bind: interfaces.Bind, _unbind: interfaces.Unbind) => {
    bind(DataSource).toFunction(
      new DataSource({
        type: 'better-sqlite3',
        database: './test.db',
        entities: [Photo],
        synchronize: true,
        logging: true,
      }),
    );
  },
);

export { DatabaseModule };
