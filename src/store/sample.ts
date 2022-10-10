// store/sample.ts
import { defineStore } from 'pinia';

export const useFilterStore = defineStore({
  id: 'sample-store',
  state: () => {
    return {
      sampleList: ['item1', 'item2']
    };
  },
  actions: {},
  getters: {
    getSampleList: (state) => state.sampleList
  }
});
