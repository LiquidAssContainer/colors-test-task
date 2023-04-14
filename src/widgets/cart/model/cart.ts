import { Commit } from 'vuex';
import { items } from './items';

export interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
  img: string;
  isRemoved?: boolean;
}

interface State {
  items: Product[];
}

interface Context {
  commit: Commit;
  state: State;
}

export const cartStore = {
  namespaced: true,
  state: (): State => {
    return {
      items: items,
    };
  },
  mutations: {
    add(state: State, product: Product) {
      state.items.push(product);
    },
    remove(state: State, id: string) {
      const index = getIndexById(state.items, id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    increment(state: State, id: string) {
      const item = getItemById(state.items, id);
      if (item) {
        item.amount++;
      }
    },
    decrement(state: State, id: string) {
      const item = getItemById(state.items, id);
      if (item) {
        item.amount--;
      }
    },
    clear(state: State) {
      state.items = [];
    },
    toggleRemoved: (state: State, id: string) => {
      const item = getItemById(state.items, id);
      if (item) {
        item.isRemoved = !item.isRemoved;
      }
    },
    cleanAllRemoved: (state: State) => {
      state.items = state.items.filter(({ isRemoved }) => !isRemoved);
    },
  },
  actions: {
    add: ({ state, commit }: Context, product: Omit<Product, 'amount'>) => {
      const hasProduct = getItemById(state.items, product.id);
      if (!hasProduct) {
        commit('add', { ...product, amount: 1 });
      }
    },
    remove: ({ commit }: Context, id: string) => {
      commit('remove', id);
    },
    increment: ({ commit }: Context, id: string) => {
      commit('increment', id);
    },
    decrement: ({ state, commit }: Context, id: string) => {
      const item = getItemById(state.items, id);
      if (!item) return;

      if (item.amount > 1) {
        commit('decrement', id);
      } else {
        // commit('remove', id);
        commit('toggleRemoved', id);
      }
    },
    clear: ({ commit }: Context) => {
      commit('clear');
    },
    toggleRemoved: ({ commit }: Context, id: string) => {
      commit('toggleRemoved', id);
    },
    cleanAllRemoved: ({ commit }: Context) => {
      commit('cleanAllRemoved');
    },
  },
  getters: {
    totalAmount: (state: State) => {
      return state.items.reduce(
        (acc: number, { amount }: Product) => acc + amount,
        0,
      );
    },
    totalPrice: (state: State) => {
      return state.items.reduce(
        (acc: number, { price, amount }: Product) => acc + price * amount,
        0,
      );
    },
    amountById: (state: State) => (id: string) => {
      const item = getItemById(state.items, id);
      return item?.amount || 0;
    },
  },
};

function getItemById(items: Product[], id: string) {
  return items.find((elem: Product) => elem.id === id);
}

function getIndexById(items: Product[], id: string) {
  return items.findIndex((elem: Product) => elem.id === id);
}
