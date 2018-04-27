randomUrl = 'https://api.punkapi.com/v2/beers/random'

function addBeerData(data) {
  document.querySelector('.beer-name').innerText = `${data[0].name} - ${data[0].abv} ABV - ${data[0].ibu} IBU`
  document.querySelector('.description').innerText = data[0].description
  data[0].ingredients.malt.forEach(malt => {
    let maltList = document.querySelector('.malt')
    let maltName = document.createElement('li')
    maltName.innerText = `Name: ${malt.name}, Amount: ${malt.amount.value} ${malt.amount.unit}`
    maltList.appendChild(maltName)
  })
  data[0].ingredients.hops.forEach(hop => {
    let hopList = document.querySelector('.hops') 
    let hopName = document.createElement('li')
    hopName.innerText = `Name: ${hop.name}, Amount: ${hop.amount.value} ${hop.amount.unit}, Add: ${hop.add}`
    hopList.appendChild(hopName)
  })
  let yeast = document.querySelector('.yeast')
  let yeastName = document.createElement('li')
  yeastName.innerText = data[0].ingredients.yeast
  yeast.appendChild(yeastName)
}
document.querySelector('form a').addEventListener('click', onSubmit)
function onSubmit(event){
  event.preventDefault()
  document.querySelector('.item').classList.remove('hidden')
  fetch(randomUrl)
  .then(response => response.json())
  .then(response => {
    addBeerData(response)
  })
}

