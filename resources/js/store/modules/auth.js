import axios from 'axios'
import Cookies from 'js-cookie'

export const state = {
  user: null,
  token: Cookies.get('token')
}

export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

export const mutations = {
  saveToken (state, { user, token, remember }) {
    state.token = user
    state.token = token
    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  fetchUserSuccess(state, { user }) {
    state.user = user
  },

  fetchUserFailure (state) {
    state.token = null
    Cookies.remove('token')
  },

  logout (state) {
    state.user = null
    state.token = null
  }
}

export const actions = {
  saveToken ({ commit, dispatch }, payload) {
    commit('saveToken', payload)
  },

  async fetchUser ({ commit }) {
    try {
      const { data } = await axios.get('/api/user')

      commit('fetchUserSuccess', { user: data })
    } catch (e) {
      commit('fetchUserFailure')
    }
  },

  async logout ({ commit }) {
    try {
      await axios.post('/api/logout')
    } catch (e) { }

    commit('logout')
  }
}
