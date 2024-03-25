---
nav: API
group: 文件工具
order: 3
demo:
  cols: 1
---

# 异步加载文件

## API

| 参数       | 说明            | 类型                                                     | 默认值 | 版本  |
| :--------- | --------------- | -------------------------------------------------------- | ------ | ----- |
| loadScript | 异步加载 js/css | (url: string, type: string = "js") => `Promise<boolean>` | -      | 0.0.7 |
