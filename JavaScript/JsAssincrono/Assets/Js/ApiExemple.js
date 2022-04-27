fetch('https://endereco-api.com/',{
  method: 'GET',
  cached: 'no-cache'
})
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://endereco-api.com/',{
  method: 'POST',
  cached: 'no-cache',
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(json => console.log(json))