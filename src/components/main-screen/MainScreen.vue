<template>
  <article class="main-screen">
    <section class="main-screen__section">
      <div class="main-screen__img-wrap">
        <img :src="selectedObject?.url" alt="main-img" draggable="false">
      </div>
      <div class="main-screen__title">
        <p>{{ selectedObject?.title }}</p>
        <p>{{ selectedObject?.date }}</p>
      </div>
      <div class="main-screen__description">
        <p>{{ selectedObject?.explanation }}</p>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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