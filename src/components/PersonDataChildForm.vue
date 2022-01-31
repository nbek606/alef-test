<template>
  <div class="child">
    <InputText
      v-model="child.name"
      label="Имя"
      input-class="child_input"
    />

    <InputText
      v-model="child.age"
      label="Возраст"
      input-class="child_input"
      type="number"
    />
    <!--кнопка удаления-->
    <button 
      class="child_remove-button"
      @click="remove"
    >
      Удалить
    </button>
  </div>
</template>
<script>

/* import components*/
import InputText from '@/components/InputText.vue'

export default {
  name: 'PersonDataChildForm',
  components: {
    InputText
  },

  props: {
    child: { type: Object, required: true }
  },

  methods: {
    remove () {
      this.$emit('remove', this.child.id)
    }
  }
}
</script>
<style lang="scss" scoped>
    .child {
      display: flex;

      &_input {
        width: 100%;
        margin-right:10px;
      }

       &_remove-button {
        border: none;
        background-color: #fff;
        margin-left: auto;
        color: #01A7FD;
        font-size: 14px;
      }
    }
    
</style>