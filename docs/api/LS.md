---
nav: API
group:
  title: 缓存管理
  order: -1
demo:
  cols: 2
---

# LS

localStroage 缓存管理，基于`cache` 和 `createLocalStorage` 模块

## 何时使用

- 当你不想每次使用都 `createLocalStorage` 去创建时
- `cache`标识开头的方法会同时操作 localStroage 和 sessionStorage

## 不建议使用情况

- 每个系统的缓存都需要自己的独特标识

## 代码演示

<code src="../../example/cache/LS.index.tsx"></code>
<code src="../../example/cache/LS.remove.tsx"></code>
<code src="../../example/cache/LS.removeExceptKey.tsx"></code>
<code src="../../example/cache/LS.cacheRemoveExceptKey.tsx"></code>

## API

| 参数                 | 说明                                                                     | 类型           | 默认值 | 版本  |
| :------------------- | ------------------------------------------------------------------------ | -------------- | ------ | ----- |
| set                  | 设置缓存，前缀为`LS-`                                                    | .(string, any) | -      | 0.0.1 |
| get                  | 读取缓存，前缀为`LS-`                                                    | .(string)      | -      | 0.0.1 |
| remove               | 删除单个缓存，前缀为`LS-`                                                | .(string)      | -      | 0.0.1 |
| removeExceptKey      | 跳过选定项，清除其余缓存                                                 | .(string[])    | -      | 0.0.1 |
| clear                | 清除缓存，前缀为`LS-`                                                    | .()            | -      | 0.0.1 |
| clearAll             | 清除 localStorage _全部_ 缓存                                            | .()            | -      | 0.0.1 |
| cacheSet             | 设置 localStorage 和 sessionStorage 缓存，前缀为`LS-`                    | .(string, any) | -      | 0.0.1 |
| cacheRemove          | 清除 localStorage 和 sessionStorage 中前缀为`LS-`缓存                    | .(string)      | -      | 0.0.1 |
| cacheRemoveExceptKey | 清除 localStorage 和 sessionStorage 中，除了指定项以外的其余 _全部_ 缓存 | .(string[])    | -      | 0.0.1 |
| cacheClear           | 清除 localStorage 和 sessionStorage 中前缀为`LS-` _全部_ 缓存            | .()            | -      | 0.0.1 |
| cacheClearAll        | 清除 localStorage 和 sessionStorage _全部_ 缓存                          | .()            | -      | 0.0.1 |
