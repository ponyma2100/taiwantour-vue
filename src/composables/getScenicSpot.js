import { ref } from 'vue'

// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10&$format=JSON
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=10&$format=JSON


const getScenicSpot = () => {
  const scenicSpot = ref([])

  const loadSpot = async (city) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'
    const queryNum = '10'
    const queryCity = city ? city : ''
    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      scenicSpot.value = data

    } catch (error) {
      console.log(error)
    }
    return { scenicSpot }
  }

  return { loadSpot, scenicSpot }
}


export default getScenicSpot


