// store/filters.ts
import { defineStore } from 'pinia'

export const useFilterStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: ['youtube', 'twitch'],
    }
  },
  actions: {},
  getters: {
    getFiltersList: (state) => state.filtersList,
  },
})
