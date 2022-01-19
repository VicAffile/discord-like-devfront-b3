import { createStore } from "vuex";
export const store = createStore({
    state: {
        login: false,
    },
    mutations: {
        logInOut : (state) => {state.login = !state.login},
    } 
})