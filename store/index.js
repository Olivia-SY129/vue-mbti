export const state = () => ({
  page: 0,
  questions: [
    {
      q: "질문 e-i",
      a: [
        {
          text: "답변1-1",
          value: "e",
        },
        {
          text: "답변1-2",
          value: "i",
        },
      ],
    },
    {
      q: "질문2 s-n",
      a: [
        {
          text: "답변2-1",
          value: "s",
        },
        {
          text: "답변2-2",
          value: "n",
        },
      ],
    },
    {
      q: "질문3 t-f",
      a: [
        {
          text: "답변3-1",
          value: "t",
        },
        {
          text: "답변3-2",
          value: "f",
        },
      ],
    },
    {
      q: "질문4 j-p",
      a: [
        {
          text: "답변4-1",
          value: "j",
        },
        {
          text: "답변4-2",
          value: "p",
        },
      ],
    },
  ],
  result: {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    j: 0,
    p: 0,
  },
});

export const mutations = {
  setUserType(state, { answerType }) {
    state.result[answerType] += 1;
  },
  next(state) {
    state.page += 1;
  },
  resetPage(state) {
    state.page = 0;
    state.result = {
      e: 0,
      i: 0,
      s: 0,
      n: 0,
      t: 0,
      f: 0,
      j: 0,
      p: 0,
    };
  },
};

export const actions = {
  // 여러가지 일을 두루 처리, mutations에 들어있는 commit 포함
  clickStart({ commit }) {
    commit("next");
  },
  clickAnswer({ commit }, answerType) {
    commit("setUserType", answerType);
    commit("next");
  },
  clickReset({ commit }) {
    commit("resetPage");
  },
};
