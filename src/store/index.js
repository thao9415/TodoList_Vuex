import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const storeData = {
    state: {
        tasks: [],
    },
    getters: {
        countTaskDone: state => state.tasks.filter(e => e.completed).length
    },
    mutations: {
        REMOVE_ALL_TASKS(state) {
            state.tasks = []
        },
        REMOVE_TASKS_COMPLETED(state) {
            state.tasks = state.tasks.filter(e => !e.completed);
        },
        MARK_COMPLETED(state, taskId) {
            state.tasks.map(e => {
                if (e.id === taskId) {
                    e.completed = !e.completed;
                }
                return e;
            })
        },
        DELETE_TASK(state, taskId) {
            console.log('delete');
            state.tasks = state.tasks.filter(e => e.id !== taskId)
        },
        GET_TASK(state, tasks) {
            console.log('mutation get task invoked');
            console.log(tasks)
            state.tasks = tasks;
        },
        ADD_TASK(state, newTask) {
            state.tasks.unshift(newTask);
        }
    },
    actions: {
        async getTasks({commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
                commit('GET_TASK', response.data)
            } catch (e) {
                console.log(e)
            }

        },
        async addTaskAction({commit}, newTodo) {
            try {
                await axios.post(`https://jsonplaceholder.typicode.com/todos`, newTodo);
                commit('ADD_TASK', newTodo)
            } catch (e) {
                console.log(e)
            }
        },
        async deleteTask({commit}, todoId) {
            console.log('ok');
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
                commit('DELETE_TASK', todoId);
            } catch (e) {
                console.log(e)
            }
        },
    }
}

export const store = new Vuex.Store(storeData);
