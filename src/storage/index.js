/**
 * 封装Storage json形式
 */

const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem(key, value, moduleName) {
    if (moduleName) { // 存储层级下的数据
      const val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else { // 存储到根部
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取值
  getItem(key, moduleName) {
    if (moduleName) {
      // 递归获取层级
      const val = this.getItem(moduleName)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取整个数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清空某一个值
  clear(key, moduleName) {
    const val = this.getStorage()
    if (moduleName) {
      if (!val[moduleName]) return
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
