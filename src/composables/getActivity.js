import { ref } from 'vue'

const getActivity = () => {

  const activity = ref([])

  const loadActivity = async (city) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/'
    const queryNum = '10'
    const queryCity = city ? city : ''

    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      activity.value = data
      console.log("🚀 ~ file: getActivity.js ~ line 16 ~ loadActivity ~ activity.value", activity.value)


    } catch (error) {
      console.log(error)
    }
    return { activity }

  }

  return { loadActivity, activity }
}


export default getActivity