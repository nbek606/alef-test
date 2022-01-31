<template>
  <div class="header">
    <div class="header_body">
       <div class="header_body-logo">
          <LogoIcon />
       </div>
       <div class="header_body-menu">
          <div 
            class="header_body-menu-item"
            v-for="(item, index) in menu"
            :key="index"
          > 
            <router-link :to="item.link">
                {{ item.title }}
            </router-link>
          </div>
       </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

/* impoert icons */
import LogoIcon from '@/assets/svg/logo.svg'

export default {
  name: 'Header',
  components: {
    LogoIcon
  },
  computed: {
    ...mapGetters({
      menu: 'getMenuList'
    })
  }
}
</script>
<style lang="scss">
  .header {
    position: fixed;
    height: 76px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

    &_body {
      display: flex;
      padding: 0 90px;
      align-items: center;
      height: 100%;

      &-menu {
        margin: auto;
        display: flex;

        &-item {
          padding: 0 10px;
          cursor: pointer;

          a {
            text-decoration: none;
            color: rgba(17, 17, 17, 0.48);
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>