import { ref } from 'vue'

const getRestaurants = () => {

  const restaurants = ref([])

  const loadRestaurants = async (city, num = 10) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/'
    const queryNum = num
    const queryCity = city ? city : ''

    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      restaurants.value = data

    } catch (error) {
      console.log(error)
    }
    return { restaurants }

  }

  return { loadRestaurants, restaurants }
}

export default getRestaurants