import { Commit } from 'vuex';
import { items } from './items';

export interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
  img: string;
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
  },
  actions: {
    add: ({ state, commit }: Context, product: Omit<Product, 'amount'>) => {
      const hasProduct = getItemById(state.items, product.id);
      if (!hasProduct) {
        commit('add', { ...product, amount: 1 });
      }
    },
    remove: ({ state, commit }: Context, id: string) => {
      commit('remove', id);
    },
    increment: ({ state, commit }: Context, id: string) => {
      commit('increment', id);
    },
    decrement: ({ state, commit }: Context, id: string) => {
      const item = getItemById(state.items, id);
      if (!item) return;

      if (item.amount > 1) {
        commit('decrement', id);
      } else {
        commit('remove', id);
      }
    },
    clear: ({ commit }: Context) => {
      commit('clear');
    },
  },
  getters: {
    totalAmount: (state: any) => {
      return state.items.reduce(
        (acc: number, { amount }: any) => acc + amount,
        0,
      );
    },
    totalPrice: (state: any) => {
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
