import { ref } from 'vue'

const getRestaurant = () => {

  const restaurant = ref([])

  const loadRestaurant = async (city) => {
    const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/'
    const queryNum = '10'
    const queryCity = city ? city : ''

    try {
      const res = await fetch(`${url}${queryCity}?$top=${queryNum}&$format=JSON`)
      const data = await res.json()
      restaurant.value = data

    } catch (error) {
      console.log(error)
    }
    return { restaurant }

  }

  return { loadRestaurant, restaurant }
}

export default getRestaurant