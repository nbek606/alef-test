<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
/* import components */
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  #app {
   min-height: 100vh; 
   display: flex;
   flex-direction: column;
  }
</style>

