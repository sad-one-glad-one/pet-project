<template>
  <article class="sidebar">
    <div class="sidebar__head">
      <datepicker
        v-model="date"
        range
        dark
        :enableTimePicker="false"
        @update:modelValue="setNewDate"
      />
    </div>
    <div class="sidebar__body">
      <div
          v-for="(item,index) in EX_$CosmicList.cosmicData"
          :key="index"
          class="sidebar__body-item"
      >
        <div class="item__image-wrap">
          <img
            :src="item.media_type === 'image' ? item.url : getPoster"
            alt="img"
            draggable="false"
            @click="setMainImage(index)"
          />
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import $CosmicList from "@/typescript/CosmicList";

export default defineComponent({
  name: "Sidebar",
  emits: ['setImage'],
  props: {
    cosmicData: {
      type: Array
    }
  },
  data () {
    return {
      EX_$CosmicList: $CosmicList,
      date: ref()
    }
  },
  components: {
    Datepicker
  },
  computed: {
    getPoster () : string {
      return 'https://www.realfinityrealty.com/wp-content/uploads/2018/08/video-poster.jpg'
    }
  },
  methods: {
    setMainImage (index: number) : void {
      this.$emit('setImage', index)
    },
    setBaseDate () : void {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      this.date = [startDate, endDate];
    },
    setNewDate () : void {
      const startDate = this.date[0].toISOString().slice(0, 10)
      const endDate = this.date[1].toISOString().slice(0, 10)
      this.EX_$CosmicList.setData(startDate, endDate)
    }
  },
  mounted () {
    this.setBaseDate()
  }
})
</script>

<style lang="scss">
  @import "./style.scss";
</style>