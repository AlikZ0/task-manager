// CreateTask.vue
<template>
  <div class="form-container">
    <button class="btn with_55" @click="$router.push('/')"> Назад</button>
    <h1>Создать задачу</h1>
    <form @submit.prevent="createTask" class="flex-column" >
      <input v-model="title" placeholder="Название задачи" required  class="m-5">
      <button type="submit" class="btn with_100 ">Создать</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'CreateTask',
  setup() {
    const title = ref('')
    const router = useRouter()
    const store = useStore()

    const createTask = () => {
      store.dispatch('addTask', { title: title.value })
      router.push('/')
      title.value = ''
    }

    return { title, createTask }
  }
}
</script>
<style>
/* CreateTask.vue */

.form-container {
  max-width: 400px;
  margin: 0 auto;
}
.flex-column{
  display: flex;
  flex-direction: column;
}
.m-5{
  width: 200px;
  margin: 5px;
}
.with_100{
  margin-left: 5px;
  width: 100px;
}
.with_55{
  margin-left: 5px;
  width: 55px;
}
</style>
