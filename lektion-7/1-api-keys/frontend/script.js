fetch('http://localhost:8888/api/dishes/')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })