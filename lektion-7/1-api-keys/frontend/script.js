fetch('http://localhost:8888/api/dishes?api_key=6419a0d45561980f730514ee')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })