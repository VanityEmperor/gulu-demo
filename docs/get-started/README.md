---
title: 快速上手
---

本节将介绍如何在项目中使用 oranges-ui。

1.添加 CSS 样式
使用本框架前，请在 CSS 中开启 border-box
```
*{box-sizing: border-box;}
```
你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```
html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式。
2.引入 oranges-ui
```
import {Button,Icon,Input} from 'oranges-ui'
import 'oranges-ui/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-icon': Icon,
        'g-input':Input
    }
}
```