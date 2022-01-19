import { createStore } from "vuex";
const store = createStore({
    state: {
        login: false,
    },
    mutations: {
        logIn : (state) => {state.login = true},
        logOut : (state) => {state.login = false},
    } 
})

export default store;