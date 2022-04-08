<template>
  <div>
    <h1>{{ page }}. {{ question }}</h1>
    <Button
      v-for="a in answers"
      color="blue"
      :text="a.text"
      :clickEvent="submitAnswer(a.value)"
      :key="a.text"
    />
    <Progress />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["questions", "page"]),
    ...mapActions(["clickAnswer"]),
    question() {
      return this.questions[this.page - 1].q;
    },
    answers() {
      return this.questions[this.page - 1].a;
    },
  },
  methods: {
    submitAnswer(params) {
      return () => this.$store.dispatch("clickAnswer", params);
    },
  },
};
</script>
<style lang=""></style>
