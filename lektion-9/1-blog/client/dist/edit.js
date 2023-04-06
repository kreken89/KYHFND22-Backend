const id = new URLSearchParams(window.location.search).get('id')
const editForm = document.querySelector('#editForm')
const deleteBtn = document.querySelector('#deleteBtn');
const modal = document.querySelector('#modal');

const getPost = async () => {
  const res = await fetch('http://localhost:7778/api/blog/' + id)
  const data = await res.json();

  editForm.title.value = data.title;
  editForm.imgURL.value = data.imgURL;

  const tags = data.tags.join(' ')
  editForm.tags.value = tags
  editForm.body.value = data.body

}
getPost()


editForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const token = localStorage.getItem('token')

  const res = await fetch('http://localhost:7778/api/blog/' + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      title: editForm.title.value,
      imgURL: editForm.imgURL.value,
      body: editForm.body.value,
      tags: editForm.tags.value.split(' '),
    })
  })

  if(res.status != 200) {
    const data = await res.json()
    console.log(data)
    document.querySelector('#error').innerText = data.message
    return
  }
  
  location.assign('index.html')
})