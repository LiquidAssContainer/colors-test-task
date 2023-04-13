import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgLoader from 'vite-svg-loader';
// import checker from 'vite-plugin-checker';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    tsconfigPaths(),
    svgLoader(),
    // checker({ vueTsc: true }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import 'src/shared/ui/styles'\n`,
      },
    },
  },
});
