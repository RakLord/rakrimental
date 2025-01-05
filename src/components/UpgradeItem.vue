<template>
  <div>
    <button
      :disabled="upgrade.applied || points < upgrade.cost"
      @click="$emit('buy', upgrade.id)"
    >
      {{ upgrade.name }} - Cost: {{ upgrade.cost }} Points
      <span v-if="upgrade.applied"> (Purchased)</span>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["upgrade"],
  computed: {
    ...mapState(["points"]),
  },
};
</script>

