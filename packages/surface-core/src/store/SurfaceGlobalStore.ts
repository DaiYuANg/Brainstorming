import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { DefaultComponent } from '../component';

const useSurfaceGlobalStore = create<SurfaceGlobalStoreProp>()(
  devtools(
    (_setState, _getState, store) => {
      console.log(store);
      return {
        plugins: {
          default: DefaultComponent,
        },
      };
    },
    {
      name: 'surfaceGlobal',
    },
  ),
);

export { useSurfaceGlobalStore };
