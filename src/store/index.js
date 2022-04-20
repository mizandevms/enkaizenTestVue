import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      posts: []
    }
  },
  mutations: {
    add (state,post) {
     state.posts.push(post)
    }
  }
})

export default store