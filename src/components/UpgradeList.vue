<template>
  <div>
    <h2>Upgrades</h2>
    <UpgradeItem
      v-for="upgrade in upgrades"
      :key="upgrade.id"
      :upgrade="upgrade"
      @buy="buyUpgrade"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UpgradeItem from "./UpgradeItem.vue";

export default {
  components: { UpgradeItem },
  computed: {
    ...mapState(["upgrades"]),
  },
  methods: {
    ...mapMutations(["applyUpgrade"]),
    buyUpgrade(upgradeId) {
      this.applyUpgrade(upgradeId);
    },
  },
};
</script>

