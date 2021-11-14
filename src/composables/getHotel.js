import { ref } from 'vue'

const getHotel = () => {

  const hotel = ref([])

  const loadHotel = async (city) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/'
    const queryNum = '10'
    const queryCity = city ? city : ''

    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      hotel.value = data
      console.log("🚀 ~ file: getHotel.js ~ line 16 ~ loadHotel ~ hotel.value", hotel.value)


    } catch (error) {
      console.log(error)
    }
    return { hotel }

  }

  return { loadHotel, hotel }
}


export default getHotel