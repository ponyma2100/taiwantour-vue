import { ref } from 'vue'

// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10&$format=JSON
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=10&$format=JSON


const getScenicSpots = () => {
  const scenicSpots = ref([])

  const loadSpots = async (city, num = 10) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'
    const queryNum = num
    const queryCity = city ? city : ''
    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      scenicSpots.value = data

    } catch (error) {
      console.log(error)
    }
    return { scenicSpots }
  }

  return { loadSpots, scenicSpots }
}


export default getScenicSpots


