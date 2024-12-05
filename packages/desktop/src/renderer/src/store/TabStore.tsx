import { create } from 'zustand';

interface Tab {
  id: string;
  label: string;
}

interface TabState {
  activeTab: string; // 当前选中的 Tab
  tabs: Tab[]; // 所有的 Tabs
  setActiveTab: (id: string) => void;
  addTab: () => string;
  removeTab: (id: string) => void;
  setTabLabel: (id: string, label: string) => void;
}

const useTabStore = create<TabState>((set) => ({
  activeTab: 'untitled-1',
  tabs: [{ id: 'untitled-1', label: 'Untitled' }],

  setActiveTab: (id) => set({ activeTab: id }),

  addTab: () => {
    const newTabId = `untitled-${Math.random().toString(36).substring(7)}`;
    set((state) => ({
      tabs: [...state.tabs, { id: newTabId, label: 'Untitled' }],
      activeTab: newTabId,
    }));
    return newTabId;
  },

  removeTab: (id) => {
    set((state) => {
      const newTabs = state.tabs.filter((tab) => tab.id !== id);
      const newActiveTab = newTabs.length > 0 ? newTabs[0].id : '';
      return {
        tabs: newTabs,
        activeTab: newActiveTab,
      };
    });
  },

  setTabLabel: (id, label) => {
    set((state) => ({
      tabs: state.tabs.map((tab) => (tab.id === id ? { ...tab, label } : tab)),
    }));
  },
}));
export { useTabStore };
