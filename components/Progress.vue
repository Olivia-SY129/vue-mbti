<template>
  <div>
    <div class="progress-bar">
      <span class="current-page">{{ `${page} / ${questions.length}` }}</span>
      <div
        class="guage"
        :style="{ width: `${(page / questions.length) * 100}%` }"
      ></div>
    </div>
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
<style scoped lang="scss">
.progress-bar {
  margin-top: 60px;
  & > .current-page {
    font-size: 14px;
  }
  & > .guage {
    background-color: rgb(206, 206, 206);
    margin-left: 0;
    margin-top: 10px;
    height: 10px;
    border-radius: 10px;
  }
  width: 300px;
}
</style>
