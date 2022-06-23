<template>
  <section class="home">
    <main-screen :selected-object="EX_$CosmicList.cosmicData[selectedImage]"  />
    <sidebar @set-image="setSelectedImage" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainScreen from "@/components/main-screen/MainScreen.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";

import $CosmicList from "@/typescript/CosmicList";

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    MainScreen
  },
  data () {
    return {
      EX_$CosmicList: $CosmicList,
      selectedImage: 0
    }
  },
  methods: {
    setSelectedImage(num: number) :void {
      this.selectedImage = num
    }
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>