<template>
  <div>
    <Header></Header>
    <div>{{msg}}</div>
  </div>
</template>
<script>
  import Header from '../../common/Header'
  export default {
    components: {
      Header
    },
    data() {
      return {
        msg: 'test'
      }
    }
  }
</script>
