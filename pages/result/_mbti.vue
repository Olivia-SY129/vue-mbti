<template>
  <div>
    <main>
      <h1>결과 페이지</h1>
      <img :src="resultDesc[mbti].img" :alt="resultDesc[mbti].title" />
      <h1>{{ resultDesc[mbti].title }}</h1>
      <p v-html="resultDesc[mbti].description"></p>
      <Button text="처음으로" :clickEvent="reset" />
    </main>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      mbti: null,
      resultDesc: {
        intj: {
          img: "/intj.jpg",
          title: "INTJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        intp: {
          img: "/intp.jpg",
          title: "INTP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        entj: {
          img: "/entj.jpg",
          title: "ENTJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        entp: {
          img: "/entp.jpg",
          title: "ENTP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        infj: {
          img: "/infj.jpg",
          title: "INFJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        infp: {
          img: "/infp.jpg",
          title: "INFP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        enfj: {
          img: "/enfj.jpg",
          title: "ENFJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        enfp: {
          img: "/enfp.jpg",
          title: "ENFP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        istj: {
          img: "/istj.jpg",
          title: "ISTJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        isfj: {
          img: "/isfj.jpg",
          title: "ISFJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        estj: {
          img: "/estj.jpg",
          title: "ESTJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        esfj: {
          img: "/esfj.jpg",
          title: "ESFJ",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        istp: {
          img: "/istp.jpg",
          title: "ISTP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        isfp: {
          img: "/isfp.jpg",
          title: "ISFP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        estp: {
          img: "/estp.jpg",
          title: "ESTP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
        esfp: {
          img: "/esfp.jpg",
          title: "ESFP",
          description: `블라블라</br></br>엔터엔터 another paragraph
          `,
        },
      },
    };
  },
  created() {
    // this.mbti = this.$route.params.mbti;
    this.mbti = "enfp";

    // todo 예외 처리
    if (!this.resultDesc[this.$route.params.mbti]) {
      this.reset();
      this.$router.push({
        name: "index",
      });
    }
  },
  computed: {
    ...mapState(["result"]),
    ...mapActions(["clickReset"]),
  },
  methods: {
    reset() {
      this.clickReset;
      this.$router.push({
        name: "index",
      });
    },
  },
};
</script>
<style>
img {
  width: 300px;
}

p {
  margin-bottom: 60px;
  text-align: left;
}
</style>
