// TaskList.vue
<template>
  <div>
    <h1>Список задач</h1>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="post">
       <span class="f-18">{{ task.title }}</span>
        <div>
          <button @click="deleteTask(task.id)" class="btn">Удалить</button>
          <button  @click='$router.push(`/edit-task/${task.id}`)' class="btn ">Редактировать</button>
        </div>

      </li>
    </ul>
<!--    <button  @click="$router.push('/create-task')" class="extra-extra-small-button-link m-top ">Создать задачу</button>-->
    <router-link to="/create-task" class="btn m-top"  >Создать задачу</router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'TaskList',
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const tasks = computed(() => store.state.tasks)

    const deleteTask = (id) => {
      store.dispatch('deleteTask', id)
    }

    return { tasks, deleteTask }
  }
}
</script>
<style>

/* TaskList.vue */
.task-list {
  list-style-type: none;
  padding: 0;
}


.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
}


.btn {
  display: inline-block;
  padding: 2px 6px;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;
}

.m-top{
  margin-top:20px ;
}
.f-18{
  font-size: 18px;
}
</style>
