import { createSessionStorage } from '../cache/index'

/**
 * SessionStorage 默认方法，如需自定义配置请使用createSessionStorage
 */
export default createSessionStorage({
  prefixKey: 'ss-',
  timeout: 60 * 60 * 24 * 30,
})
