import { ref } from 'vue'

const getActivities = () => {

  const activities = ref([])

  const loadActivities = async (city, num = 10) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/'
    const queryNum = num
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