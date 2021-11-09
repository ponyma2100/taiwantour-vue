import { ref } from 'vue'

// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10&$format=JSON
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=10&$format=JSON


const getScenicSpot = async (city) => {
  const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'
  const queryNum = '10'
  const scenicSpot = ref([])
  const queryCity = city ? city : ''

  try {
    const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
    const data = await res.json()
    scenicSpot.value = data
    console.log("🚀 ~ file: getScenicSpot.js ~ line 17 ~ getScenicSpot ~ scenicSpot.value", scenicSpot.value)

    return scenicSpot

  } catch (error) {
    console.log(error)
  }
}
getScenicSpot()

export default getScenicSpot


