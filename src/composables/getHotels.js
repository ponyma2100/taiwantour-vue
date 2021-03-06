import { ref } from 'vue'

const getHotels = () => {

  const hotels = ref([])

  const loadHotels = async (city, num = 10) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/'
    const queryNum = num
    const queryCity = city ? city : ''

    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      hotels.value = data
    } catch (error) {
      console.log(error)
    }
    return { hotels }

  }

  return { loadHotels, hotels }
}


export default getHotels