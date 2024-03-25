---
nav: API
group:
  title: 唯一值工具
  order: 5
order: 2
demo:
  cols: 1
---

# uuid

下方 api 均为函数，可直接 import 使用

## API

| 参数           | 说明             | 类型                      | 默认值 | 版本  |
| :------------- | ---------------- | ------------------------- | ------ | ----- |
| buildUUID      | 构建 uuid 唯一值 | () => string              | -      | 0.0.7 |
| buildShortUUID | 构建短的 UUID    | (prefix?: string) => void | ''     | 0.0.7 |
