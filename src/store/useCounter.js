import create from 'zustand';

const useCounter = create((set, get) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));

export default useCounter;
