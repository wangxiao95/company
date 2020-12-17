<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-inner__logo">
        <img src="../pages/index/images/test.jpg" alt="">
      </div>
      <div class="header-inner__nav">
        <div class="header-inner__nav--item"
             :class="{'header-nav-active': activeNav === nav.value }"
             v-for="(nav, i) in navs" :key="i">
          <a :href="nav.link">{{ nav.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    activeNav: {
      type: String,
      default: 'about'
    }
  },
  data() {
    return {
      navs: [
        {name: '首页', link: '', value: 'index'},
        {name: '关于我们', link: '', value: 'about'},
        {name: '关于我们', link: '', value: ''},
        {name: '关于我们', link: '', value: ''},
        {name: '关于我们', link: '', value: ''},
        {name: '关于我们', link: '', value: ''},
        {name: '关于我们', link: '', value: ''},
      ],
    }
  }
}
</script>

<style lang="scss">
@import "styles/var";

.header {
  width: 100vw;
  height: 80px;
  background-color: #fff;

  &-inner {
    display: flex;
    justify-content: space-between;
    width: $page-inner-width;
    height: 100%;
    margin: 0 auto;

    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 120px;
        height: 50px;
      }
    }

    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      &--item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 100%;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        margin-left: 60px;

        a {
          color: $text;
          text-decoration: none;
        }

        &.header-nav-active {
          border-bottom: 4px solid $primary;

          a {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
