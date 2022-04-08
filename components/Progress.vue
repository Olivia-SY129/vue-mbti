<template>
  <div>
    <span class="current-page">{{ `${page} / ${questions.length}` }}</span>
    <div class="progress-bar"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["page", "questions"]),
  },
};
</script>
<style lang="scss">
.current-page {
  margin-top: 60px;
}
.progress-bar {
  margin-top: 0.3em;
  width: 300px;
  height: 10px;
  border-radius: 10px;
  background-color: #ddd;
}
</style>
