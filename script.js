// const searchForm = document.querySelector('.search-form')
// const search = document.querySelector('.search')
// const cityName = document.querySelector('.city-name')
// const currentDegree = document.querySelector('.current-degree')
// const currentWeather = document.querySelector('.current-weather')
// const min = document.querySelector('.min')
// const max = document.querySelector('.max')
// const overlay = document.querySelector('.overlay')
// // api key
// const api = {
//   key: '3a76a1f234ec623bfd927f0c9ac88e0e',
//   base: 'https://api.openweathermap.org/data/2.5/',
// }

// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const nameCity = search.value
//   overlay.classList.remove('hidden')
//   const fetchData = await fetch(
//     `${api.base}weather?q=${nameCity}&units=metric&appid=${api.key}`,
//   )

//   const data = await fetchData.json()
//   getWeather(data)
//   overlay.classList.add('hidden')
// })

// function getWeather(data) {
//   cityName.textContent = `${data.name}, ${data.sys.country}`
//   currentDegree.textContent = `${Math.round(data.main.temp)}℃`
//   currentWeather.textContent = `${data.weather[0].main}`
//   min.textContent = `${Math.round(data.main.temp_min)}℃`
//   max.textContent = `${Math.round(data.main.temp_max)}℃`
// }

const form = document.querySelector('.form')
const searchInput = document.querySelector('.search-input')
const cityName = document.querySelector('.city-name')
const currentDegree = document.querySelector('.current-degree')
const currentWeather = document.querySelector('.current-weather')
const min = document.querySelector('.min')
const max = document.querySelector('.max')
const overlay = document.querySelector('.overlay')

const api = {
  key: '3a76a1f234ec623bfd927f0c9ac88e0e',
  base: 'https://api.openweathermap.org/data/2.5/',
}

form.addEventListener('submit', async (e)=> {
  e.preventDefault()
  const nameCity = searchInput.value
  overlay.classList.remove('hidden')
  const fetchData = await fetch(
    `${api.base}weather?q=${nameCity}&units=metric&appid=${api.key}`,
  )

  const data = await fetchData.json()
  getWeather(data)
  overlay.classList.add('hidden')
})

function getWeather(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`
  currentDegree.textContent = `${Math.round(data.main.temp)}℃`
  currentWeather.textContent = `${data.weather[0].main}`
  min.textContent = `${Math.round(data.main.temp_min)}℃`
  max.textContent = `${Math.round(data.main.temp_max)}℃`
}