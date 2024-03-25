import { AesEncryption } from '../cipher'
import { isNullOrUnDef } from '../is'

declare type Nullable<T> = T | null
export interface EncryptionParams {
  key: string
  iv: string
}
export interface CreateStorageParams extends EncryptionParams {
  prefixKey: string
  storage: Storage
  hasEncrypt: boolean
  timeout?: Nullable<any>
}

export const createStorage = ({
  prefixKey = '',
  storage = sessionStorage,
  key = '19270163000e7041',
  iv = '1407e00036107291',
  timeout = null,
  hasEncrypt = true,
}) => {
  if (hasEncrypt && [key.length, iv.length].some(item => item !== 16)) {
    throw new Error('When hasEncrypt is true, the key or iv must be 16 bits!')
  }

  const encryption = AesEncryption({ key, iv })

  const getKey = (key: string) => {
    return `${prefixKey}${key}`.toUpperCase()
  }

  /**
   * Get all keys of this instance
   * @param {Storage} cache
   * @memberof Cache
   */
  const getStorageAllKeys = (cache?: Storage): string[] => {
    const arr: string[] = []
    for (let i = 0; i < (cache?.length || storage.length); i++) {
      let key: any = ''
      if (cache) {
        key = cache.key(i)
      } else {
        key = storage.key(i)
      }
      if (key) {
        arr.push(key)
      }
    }
    return arr
  }

  /**
   *
   *  Set cache
   * @param {string} key
   * @param {*} value
   * @expire Expiration time in seconds
   * @memberof Cache
   */
  const set = (key: string, value: any, expire: number | null = timeout) => {
    const stringData = JSON.stringify({
      value,
      time: Date.now(),
      expire: !isNullOrUnDef(expire) ? new Date().getTime() + expire * 1000 : null,
    })
    const stringifyValue = hasEncrypt ? encryption.encryptByAES(stringData) : stringData
    storage.setItem(getKey(key), stringifyValue)
  }

  /**
   *
   *  Set cache
   * @param {string} key
   * @param {*} value
   * @expire Expiration time in seconds
   * @memberof Cache
   */
  const cacheSet = (key: string, value: any, expire: number | null = timeout) => {
    const stringData = JSON.stringify({
      value,
      time: Date.now(),
      expire: !isNullOrUnDef(expire) ? new Date().getTime() + expire * 1000 : null,
    })
    const stringifyValue = hasEncrypt ? encryption.encryptByAES(stringData) : stringData
    localStorage.setItem(getKey(key), stringifyValue)
    sessionStorage.setItem(getKey(key), stringifyValue)
  }

  /**
   * 读缓存
   * @param {string} key
   * @memberof Cache
   */
  const get = (key: string, def: any = null): any => {
    const val = storage.getItem(getKey(key))
    if (!val) return def

    try {
      const decVal = hasEncrypt ? encryption.decryptByAES(val) : val
      const data = JSON.parse(decVal)
      const { value, expire } = data
      if (isNullOrUnDef(expire) || expire >= new Date().getTime()) {
        return value
      }
      remove(key)
    } catch (e) {
      return def
    }
  }

  /**
   * Delete cache based on key
   * 基于key删除缓存
   * @param {string} key
   * @param {Storage} cache
   * @memberof Cache
   */
  const remove = (key: string, cache?: Storage) => {
    if (cache) {
      cache.removeItem(getKey(key))
    } else {
      storage.removeItem(getKey(key))
    }
  }

  /**
   * Delete cache based on key
   * 基于key删除缓存
   * @param {string} key
   * @memberof Cache
   */
  const cacheRemove = (key: string) => {
    localStorage.removeItem(getKey(key))
    sessionStorage.removeItem(getKey(key))
  }

  /**
   * Delete the system cache based on the prefixKey judgment
   * 删除该系统缓存，基于prefixKey判断
   * @memberof Cache
   */
  const clear = (): void => {
    const allKeys = getStorageAllKeys()
    allKeys.forEach(k => {
      if (k.startsWith(prefixKey)) {
        remove(k)
      }
    })
    // storage.clear();
  }

  /**
   * Delete all caches
   * 删除所有缓存
   * @memberof Cache
   */
  const clearAll = (): void => {
    storage.clear()
  }

  /**
   * Delete all caches.(session And local )
   * 删除所有缓存(session | local )
   */
  const cacheClearAll = (): void => {
    sessionStorage.clear()
    localStorage.clear()
  }

  /**
   * Delete all caches in the system, based on prefixKey judgment
   * 删除该系统所有缓存，基于prefixKey判断
   * @memberof Cache
   */
  const cacheClear = (): void => {
    const ssAllKeys = getStorageAllKeys(sessionStorage)
    const llAllKeys = getStorageAllKeys(localStorage)
    ssAllKeys.forEach(k => {
      if (k.startsWith(prefixKey)) {
        remove(k, sessionStorage)
      }
    })
    llAllKeys.forEach(k => {
      if (k.startsWith(prefixKey)) {
        remove(k, localStorage)
      }
    })
  }

  /**
   * Remove all system caches except for certain keys
   * 移除系统除了某些key以外的其余缓存
   * @param {string[]} arr
   * @memberof Cache
   */
  const removeExceptKey = (arr: string[]): void => {
    const allKeys = getStorageAllKeys()
    const keys = arr.map(item => getKey(item))
    allKeys.forEach(item => {
      if (!keys.includes(item)) {
        storage.removeItem(item)
      }
    })
  }

  /**
   * Remove all system caches except for certain keys.(session And local )
   * 移除系统除了某些key以外的其余缓存(session | local )
   * @param {string[]} arr
   * @memberof Cache
   */
  const cacheRemoveExceptKey = (arr: string[]): void => {
    const ssAllKeys = getStorageAllKeys(sessionStorage)
    const llAllKeys = getStorageAllKeys(localStorage)
    const keys = arr.map(item => getKey(item))
    ssAllKeys.forEach(item => {
      if (!keys.includes(item)) {
        sessionStorage.removeItem(item)
      }
    })
    llAllKeys.forEach(item => {
      if (!keys.includes(item)) {
        localStorage.removeItem(item)
      }
    })
  }

  return {
    get,
    set,
    clear,
    clearAll,
    remove,
    removeExceptKey,
    cacheSet,
    cacheRemove,
    cacheClear,
    cacheRemoveExceptKey,
    cacheClearAll,
  }
}
