module.exports = {
    base: '/oranges-ui/',
    title: 'oranges-ui',
    description: '一个好用的UI框架',
    themeConfig: {
      nav: [
        {text: '主页', link: '/'},
        {text: '组件', link: '/components/button'},
        {text: 'Github', link: 'https://github.com/VanityEmperor'},
      ],
      sidebar: [
        {
          title: '入门',
          children: [
            '/install/',
            '/get-started/',
          ]
        },
        {
          title: '组件',
          children: ['/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/tabs',
                    '/components/collapse'
        ]
        },
  
      ]
    }
  } 