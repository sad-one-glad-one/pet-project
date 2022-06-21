<template>
  <section class="home">
    <main-screen :cosmic-data="cosmicData" />
    <sidebar :cosmic-data="cosmicData" />
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";

import MainScreen from "@/components/main-screen/MainScreen.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import $getDataMixin from "@/mixins/getData.mixin";

export default defineComponent({
  name: 'Home',
  mixins: [$getDataMixin],
  components: {
    Sidebar,
    MainScreen
  },
  mounted() {
    this.getData('&start_date=2017-07-08', '&end_date=2017-07-20')
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>