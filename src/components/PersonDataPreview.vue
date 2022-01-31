<template>
  <div class="person_preview">
    <p>Персональные данные</p>
    
    <div 
      class="person_item"
      v-for="(item, index) in persons"
      :key="index"
    > 
      <div class="person_item-data">
          {{ item.name }}, {{ item.age }} лет
      </div>

      <!--дети-->
      <div v-if="item.childs.length > 0">
        <p>Дети</p>
        <PersonDataChildPreview
          v-for="child in item.childs"
          :key="child.id"
          :child="child"
        />
      </div>
      
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

/* import components */
import PersonDataChildPreview from '@/components/PersonDataChildPreview.vue'

export default {
  name: 'PersonDataPreview',
  components: {
    PersonDataChildPreview
  },
  computed: {
    ...mapGetters({
      persons: 'getPersonList'
    })
  }
}
</script>
<style lang="scss" scoped>
  .person_preview {
    width: 620px;
    margin: auto;
    padding-top: 20px;
  }

  .person_item-data {
    font-weight: bold;
    margin: 40px 0;
  }
</style>