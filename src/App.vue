<template>
  <div id="app">
    <PointsDisplay />
    <Upgrades />
    <Upgrades />
  </div>
</template>

<script>
import PointsDisplay from "./components/PointsDisplay.vue";
import Upgrades from "./components/UpgradeList.vue";

export default {
  components: {
    PointsDisplay,
    Upgrades,
  },
  created() {
    this.$store.dispatch("startTimer");
  },
};
</script>

