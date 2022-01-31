import createPersistedState from "vuex-persistedstate"
import * as Cookies from "js-cookie";

export default new createPersistedState({
  paths: [
    'person.list'
  ],
  storage: {
    getItem: (key) => Cookies.get(key),
    setItem: (key, value) => {
          Cookies.set(key, value, { expires: 3, secure: true })
    },
    removeItem: (key) => Cookies.remove(key),
  }      
})