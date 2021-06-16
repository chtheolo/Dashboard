<template>
  <div>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <!-- <livedata :selectedTime="selectedTime" /> -->
        <livedata />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import LiveData from "./LiveData";

export default {
  components: {
    livedata: LiveData,
  },
  data: () => ({
    tab: null,
    tabs: [{ name: "livedada" }],
  }),
  created() {
    this.tabs[0].name = this.$t("homeLiveData");
  },
  methods: {
  }
};
</script>