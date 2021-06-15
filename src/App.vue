<template>
  <div id="app">
<!--    <router-view/>-->
    <task></task>
  </div>
</template>

<script>

import Task from "./components/Task";

export default {
  name: "App",
  components: {
    Task,
  },
};
</script>
