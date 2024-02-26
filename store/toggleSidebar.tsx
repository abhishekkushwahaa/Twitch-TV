"use client";

// Zustand is a small, fast and scaleable bearbones state-management solution.
// What the state-management library does is that it allows you to share state between components without having to use props.
// Why not use React's Prop Drilling? Because it's not scalable and it's not efficient.

import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  onExpand: () => set({ collapsed: false }),
  onCollapse: () => set({ collapsed: true }),
}));
