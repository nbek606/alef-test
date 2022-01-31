<template>
  <div>
    <BasePage>
      <PersonDataForm />
    </BasePage>
  </div>
</template>

<script>
/* import components*/
import PersonDataForm from '@/components/PersonDataForm.vue'
import BasePage from '@/components/BasePage.vue'

export default {
  name: 'Home',
  components: {
    PersonDataForm,
    BasePage
  }
}
</script>
