import { createStore } from "vuex";

const store = createStore({
    state: {
        login: false,
        token: "",
        selectedChannel: -1,
        channelList: [],
    },
    mutations: {
        logIn : (state) => {state.login = true},
        logOut : (state) => {state.login = false},
        saveToken : (state, newToken) => {state.token = newToken},
        setSelectedChannel : (state, channelID) => {state.selectedChannel = channelID},
        addChannelList : (state, newChannelList) => {state.channelList = newChannelList},
    } 
})

export default store;

/*

async function getChannel() {
  const options = {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + store.state.token 
      }
  };
  const response = await fetch('https://edu.tardigrade.land/msg/protected/user/channels', options);
  if (response.status == 200) {
    response.json().then(data => {
        store.commit('addChannelList', data);
    });
  }
}
*/