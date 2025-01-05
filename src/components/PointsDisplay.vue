<template>
  <div>
    <h1>Points: {{ points }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["points"]),
  },
};
</script>

