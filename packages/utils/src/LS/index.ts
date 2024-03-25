import { createLocalStorage } from '../cache/index'
/**
 * localStorage 默认方法，如需自定义配置请使用createLocalStorage
 */
export default createLocalStorage({
  prefixKey: 'ls-',
  timeout: 60 * 60 * 24 * 30,
})
