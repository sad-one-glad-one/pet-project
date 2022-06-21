import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
    data () {
        return {
            cosmicData: [],
            apiKey: '9kfchBRfxQB0zYtl5XuZywzTGaLaaEcN0Z7bx5zH'
        }
    },
    methods: {
        getData(start_date? : string, end_date? : string): void {
            axios({
                method: 'get',
                url: `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}${start_date}${end_date}`,
            }).then(res => {
                this.cosmicData = res.data
                console.log(this.cosmicData)
            }).catch(err => {
                console.log('error', err)
            })
        }
    }
})