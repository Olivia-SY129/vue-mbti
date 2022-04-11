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
    ...mapState(["questions", "page", "result"]),
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
      const result = this.result;
      return () => {
        this.$store.dispatch("clickAnswer", params);
        if (this.page === this.questions.length + 1) {
          this.$router.push({
            name: "result-mbti",
            params: {
              mbti: `${result.e > result.i ? "e" : "i"}${
                result.s > result.n ? "s" : "n"
              }${result.t > result.f ? "t" : "f"}${
                result.j > result.p ? "j" : "p"
              }`,
            },
          });
        }
      };
    },
  },
};
</script>
<style lang=""></style>
