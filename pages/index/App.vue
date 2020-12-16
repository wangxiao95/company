<template>
  <div>
    <Header></Header>
    <div class="container">{{msg}}</div>
    <img src="./images/test.jpg" alt="">
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
        msg: 'index'
      }
    }
  }
</script>
