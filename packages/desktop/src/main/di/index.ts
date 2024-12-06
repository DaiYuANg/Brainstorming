import { Container } from 'inversify';
import { DatabaseModule } from '../module/DatabaseModule';
import { StoreModule } from '../module/Store';

const container = new Container();
container.load(DatabaseModule, StoreModule);

export { container };
