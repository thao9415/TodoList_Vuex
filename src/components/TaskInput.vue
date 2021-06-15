<template>
  <!-- form -->
  <div class="form">
    <input v-on:keyup.enter="addTask" v-model="title" type="text" placeholder="New Task"/>
    <button @click="addTask"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {v4 as uuidv4} from 'uuid';

export default {
  name: "TaskInput",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTaskAction']),
    addTask() {
      this.addTaskAction({
        id: uuidv4(),
        title: this.title,
        completed: false,
      });
      this.title = '';
    }
  },
}
</script>

<style scoped>

</style>
