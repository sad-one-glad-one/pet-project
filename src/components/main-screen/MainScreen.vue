<template>
  <article class="main-screen">
    <section
      v-if="selectedObject?.media_type === 'image'"
      class="main-screen__section"
    >
      <div class="main-screen__img-wrap">
        <img
          :src="selectedObject?.url"
          alt="main-img"
          draggable="false"
          @click="isZoomModalOpened = true"
        >
      </div>
      <div class="main-screen__title-wrap">
        <h2 class="title-wrap__title">
          {{ selectedObject?.title }}
        </h2>
        <p class="title-wrap__date">
          {{ selectedObject?.date }}
        </p>
      </div>
      <div class="main-screen__description">
        <p class="main-screen__description-text">
          {{ selectedObject?.explanation }}
        </p>
      </div>
      <vue-easy-lightbox
          :visible="isZoomModalOpened"
          :imgs="isHdFormat ? selectedObject?.hdurl : selectedObject?.url"
          @hide="isZoomModalOpened = false"
      />
    </section>
    <section
      v-else
      class="main-screen__section"
    >
      <iframe class="main-screen__iframe" :src="selectedObject?.url" />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VueEasyLightbox from 'vue-easy-lightbox'

import $CosmicList from "@/typescript/CosmicList";

export default defineComponent({
  name: "MainScreen",
  components: {
    VueEasyLightbox
  },
  props: {
    selectedObject: {
      type: Array
    }
  },
  data () {
    return {
      EX_$CosmicList: $CosmicList,
      isZoomModalOpened: false,
    }
  },
  watch: {
    isApiLoading (value) {
      if (!value) this.isZoomModalOpened = false
    }
  },
  computed: {
    isApiLoading () : boolean {
      return this.EX_$CosmicList.isFetching
    }
  },
  methods: {
    isHdFormat (hd: string) : boolean {
      return hd !== ''
    }
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>