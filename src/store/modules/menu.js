const state = {
  menu: [
    {
      title: 'Форма',
      link: '/'
    },
    {
      title: 'Превью',
      link: 'preview'
    }
  ]
}

const getters = {
  getMenuList: state => state.menu
}

export default {
  state,
  getters
}