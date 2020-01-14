import test from './test-component'

const components = [
  test
]
// 插件安装函数
const install = function(Vue) {
  if (install.installed) return
  components.forEach(com => {
    Vue.use(com)
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 单个组件导出
export default {
  install,
  test
}

export {
  test
}