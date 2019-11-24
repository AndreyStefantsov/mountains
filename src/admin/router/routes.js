export default [
    {
      path: "/",
      component: () => import("components/pages/skills.vue"),
      meta: {
        title: "Блок «Скиллы»"
      }
    },
    {
      path: "/projects",
      component: () => import("components/pages/projects.vue"),
      meta: {
        title: "Блок «Работы»"
      }
    },
    {
      path: "/comments",
      component: () => import("components/pages/comments.vue"),
      meta: {
        title: "Блок «Отзывы»"
      }
    },
    {
      path: "/login",
      component: () => import("components/pages/login.vue"),
      meta: {
        public: true
      }
    }
  ];