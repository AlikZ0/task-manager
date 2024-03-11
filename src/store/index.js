
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: []
    }
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    ADD_TASK(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    UPDATE_TASK(state, { id, title }) {
      state.tasks.forEach((e)=>{
        if (e.id===id){
          e.title=title
        }

      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', { ...task, id: Math.floor(Math.random()*100000)})
    },
    deleteTask({ commit }, id) {
      commit('DELETE_TASK', id)
    },
    updateTask({ commit }, { id, title }) {
      commit('UPDATE_TASK', { id, title })
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    }
  }
})
const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
store.commit('SET_TASKS', tasks)

export default store
