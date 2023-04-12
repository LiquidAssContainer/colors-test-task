import { createApp } from 'vue';
import { createStore } from 'vuex';
import { App } from './app';
import { cartStore } from 'widgets/cart/model/cart';

const store = createStore({
  modules: {
    cart: cartStore,
  },
});

const app = createApp(App);

app.use(store).mount('#app');
