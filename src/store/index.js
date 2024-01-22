import { createStore } from 'vuex'
import axios from '@/mocks/users'

export default createStore({
  state: {
    users: [],
    userId: null,
    filterStatus: null,
    searchQuery: '',
    isCreateModalOpen: false,
  },
  getters: {
    getUsers: (state) => { return state.users },
    getUserById: (state) => (id) => {
      return state.users[id]
    },
    filteredUsers: (state) => {
      let filteredUsers = state.users;

      if (state.filterStatus) {
        filteredUsers = filteredUsers.filter(user => user.status === state.filterStatus);
      }

      if (state.searchQuery) {
        filteredUsers = filteredUsers.filter(user => user.fullname.toLowerCase().includes(state.searchQuery.toLowerCase()));
      }

      if (filteredUsers.length === 0) {
        return state.users;
      }

      return filteredUsers;
    },

  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload.data
      localStorage.setItem('users', JSON.stringify(payload.data))
    },
    ADD_USER(state, user) {
      state.users.push(user.data)
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    REMOVE_USER(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    OPEN_CREATE_MODAL(state) {
      state.isCreateModalOpen = true;
    },
    CLOSE_CREATE_MODAL(state) {
      state.isCreateModalOpen = false;
    },
    SET_FILTER_STATUS(state, status) {
      state.filterStatus = status;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_LOCAL_USERS(state, users) {
      state.users = users
      localStorage.setItem('users', JSON.stringify(users))
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get('/api/data')
        .then(response => {
          commit('SET_USERS', response.data)
        })
        .catch(e => console.log('create error', e))
    },
    createUser({commit}, user) {
      axios.post('/api/users', user)
        .then(response => {
          commit('ADD_USER', response.data)
        })
        .catch(e => console.log('create error', e))
    },
    removeUser({commit}, userId) {
      commit('REMOVE_USER', userId)
    },
    loadLocalUsers({commit}) {
      const users = JSON.parse(localStorage.getItem('users'))
      commit('SET_LOCAL_USERS', users)
    },
    setFilterStatus({ commit }, status) {
      commit('SET_FILTER_STATUS', status);
    },
    setSearchQuery({ commit }, query) {
      commit('SET_SEARCH_QUERY', query);
    },
  },
})
