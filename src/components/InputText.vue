<template>
  <div 
    class="input_group"
    :class="inputClass"
  >
    <label
      class="label"
    >
        {{ label }}
    </label>
    <input  
      :value="text"
      class="input"
      :placeholder="placeholder"
      @input="handle($event)"
      :type="type"
    />
  </div>
</template>
<script>
export default {
  name: 'InputText',
  props: {
    placeholder: { type: String, default: ''},
    label: { type: String, default: '' },
    inputClass: { type: String, default: '' },
    type: { type: String, default: '' }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handle (event) {
      this.text = event.target.value,
      this.$emit('input', this.text)
    }
  }
}
</script>
<style lang="scss" scoped>
  .input_group {
    display: flex;
    flex-direction: column;
    border: 1px solid #F1F1F1;
    border-radius: 4px; 
    padding: 5px 15px;
    font-size: 15px;
    margin: 7.5px 0;

    .label {
      color: rgba(17, 17, 17, 0.48);
    }

    .input {
      font-family: Montserrat;
      width: 100%;
      padding: 0;
      border: none;
      outline: none;
      padding: 5px 0;
      color: #111111;

      &:focus {
        border: none;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>