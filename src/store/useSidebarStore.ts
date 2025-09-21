import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarState {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  showSettingsSubmenu: boolean;
  activeSettingsTab?: string;
  toggleCollapsed: (val?:boolean) => void;
  setMobileOpen: (open: boolean) => void;
  setShowSettingsSubmenu: (show: boolean) => void;
  setActiveSettingsTab: (tab: string) => void;
  resetMobileState: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      isMobileOpen: false,
      showSettingsSubmenu: false,
      activeSettingsTab: undefined,
      toggleCollapsed: (value) => set((state) => ({ isCollapsed: value ||  !state.isCollapsed })),
      setMobileOpen: (open) => set({ isMobileOpen: open }),
      setShowSettingsSubmenu: (show) => set({ showSettingsSubmenu: show }),
      setActiveSettingsTab: (tab) => set({ activeSettingsTab: tab }),
      resetMobileState: () => set({ isMobileOpen: false }),
    }),
    {
      name: 'ease-gitlab-sidebar',
      partialize: (state) => ({ isCollapsed: state.isCollapsed }),
    }
  )
);