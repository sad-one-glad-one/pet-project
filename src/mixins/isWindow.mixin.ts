import { defineComponent } from 'vue'

interface IIsWindow {
  windowWidth: number
  windowHeight: number
}

interface IWindowSize {
  tablet: boolean
}

export default defineComponent({
  data (): IIsWindow {
    return {
      windowWidth: 0,
      windowHeight: 0
    }
  },
  methods: {
    handleResize (): void {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  computed: {
    $isWindow (): IWindowSize {
      return {
        tablet: this.windowWidth <= 980,
      }
    }
  },
  created (): void {
    this.windowWidth = window.document.documentElement.clientWidth
    this.windowHeight = window.document.documentElement.clientHeight
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount (): void {
    window.removeEventListener('resize', this.handleResize)
  }
})
