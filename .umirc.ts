import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  copy: [
    {
      from: './node_modules/libpag/lib/libpag.wasm',
      to: './libpag.wasm'
    }
  ],
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
