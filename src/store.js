import { createStore } from "vuex";

const store = createStore({
    state: {
        login: false,
        token: "",
        user: "",
        selectedChannel: -1,
        channelList: [],
    },
    mutations: {
        logIn : (state) => {state.login = true},
        logOut : (state) => {state.login = false},
        saveToken : (state, newToken) => {state.token = newToken},
        saveUser : (state, newUser) => {state.user = newUser},
        setSelectedChannel : (state, channelID) => {state.selectedChannel = channelID},
        addChannelList : (state, newChannelList) => {state.channelList = newChannelList},
        addUser : (state, id, user) => {
          state.channelList.forEach((channel, indexChannel) => {
            if(channel.id == id){
              console.log(user)
              state.channelList[indexChannel].users.push(user)
            }
          })
        },
        delUser : (state, id, user) => {
          console.log(state.channelList)
          state.channelList.forEach((channel, indexChannel) => {
            if(channel.id == id){
              channel.users.forEach((userInList, indexUser) => {
                if(userInList == user){
                  console.log(state.channelList[indexChannel].users[indexUser])
                  state.channelList[indexChannel].users.splice(indexUser, 1);
                }
              })
            }
          })
        }
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