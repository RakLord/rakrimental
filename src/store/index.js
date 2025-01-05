import { createStore } from "vuex";

export default createStore({
  state: {
    points: 0,
    increment: 1,
    interval: 5000, // In milliseconds
    upgrades: [
      { id: 1, name: "Faster Timer", cost: 10, effect: "decreaseInterval", applied: false },
      { id: 2, name: "More Points", cost: 20, effect: "increaseIncrement", applied: false },
    ],
  },
  mutations: {
    addPoints(state) {
      state.points += state.increment;
    },
    applyUpgrade(state, upgradeId) {
      const upgrade = state.upgrades.find((u) => u.id === upgradeId);
      if (upgrade && !upgrade.applied && state.points >= upgrade.cost) {
        state.points -= upgrade.cost;
        upgrade.applied = true;

        if (upgrade.effect === "decreaseInterval") {
          state.interval = Math.max(1000, state.interval * 0.95); // Min interval: 1 sec
        } else if (upgrade.effect === "increaseIncrement") {
          state.increment += 1;
        }
      }
    },
  },
  actions: {
    startTimer({ commit, state }) {
      setInterval(() => {
        commit("addPoints");
      }, state.interval);
    },
  },
});

