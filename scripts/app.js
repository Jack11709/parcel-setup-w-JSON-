import jsonUrl from 'url:../public/data.json'

fetch(jsonUrl)
  .then(res => res.json())
  .then(res => console.log(res))

