module.exports = {
  dest: "docs",
  base: "/test-vuepress-nested-group/",
  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器"
    }
  },
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  serviceWorker: true,
  theme: "@vuepress/theme-default",
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "docs",
    serviceWorker: {
      updatePopup: true
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Guide",
            link: "/guide/"
          },
          {
            text: "Nested",
            link: "/nested/"
          },
          {
            text: "Config Reference",
            link: "/config/"
          },
          {
            text: "Default Theme Config",
            link: "/default-theme-config/"
          },
          {
            text: "Changelog",
            link: "https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md"
          }
        ],
        sidebar: {
          "/guide/": genSidebarConfig("Guide"),
          "/nested/": genNestedSidebarConfig("Nested"),
          "/nested1/": genNestedSidebarConfig("Nested"),
          "/nested2/": genNestedSidebarConfig("Nested")
        }
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "指南",
            link: "/zh/guide/"
          },
          {
            text: "嵌套",
            link: "/zh/nested/"
          },
          {
            text: "配置",
            link: "/zh/config/"
          },
          {
            text: "默认主题",
            link: "/zh/default-theme-config/"
          },
          {
            text: "Changelog",
            link: "https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md"
          }
        ],
        sidebar: {
          "/zh/guide/": genSidebarConfig("指南"),
          "/zh/nested/": genNestedSidebarConfig("嵌套"),
          "/zh/nested1/": genNestedSidebarConfig("嵌套"),
          "/zh/nested2/": genNestedSidebarConfig("嵌套")
        }
      }
    }
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "basic-config",
        "assets",
        "markdown",
        "using-vue",
        "custom-themes",
        "i18n",
        "deploy"
      ]
    }
  ];
}

function genNestedSidebarConfig(title) {
  return [
    "",
    "/nested/foo/",
    "/nested/bar/",
    {
      title: `isolated ${title}`,
      collapsable: true,
      isolated: true,
      initialIsolatedOpen: true,
      sidebarDepth: 0,
      children: [
        "/nested/nested-header",
        {
          title: "foo",
          collapsable: true,
          sidebarDepth: 0,
          children: ["/nested/foo/foo-header", "/nested/foo/foo-footer"]
        },
        {
          title: "bar",
          collapsable: false,
          sidebarDepth: 0,
          children: ["/nested/bar/bar-header", "/nested/bar/bar-footer"]
        },
        "/nested/nested-footer"
      ]
    },
    {
      title: `${title}1`,
      collapsable: true,
      children: [
        "/nested1/nested-header",
        {
          title: "foo",
          collapsable: true,
          children: ["/nested1/foo/foo-header", "/nested1/foo/foo-footer"]
        },
        {
          title: "bar",
          collapsable: true,
          children: ["/nested1/bar/bar-header", "/nested1/bar/bar-footer"]
        },
        "/nested1/nested-footer"
      ]
    },
    {
      title: `${title}2`,
      collapsable: true,
      children: [
        "/nested2/nested-header",
        {
          title: "foo",
          collapsable: true,
          children: ["/nested2/foo/foo-header", "/nested2/foo/foo-footer"]
        },
        {
          title: "bar",
          collapsable: true,
          children: ["/nested2/bar/bar-header", "/nested2/bar/bar-footer"]
        },
        "/nested2/nested-footer"
      ]
    }
  ];
}
