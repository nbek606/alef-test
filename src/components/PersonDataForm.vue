<template>
  <div class="person_data">
    <!--Форма персональных данных-->
    <div class="form">
      <p class="form_title">Персональные данные</p>
      <InputText 
        v-model="form.name"
        label="Имя"
      />
      <InputText 
        v-model="form.age"
        label="Возраст"
        type="number"
      />
    </div>

    <!---Кнопка для добавление детей-->
    <button 
      v-if="showAddChildButton"
      class="button_create-child"
      @click="addChild"
    >
      <span class="icon">
        <PlusIcon />
      </span>
      Добавить ребенка
    </button>

    <!---Список детей-->
    <div 
      class="person_childs"
      v-if="!isEmptyChilds"
    >
      <p>Дети (макс.{{ maxChild }})</p>
      <PersonDataChildForm 
        v-for="child in this.form.childs"
        :key="child.id"
        :child="child"
        @remove="removeChild"
      />
    </div>  
    
    <!--Сообщение об ошибке-->
    <p class="error">{{ error.text }}</p>
    <!--кнопка сохранить-->
    <button
      class="save_button"
      @click="save"
    >
      Сохранить
    </button>
  </div>
</template>
<script>
import { RouteName } from '@/router/util'
/* import components */
import InputText from '@/components/InputText.vue'
import PersonDataChildForm from '@/components/PersonDataChildForm.vue'
/* import icons */
import PlusIcon from '@/assets/svg/plus.svg'

export default {
  name: 'PersonDataForm',
  components: {
    InputText,
    PlusIcon,
    PersonDataChildForm
  },

  data () {
    return {
      maxChild: 5,
      lastId: 1,
      error: {
        text: ''
      },
      form: {
        name: "",
        age: "",
        childs: []
      }
    }
  },

  computed: {
    showAddChildButton () {
      return this.form.childs.length < this.maxChild
    },

    isEmptyChilds () {
      return this.form.childs.length == 0
    }
  },

  methods: {
    addChild () {
      this.form.childs.push({
        id: `${this.lastId}`,
        name: "",
        age: ""
      })

      this.lastId++
    },

    removeChild (childId) {
      this.form.childs = this.form.childs.filter(item => item.id != childId) 
    },

    save () {
      const validate = this.validateForm(this.form)
      
      if (!validate) {
        this.error.text = "Пожалуйста, заполните все поля"
        return
      }

      this.$store.dispatch('person', this.form).then(() => {
        this.$router.push({ name: RouteName.Preview })
      })
    },

    /* Валидация, если даже одно поле не заполнено возвращает false*/
    validateForm (data) {
       let validate = true

       Object.keys(data).forEach((key) => {
          if (!data[key]) {
             validate = false
          }

          //Если есть дети проверяем поля детей
          if (data[key] instanceof Array) {
            data[key].forEach((child) => {
              validate = this.validateForm(child)
            })
          }
       })

       return validate
    }
  }
}
</script>
<style lang="scss">
    .person_data {
      padding: 20px 0;
      width: 620px;
      margin: auto;
    }

    .form {
      &_title {
        color: #111111;
        font-size: 16px;
      }
    }
    .button_create-child {
      border: 2px solid;
      display: flex;
      padding: 12px 15px;
      border-radius: 100px;
      align-items: center;
      border-color: #01A7FD;
      background-color: #fff;
      font-size: 16px;
      color: #01A7FD;
      margin-left: auto;
      margin-top: 40px;
      cursor: pointer;

      &:hover {
        color: #008ecf;
      }
      
      .icon {
        margin: 0 7px;
        height: 100%;
        display: flex;
      }
    }
    
    .save_button {
      border: 2px solid;
      display: flex;
      padding: 12px 20px;
      border-radius: 100px;
      align-items: center;
      background-color: #01A7FD;
      font-size: 14px;
      color: #fff;
      margin-top: 40px;
      cursor: pointer;
    }

    .error {
      color: red
    }
</style>
