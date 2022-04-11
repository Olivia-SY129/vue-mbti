export const state = () => ({
  page: 0,
  questions: [
    {
      q: "At a party do you",
      a: [
        {
          text: "Interact with people, including strangers",
          value: "e",
        },
        {
          text: "Interact with few, knwon to you",
          value: "i",
        },
      ],
    },
    {
      q: "Are you more",
      a: [
        {
          text: "Speculative than realistic",
          value: "n",
        },
        {
          text: "Realistic than speculative",
          value: "s",
        },
      ],
    },
    {
      q: "Are you more impressed by",
      a: [
        {
          text: "Emotions",
          value: "f",
        },
        {
          text: "Principles",
          value: "t",
        },
      ],
    },
    {
      q: "Do you prefer to work",
      a: [
        {
          text: "Just 'Whenever'",
          value: "p",
        },
        {
          text: "To deadlines",
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
