<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>Todo List</h1>
      </div>
      <TaskInput/>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <TaskItem
              v-bind:task="task"
              v-for="task in tasks"
              :key="task.id"/>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="REMOVE_TASKS_COMPLETED">Clear completed</button>
        <button @click="REMOVE_ALL_TASKS">Clear all</button>
      </div>
      <StatusTask/>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import {mapActions, mapMutations, mapState} from "vuex";
import StatusTask from "./StatusTask";
import TaskInput from "./TaskInput";

export default {
  name: "Task",
  components: {TaskInput, StatusTask, TaskItem},
  created() {
    this.getTasks();
  },
  computed: mapState(['tasks']),
  methods: {
    ...mapMutations(['REMOVE_ALL_TASKS', 'REMOVE_TASKS_COMPLETED']),
    ...mapActions(['getTasks'])
  }
};
</script>
