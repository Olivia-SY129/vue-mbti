export const state = () => ({
  page: 0,
  questions: [
    {
      q: "당신은 외향적입니까?",
      a: [
        {
          text: "예",
          value: "e",
        },
        {
          text: "아니오",
          value: "i",
        },
      ],
    },
    {
      q: "당신은 상상하는 것을 좋아합니까?",
      a: [
        {
          text: "예",
          value: "n",
        },
        {
          text: "아니오",
          value: "s",
        },
      ],
    },
    {
      q: "당신은 다른 사람에게 잘 공감합니까?",
      a: [
        {
          text: "예",
          value: "f",
        },
        {
          text: "아니오",
          value: "t",
        },
      ],
    },
    {
      q: "당신은 즉흥적인 모임을 좋아합니까?",
      a: [
        {
          text: "예",
          value: "p",
        },
        {
          text: "아니오",
          value: "j",
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
    commit("setUserType", { answerType });
    commit("next");
  },
  clickReset({ commit }) {
    commit("resetPage");
  },
};
