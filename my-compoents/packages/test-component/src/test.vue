<template>
  <div class="t-component">
    <h1>这是我的一个测试组件: 你好，我叫: {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',

  props: {
    name: { type: String, default: '' }
  },

  data() {
    return {   
    }
  }
}
</script>

<style lang="scss" scoped>
.t-component {
  color: red;
}
</style>