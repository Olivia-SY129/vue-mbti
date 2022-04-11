<template>
  <div>
    <main v-if="page === 0">
      <h1>Marvel MBTI test✨</h1>
      <img src="/home.png" alt="marvel logo" /> </br>
      <img src="/heros.jpg" alt="marvel heros" />
      <h2>Who is your Marvel Charactor?</h2>
      <Button color="pink" text="Start!" :clickEvent="startTest" />
    </main>
    <main v-else-if="page < questions.length + 1">
      <Question />
    </main>
    <main v-else-if="page === questions.length + 1"></main>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapActions(["clickStart"]),
    ...mapState(["page", "questions", "result"]),
  },
  methods: {
    startTest() {
      return this.clickStart;
    },
  },
};
</script>

<style scoped>
img {
  width: 300px;
}
</style>
