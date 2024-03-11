import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../components/TaskList.vue'
import CreateTask from '../components/CreateTask.vue'
import EditTask from '../components/EditTask.vue'

const routes = [
    { path: '/', component: TaskList },
    { path: '/create-task', component: CreateTask },
    { path: '/edit-task/:id', name: 'EditTask', component: EditTask, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
