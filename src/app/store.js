import { create } from 'zustand';

const useCakeStore = create((set) => ({
  selectedCake: null,
  selectedCream: null,
  selectedFruit: null,
  selectedSprin: null,
  orderCake: { cake: null, cream: null, fruit: null, sprinkle: null },

  setSelectedCake: (cake) => set({ selectedCake: cake }),
  setSelectedCream: (cream) => set({ selectedCream: cream }),
  setSelectedFruit: (fruit) => set({ selectedFruit: fruit }),
  setSelectedSprin: (sprinkle) => set({ selectedSprin: sprinkle }),
  setOrderCake: (order) => set({ orderCake: order }),

  reset: () =>
    set({
      selectedCake: null,
      selectedCream: null,
      selectedFruit: null,
      selectedSprin: null,
      orderCake: { cake: null, cream: null, fruit: null, sprinkle: null },
    }),
}));

export default useCakeStore;
