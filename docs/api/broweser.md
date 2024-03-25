---
nav: API
group:
  title: 浏览器工具
  order: 7
demo:
  cols: 1
---

# browser

下方 api 均为函数，可直接 import 使用

## API

| 参数           | 说明                         | 类型                             | 默认值 | 版本  |
| :------------- | ---------------------------- | -------------------------------- | ------ | ----- |
| isIE           | 判断是否 IE<11 浏览器        | () => boolean                    | -      | 0.0.7 |
| isIE11         | 判断是否 IE=11 浏览器        | () => boolean                    | -      | 0.0.7 |
| isEdge         | 判断是否 IE 的 Edge 浏览器   | () => boolean                    | -      | 0.0.7 |
| getIEVersion   | 获取 IE 版本信息             | () => `string/number`            | -      | 0.0.7 |
| getBrowserType | 获取用户浏览器版本及系统信息 | (lang: 'zh-cn' / 'en') => object | 'en'   | 0.0.7 |
