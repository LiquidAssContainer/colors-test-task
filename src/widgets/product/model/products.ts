import { Commit } from 'vuex';
import { items } from './items';

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  popularity: number;
  date: number;
  features: {
    new: boolean;
    available: boolean;
    contract: boolean;
    exclusive: boolean;
    sale: boolean;
  };
}

type Sort = 'expensive' | 'cheap' | 'popular' | 'new';

interface State {
  items: Product[];
  amount: number;
  sort: Sort;
  filters: any;
}

interface Context {
  commit: Commit;
  state: State;
}

const sortFns = {
  expensive: (a: Product, b: Product) => (a.price < b.price ? 1 : -1),
  cheap: (a: Product, b: Product) => (a.price > b.price ? 1 : -1),
  popular: (a: Product, b: Product) => (a.popularity < b.popularity ? 1 : -1),
  new: (a: Product, b: Product) => (a.date < b.date ? 1 : -1),
};

export const productsStore = {
  namespaced: true,
  state: (): State => {
    return {
      items: items,
      amount: 428,
      sort: 'expensive',
      filters: [],
    };
  },
  mutations: {
    changeSort(state: State, sort: Sort) {
      state.sort = sort;
    },
    changeFilters(state: State, filters: any[]) {
      state.filters = filters;
    },
  },
  actions: {
    changeSort: ({ commit }: Context, sort: Sort) => {
      commit('changeSort', sort);
    },
    changeFilters: ({ commit }: Context, filters: any) => {
      const filtersArr = [];
      for (const filter in filters) {
        if (filters[filter]) {
          filtersArr.push(filter);
        }
      }
      commit('changeFilters', filtersArr);
    },
  },
  getters: {
    items: (state: State) => {
      const filtered = state.items.filter((item: any) => {
        for (const filter of state.filters) {
          if (!item.features[filter]) {
            return false;
          }
        }
        return true;
      });
      const sorted = filtered.sort(sortFns[state.sort]);

      return sorted;
    },
  },
};
