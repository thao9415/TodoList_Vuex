<template>
  <li>
    <button v-bind:class="task.completed? 'completed':''"
            @click="markCompleted(task.id)"
    >{{ task.title }}
    </button>
    <button @click="deleteTask(task.id)"><i class="far fa-trash-alt"></i></button>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ['task'],
  methods: {
    markCompleted(taskId) {
      this.$store.commit('MARK_COMPLETED', taskId);
    },
    deleteTask(taskId) {
      console.log('id', taskId);
      this.$store.dispatch('deleteTask', taskId)
    },
  },
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
