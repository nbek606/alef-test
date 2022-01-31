<template>
  <div class="preview">
    <BasePage>
      <PersonDataPreview />
    </BasePage>
  </div>
</template>
<script>

/* import components */
import PersonDataPreview from '@/components/PersonDataPreview.vue'
import BasePage from '@/components/BasePage.vue'

export default {
  components: {
    PersonDataPreview,
    BasePage
  },
  name: 'Preview'
}
</script>
