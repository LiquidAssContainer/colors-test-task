import { createApp } from 'vue';
import { createStore } from 'vuex';
import { App } from './app';
import { cartStore } from 'widgets/cart/model/cart';
import { productsStore } from './widgets/product/model/products';

const store = createStore({
  modules: {
    cart: cartStore,
    products: productsStore,
  },
});

const app = createApp(App);

app.use(store).mount('#app');
