<template>
  <article
      class="sidebar"
      :class="{'sidebar_hide' : isClose, 'sidebar_open' : !isClose}"
      v-click-away="onClickAway"
  >
    <button
        v-if="windowWidth <= 980"
        class="sidebar__button"
        :class="{'sidebar__button_closed' : isClose, 'sidebar__button_opened' : !isClose}"
        @click="isClose = !isClose"
    />
    <div class="sidebar__inner">
      <div class="sidebar__inner-head">
        <datepicker
            v-model="date"
            range
            dark
            :min-date="new Date(1995,5,16)"
            :max-date="new Date()"
            :enableTimePicker="false"
            :disabled="isApiLoading"
            @update:modelValue="setCurrentDate"
        />
      </div>
      <div class="sidebar__inner-body">
        <div
            v-for="(item,index) in EX_$CosmicList.cosmicData"
            :key="index"
            class="body-item"
            :class="{'body-item_active': index === selectedItem}"
        >
          <div
              class="body-item__image-wrap"
              :class="{'body-item__image-wrap_fetched' : isApiLoading}"
              @click="isApiLoading ? '' : setSelectedImage(index)"
          >
            <img
                v-if="!isApiLoading"
                :src="item.media_type === 'image' ? item.url : getPoster"
                alt="img"
                draggable="false"
            />
            <Skeletor v-else height="100%" width="100%" />
          </div>
          <p v-if="!isApiLoading">{{item.title}}</p>
          <Skeletor v-else height="35" width="100%" />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import {Skeletor} from "vue-skeletor";
import 'vue-skeletor/dist/vue-skeletor.css';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { mixin as VueClickAway } from "vue3-click-away";
import $isWindow from "@/mixins/isWindow.mixin";

import $CosmicList from "@/typescript/CosmicList";

export default defineComponent({
  name: "Sidebar",
  emits: ['setImage'],
  mixins: [VueClickAway, $isWindow],
  components: {
    Datepicker,
    Skeletor
  },
  props: {
    cosmicData: {
      type: Array
    }
  },
  data () {
    return {
      EX_$CosmicList: $CosmicList,
      date: ref(),
      selectedItem: 0,
      isClose: false
    }
  },
  computed: {
    getPoster () : string {
      return 'https://www.realfinityrealty.com/wp-content/uploads/2018/08/video-poster.jpg'
    },
    isApiLoading () : boolean {
      return this.EX_$CosmicList.isFetching
    }
  },
  methods: {
    onClickAway() {
      if (!this.isClose && this.windowWidth <= 980) this.isClose = true
    },
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
      this.setSelectedImage(0)
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