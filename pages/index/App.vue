<template>
  <div>
    <Header></Header>
    <div class="banner">
      <img src="./images/test.jpg" alt="">
    </div>
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

<style lang="scss">
@import "common/styles/var";

.banner {
  width: 100vw;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
