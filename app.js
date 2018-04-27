randomUrl = 'https://api.punkapi.com/v2/beers/random'

function addBeerData(data) {
  document.querySelector('.beer-name').innerText = 
  document.querySelector('.description').innerText = data[0].description
  data[0].ingredients.malt.forEach(malt => {
    let maltList = document.querySelector('.malt')
    let maltName = document.createElement('li')
    maltName.innerText = 
    maltList.appendChild(maltName)
  })
  data[0].ingredients.hops.forEach(hop => {
    let hopList = document.querySelector('.hops')
    let hopName = document.createElement('li')
    hopName.innerText = 
    hopList.appendChild(hopName)
  })
  let yeast = document.querySelector('.yeast')
  let yeastName = document.createElement('li')
  yeastName.innerText = data[0].ingredients.yeast
  yeast.appendChild(yeastName)
}
document.querySelector('form a').addEventListener('click', onSubmit)
function onSubmit(event){
  document.querySelector('.item').classList.remove('hidden'))
  event.preventDefault()
  fetch(randomUrl)
  .then(response => response.json())
  .then(response => {
    addBeerData(response)
  })
}

