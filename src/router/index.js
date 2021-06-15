import Vue from "vue";
import Router from 'vue-router'
import Task from "../components/Task";
import TaskInput from "../components/TaskInput";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Task',
            component: Task,
        },
        {
            path: '/hello',
            name: 'Hello',
            component: TaskInput
        }
    ]
})
