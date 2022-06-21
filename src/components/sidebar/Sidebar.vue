<template>
  <article class="sidebar">
    <div class="sidebar__head">
      <datepicker />
    </div>
    <div class="sidebar__body">
      <div
          v-for="(item,index) in cosmicData"
          :key="index"
          class="sidebar__body-item"
      >
        <div v-if="item.url" class="item__image-wrap">
          <img
            :src="item.url"
            alt="img" draggable="false"
            @click="setMainImage(index)"
          />
        </div>
        <div>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default defineComponent({
  name: "Sidebar",
  props: {
    cosmicData: {
      type: Array
    }
  },
  components: {
    Datepicker
  },
  methods: {
    setMainImage (index: number) : void {
      this.$emit('setImage', index)
    }
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>