import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  base: '',
  plugins: [vue(), vueJsx(), tsconfigPaths(), svgLoader()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import 'src/shared/ui/styles'\n`,
      },
    },
  },
});
