<template>
  <article class="main-screen">
    <div class="main-screen__img-wrap">
      <img :src="selectedObject?.url" alt="main-img" draggable="false">
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MainScreen",
  props: {
    selectedObject: {
      type: Array
    }
  },
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>