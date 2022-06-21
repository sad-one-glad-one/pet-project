<template>
  <article class="sidebar">
    <div class="sidebar__head">
      <p>SELECTS</p>
    </div>
    <div class="sidebar__body">
      <div
          v-for="(item,index) in cosmicData"
          :key="index"
          class="sidebar__body-item"
      >
        <div v-if="item.url" class="item__image-wrap">
          <img :src="item.url" alt="img" draggable="false" />
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

export default defineComponent({
  name: "Sidebar",
  props: {
    cosmicData: {
      type: Array
    }
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>