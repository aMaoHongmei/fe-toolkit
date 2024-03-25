---
nav: API
group:
  title: 类型判断
  order: -1
---

# Is

类型判断

## API 函数

| 参数               | 说明                       | 类型                               | 默认值 | 版本  |
| :----------------- | -------------------------- | ---------------------------------- | ------ | ----- |
| is                 | 类型判断                   | (val: any, type: string) => boolen | -      | 0.0.1 |
| isDef              | 是否已定义或赋值           | (val?: T = unknown) => boolen      | -      | 0.0.1 |
| isUnDef            | 没有被定义或赋值           | (val?: T = unknown) => boolen      | -      | 0.0.1 |
| isObject           | 是否是对象                 | (val: any) => boolen               | -      | 0.0.1 |
| isEmpty            | 是否是空值                 | (val: any) => boolen               | -      | 0.0.1 |
| isDate             | 是否是 Date 对象           | (val: any) => boolen               | -      | 0.0.1 |
| isNull             | null 判断                  | (val: any) => boolen               | -      | 0.0.1 |
| isNullAndUnDef     | null 并且 没有被定义或赋值 | (val: any) => boolen               | -      | 0.0.1 |
| isNullOrUnDef      | null 或者 没有被定义或赋值 | (val: any) => boolen               | -      | 0.0.1 |
| isNumber           | 数字判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isPromise          | promise 判断               | (val: any) => boolen               | -      | 0.0.1 |
| isString           | 字符串判断                 | (val: any) => boolen               | -      | 0.0.1 |
| isJsonObjectString | json 对象判断              | (val: any) => boolen               | -      | 0.0.1 |
| isFunction         | 方法判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isBoolean          | 布尔判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isRegExp           | 正则判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isArray            | 数组判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isWindow           | window 判断                | (val: any) => boolen               | -      | 0.0.1 |
| isElement          | 元素判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isMap              | map 判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isServer           | 没有 window 对象           | (val: any) => boolen               | -      | 0.0.1 |
| isClient           | 含有 window 对象           | (val: any) => boolen               | -      | 0.0.1 |
| isUrl              | 地址判断                   | (val: any) => boolen               | -      | 0.0.1 |
| isImgage           | 可以被展示的图片判断       | (val: any) => boolen               | -      | 0.0.1 |
