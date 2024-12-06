import Store from 'electron-store';
import { ContainerModule } from 'inversify';

const StoreModule = new ContainerModule((bind) => {
  bind(Store).toFunction(new Store());
});

export { StoreModule };
