---
nav: API
group:
  title: Cache Management
  order: -1
demo:
  cols: 2
---

# LS

LocalStrategy cache management, based on the `cache` and `createLocalStorage` modules

## When to use

- When you don't want to create `createLocalStorage` every time you use it
- The method that identifies the beginning of the `cache` will operate on both localStroage and sessionStorage simultaneously

## Not recommended for use

- Each system's cache requires its own unique identifier

## Demos

<code src="../../example/cache/LS.index.en-US.tsx"></code>
<code src="../../example/cache/LS.remove.en-US.tsx"></code>
<code src="../../example/cache/LS.removeExceptKey.en-US.tsx"></code>
<code src="../../example/cache/LS.cacheRemoveExceptKey.en-US.tsx"></code>

## API

| Parameter            | Description                                                                           | Type           | Default Value | Version |
| :------------------- | ------------------------------------------------------------------------------------- | -------------- | ------------- | ------- |
| set                  | Set cache with prefix `LS-`                                                           | .(string, any) | -             | 0.0.1   |
| get                  | Read cache with prefix `LS-`                                                          | .(string)      | -             | 0.0.1   |
| remove               | Delete a single cache with prefix `LS-`                                               | .(string)      | -             | 0.0.1   |
| removeExceptKey      | Skip selected items and clear remaining cache                                         | .(string[])    | -             | 0.0.1   |
| clear                | Clear cache with prefix `LS-`                                                         | .()            | -             | 0.0.1   |
| clearAll             | Clear LocalStorage _All_ Cache                                                        | .()            | -             | 0.0.1   |
| cacheSet             | Set the localStorage and sessionStorage caches with the prefix `LS-`                  | .(string, any) | -             | 0.0.1   |
| cacheRemove          | Clear the prefix in localStorage and sessionStorage as `LS-`                          | .(string)      | -             | 0.0.1   |
| cacheRemoveExceptKey | Clear all \* caches except for the specified items in localStorage and sessionStorage | .(string[])    | -             | 0.0.1   |
| cacheClear           | Clear cache prefixed with `LS-` _all_ in localStorage and sessionStorage              | .()            | -             | 0.0.1   |
| cacheClearAll        | Clear LocalStorage and SessionStorage _All_ Caches                                    | .()            | -             | 0.0.1   |
