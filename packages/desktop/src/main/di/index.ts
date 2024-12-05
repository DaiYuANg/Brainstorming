import { Container } from 'inversify';
import { DatabaseModule } from '../module/DatabaseModule';

const container = new Container();
container.load(DatabaseModule);

export { container };
