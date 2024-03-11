// EditTask.vue
<template>
  <div class="form-container">
    <h1>Редактировать задачу</h1>
    <form @submit.prevent="updateTask" class="flex-column">
      <input v-model="taskTitle" placeholder="Название задачи" required class="m-5">
      <button type="submit" class="btn  with_100">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'EditTask',
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const task = computed(() => {
      return store.state.tasks.find(task => task.id === Number(route.params.id))
    })

    const taskTitle = computed({
      get: () => task.value.title,
      set: (value) => store.dispatch('updateTask',{ id: task.value.id, title: value })
    })

    const updateTask = () => {
      console.log(taskTitle.value)
      // store.dispatch('updateTask', { id: task.value.id, title: title.value })
      router.push('/')
    }

    return { taskTitle, updateTask }
  }
}
</script>
<style>
/* EditTask.vue */
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

</style>

