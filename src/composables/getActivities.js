import { ref } from 'vue'

const getActivities = () => {

  const activities = ref([])

  const loadActivities = async (city) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/'
    const queryNum = '10'
    const queryCity = city ? city : ''

    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      activities.value = data
    } catch (error) {
      console.log(error)
    }
    return { activities }

  }

  return { loadActivities, activities }
}


export default getActivities