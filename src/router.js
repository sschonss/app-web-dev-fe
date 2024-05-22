import { createRouter, createWebHistory } from "vue-router";
import TopicListPage from "./pages/TopicListPage.vue";
import TopicFormPage from "./pages/TopicFormPage.vue";

const routes = [
  { path: "/", component: TopicListPage },
  { path: "/topics/new", component: TopicFormPage },
  { path: "/topics/:id/edit", component: TopicFormPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
