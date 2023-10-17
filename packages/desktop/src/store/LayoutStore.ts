import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LayoutStore {
  navbarWidth: number;
  increase: (by: number) => void;
}

const useLayoutStore = create<LayoutStore>()(
  devtools(
    (set) => ({
      navbarWidth: 250,
      increase: (by: number) => {
        set(() => {
          return {
            navbarWidth: by,
          };
        });
      },
    }),
    { name: 'layoutStore' },
  ),
);

export { useLayoutStore };
export type { LayoutStore };
