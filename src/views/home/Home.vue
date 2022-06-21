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

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    MainScreen
  },
  data () {
    return {
      cosmicData: [],
    }
  },
  methods: {
    getData(period? :string): void {
      axios({
        method: 'get',
        url: `https://api.nasa.gov/planetary/apod?api_key=9kfchBRfxQB0zYtl5XuZywzTGaLaaEcN0Z7bx5zH${period}`,
      }).then(res => {
        this.cosmicData = res.data
        console.log(this.cosmicData)
      }).catch(err => {
        console.log('error', err)
      })
    }
  },
  mounted() {
    this.getData('&start_date=2017-07-08&end_date=2017-07-20')
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>