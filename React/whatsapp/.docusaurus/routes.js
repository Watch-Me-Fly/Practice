import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cf5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '479'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '702'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd36'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fdc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '402'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '734'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c05'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'feb'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '67c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '85d'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e0a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f93'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'f92'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '7a0'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '505'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '10a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'b0a'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '8e9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2ea'),
    exact: true
  },
  {
    path: '/docs/1.0.0',
    component: ComponentCreator('/docs/1.0.0', 'ab6'),
    routes: [
      {
        path: '/docs/1.0.0/intro',
        component: ComponentCreator('/docs/1.0.0/intro', 'd2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step1',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step1', '276'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step10',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step10', '9fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step11',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step11', '61b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step12',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step12', '17c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step13',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step13', 'd5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step14',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step14', '473'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step15',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step15', '8f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step16',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step16', 'ef4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step17',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step17', '70d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step2',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step2', '6da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step3',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step3', 'e88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step4',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step4', '13b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step5',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step5', '571'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step6',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step6', 'ced'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step7',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step7', 'a23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step8',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step8', 'a01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1.0.0/tuto-whatsapp/step9',
        component: ComponentCreator('/docs/1.0.0/tuto-whatsapp/step9', 'cac'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', 'b53'),
    routes: [
      {
        path: '/docs/next/intro',
        component: ComponentCreator('/docs/next/intro', '8d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step1',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step1', '74d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step10',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step10', '7f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step11',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step11', 'e98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step12',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step12', 'f97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step2',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step2', '4bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step3',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step3', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step4',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step4', '013'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step5',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step5', '657'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step6',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step6', '76e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step7',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step7', '209'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step8',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step8', 'bfd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/tuto-whatsapp/step9',
        component: ComponentCreator('/docs/next/tuto-whatsapp/step9', '903'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f15'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '231'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step1',
        component: ComponentCreator('/docs/tuto-whatsapp/step1', '687'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step10',
        component: ComponentCreator('/docs/tuto-whatsapp/step10', '52f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step11',
        component: ComponentCreator('/docs/tuto-whatsapp/step11', '1e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step12',
        component: ComponentCreator('/docs/tuto-whatsapp/step12', '3a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step2',
        component: ComponentCreator('/docs/tuto-whatsapp/step2', 'fcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step3',
        component: ComponentCreator('/docs/tuto-whatsapp/step3', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step4',
        component: ComponentCreator('/docs/tuto-whatsapp/step4', '5dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step5',
        component: ComponentCreator('/docs/tuto-whatsapp/step5', 'd58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step6',
        component: ComponentCreator('/docs/tuto-whatsapp/step6', '9bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step7',
        component: ComponentCreator('/docs/tuto-whatsapp/step7', '58e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step8',
        component: ComponentCreator('/docs/tuto-whatsapp/step8', 'b9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tuto-whatsapp/step9',
        component: ComponentCreator('/docs/tuto-whatsapp/step9', '548'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dd8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
