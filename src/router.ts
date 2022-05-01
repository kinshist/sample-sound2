import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Training1Guide from './pages/Training1Guide.vue';

// ルートの定義
const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/training1-guide',
    component: Training1Guide,
  },
];

// ルーターの作成
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
