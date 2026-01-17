import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nukeguys",
  description: "Record unorganized thoughts. Keep organized notes.",

  // _로 시작하는 폴더 제외
  srcExclude: ["**/_*/**", "**/_*.md"],

  // sitemap
  sitemap: {
    hostname: "https://journal.kkick.xyz",
  },

  // 마지막 수정일 표시
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Learning", link: "/learning/" },
    ],

    sidebar: {
      "/notes/": [
        {
          text: "Notes",
          items: [{ text: "소개", link: "/notes/" }],
        },
      ],
      "/learning/": [
        {
          text: "Learning",
          items: [{ text: "소개", link: "/learning/" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/nukeguys" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/seungkyu-sung" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Built with VitePress",
      copyright: "© 2026 nukeguys",
    },

    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
  },
});
