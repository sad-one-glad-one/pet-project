<template>
  <section class="home">
    <main-screen :selected-object="cosmicData[selectedImage]"  />
    <sidebar :cosmic-data="cosmicData" @set-image="setSelectedImage" />
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
  data () {
    return {
      selectedImage: 0
    }
  },
  methods: {
    setSelectedImage(num: number) :void {
      this.selectedImage = num
    }
  },
  mounted() {
    this.getData('&start_date=2017-07-08', '&end_date=2017-07-20')
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>