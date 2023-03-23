fetch('http://localhost:8081/api/todos', {
  method: 'POST',
  body: JSON.stringify({ title: 'hej' }),
  headers: {
    'Content-Type': 'application/json;',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})
.then(res => {
  console.log(res.status)
  if(res.status != 201) {

  }
})
