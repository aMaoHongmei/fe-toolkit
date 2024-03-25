---
nav:
  title: API
  order: 1
group:
  title: Cache Management
  order: -1
---

# Cache

## Function

- Support setting cache timeout duration in seconds
- Support cache encryption `AES`, default development environment disabled
- Support deleting other caches except for certain _keys_
- Supports deleting all caches of the system except for certain _keys_, based on the `prefixKey`
- Support deleting the system management cache
- Support deleting the system management cache based on `prefixKey`
- Supports one click deletion of all caches (`localStroage` and `sessionStorage`)
- Supports one click deletion of all caches in the system, based on `prefixKey` (`localStroage` and `sessionStorage`)
- Supports separate deletion of all caches

## Demos

<code src="../../example/cache/index.en-US.tsx"></code>

## API

| Parameter            | Description                            | Type                                        | Default Value | Version |
| :------------------- | -------------------------------------- | ------------------------------------------- | ------------- | ------- |
| createStorage        | create cache management                | (Stroage, [Ops](#ops)) => [object](#object) | -             | 0.0.1   |
| createSessionStorage | create localstroage cache management   | ([Ops](#ops)) => [object](#object)          | -             | 0.0.1   |
| createLocalStorage   | create sessionstroage cache management | ([Ops](#ops)) => [object](#object)          | -             | 0.0.1   |

### Ops

| Parameter  | Description                    | Type    | Default Value | Version |
| :--------- | ------------------------------ | ------- | ------------- | ------- |
| prefixKey  | prefix                         | string  | ''            | 0.0.1   |
| storage    | Cache Type                     | Stroage | -             | 0.0.1   |
| hasEncrypt | Is it encrypted                | boolean | true          | 0.0.1   |
| timeout    | timeout value, unit:s(seconds) | number  | null          | 0.0.1   |

### object

| Parameter            | Description                                                                               | Type           | Default Value | Version |
| :------------------- | ----------------------------------------------------------------------------------------- | -------------- | ------------- | ------- |
| set                  | set cache                                                                                 | .(string, any) | -             | 0.0.1   |
| get                  | read cache                                                                                | .(string)      | -             | 0.0.1   |
| remove               | removing single cache                                                                     | .(string)      | -             | 0.0.1   |
| removeExceptKey      | skip selected item to remove rest of cache                                                | .(string[])    | -             | 0.0.1   |
| clear                | clear cache                                                                               | .()            | -             | 0.0.1   |
| clearAll             | remove localstorage _all_ cache                                                           | .()            | -             | 0.0.1   |
| cacheSet             | set localstorage and sessionstorage cache                                                 | .(string, any) | -             | 0.0.1   |
| cacheRemove          | remove localstorage and sessionstorage cache                                              | .(string)      | -             | 0.0.1   |
| cacheRemoveExceptKey | remove localstorage and sessionstorage, in addition to specified item of rest _all_ cache | .(string[])    | -             | 0.0.1   |
| cacheClear           | remove localstorage and sessionstorage in _all_ cache                                     | .()            | -             | 0.0.1   |
| cacheClearAll        | remove localstorage and sessionstorage _all_ cache                                        | .()            | -             | 0.0.1   |
