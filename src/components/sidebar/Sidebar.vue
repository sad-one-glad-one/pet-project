<template>
  <article class="sidebar">
    <div class="sidebar__head">
      <datepicker
        v-model="date"
        range
        dark
        :min-date="new Date(1995,5,16)"
        :max-date="new Date()"
        :enableTimePicker="false"
        @update:modelValue="setCurrentDate"
      />
    </div>
    <div class="sidebar__body">
      <div
          v-for="(item,index) in EX_$CosmicList.cosmicData"
          :key="index"
          class="sidebar__body-item"
          :class="{'body-item_active': index === selectedItem}"
      >
        <div
          class="item__image-wrap"
          @click="setSelectedImage(index)"
        >
          <img
            :src="item.media_type === 'image' ? item.url : getPoster"
            alt="img"
            draggable="false"
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
      date: ref(),
      selectedItem: 0
    }
  },
  components: {
    Datepicker
  },
  computed: {
    getPoster () : string {
      return 'https://www.realfinityrealty.com/wp-content/uploads/2018/08/video-poster.jpg'
    },
    disabledEmptyDates () : string {
      return ``
    }
  },
  methods: {
    setSelectedImage (index: number) : void {
      this.selectedItem = index
      this.$emit('setImage', index)
    },
    setBaseDate () : void {
      const today = new Date ();
      const startDate = new Date(new Date().setDate(today.getDate() - 7));
      const endDate = today
      this.date = [startDate, endDate];
      this.setCurrentDate()
    },
    setCurrentDate () : void {
      const startDate = this.date[0].toISOString().slice(0, 10)
      const endDate = this.date[1].toISOString().slice(0, 10)
      this.EX_$CosmicList.setData(startDate, endDate)
      this.setSelectedImage(0)
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