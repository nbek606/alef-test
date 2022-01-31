<template>
  <div class="person_child">
    <button class="person_child-data">
      {{ child.name }}, {{ child.age }} лет
    </button>
  </div>
</template>
<script>
export default {
  name: 'PersonDataChildPreview',
  props: {
    child: { type: Object, required: true }
  }
}
</script>
<style lang="scss" scoped>
  .person_child-data {
    background-color: #F1F1F1;
    padding: 15px 25px;
    border-radius: 5px;
    margin: 10px 0;
    color: #111;
    font-weight: bold;
    border: none;
    font-size: 16px;
  } 
</style>