import axios from "axios";

interface ICosmicData {
    copyright?: string
    date?: string
    explanation?: string
    hdurl?: string
    url?: string
    mediaType?: string
    serviceVersion?: string
    title?: string
}

class $CosmicList {
    public isFetching = false;
    private _cosmicData: ICosmicData = {};

    get cosmicData (): ICosmicData {
        return this._cosmicData
    }
    set cosmicData (arr: ICosmicData) {
        this._cosmicData = arr
    }

    async setData(start_date? : string, end_date? : string) {
        const apiKey = '9kfchBRfxQB0zYtl5XuZywzTGaLaaEcN0Z7bx5zH'
        this.isFetching = true

        await axios({
            method: 'get',
            url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_date}&end_date=${end_date}`,
        }).then(res => {
            this.cosmicData = res.data
            this.isFetching = false
        }).catch(err => {
            console.log('error', err)
            this.isFetching = false
        })
    }
}

export default new $CosmicList