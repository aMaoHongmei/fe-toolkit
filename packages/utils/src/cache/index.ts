import { createStorage as create, CreateStorageParams } from './stroage'

export type Options = Partial<CreateStorageParams>

const createOptions = (storage: Storage, options: Options = {}): Options => {
  return {
    hasEncrypt: true,
    storage,
    ...options,
  }
}

export const WebStorage = create(createOptions(sessionStorage))

export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
  return create(createOptions(storage, options))
}

export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, {
    ...options,
  })
}

export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, {
    ...options,
  })
}

export default WebStorage
