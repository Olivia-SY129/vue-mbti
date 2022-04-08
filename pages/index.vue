<template>
  <div>
    <main v-if="page === 0">
      <h1>MBTI 테스트✨</h1>
      <h2>나의 MBTI를 확인해보세요!</h2>
      <Button color="pink" text="테스트 시작!" :clickEvent="startTest" />
    </main>
    <main v-if="page > 0 && page < questions.length + 1">
      <Question />
    </main>
    <main v-if="page === questions.length + 1"></main>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    // ...mapActions(["clickStart"]),
    ...mapState(["page", "questions", "result"]),
  },
  methods: {
    startTest() {
      // return this.clickStart;
    },
  },
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h2 {
  font-size: 1.2em;
  color: #b9b9b9;
  margin-bottom: 2em;
}
</style>
