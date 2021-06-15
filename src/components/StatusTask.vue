<template>
  <div class="pendingTasks">
    <span>Completed Tasks: {{countTaskDone}}</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "StatusTask",
  computed: mapGetters(['countTaskDone'])
}
</script>

<style scoped>

</style>
