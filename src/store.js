import { createStore } from "vuex";
const store = createStore({
    state: {
        login: true,
    },
    mutations: {
        logIn : (state) => {state.login = true},
        logOut : (state) => {state.login = false},
    } 
})

export default store;