const id = new URLSearchParams(window.location.search).get('id')
const editForm = document.querySelector('#editForm')
const deleteBtn = document.querySelector('#deleteBtn');
const modal = document.querySelector('#modal');

const handleDelete = async (e) => {
  const token = localStorage.getItem('token')

  const res = await fetch('http://localhost:7778/api/blog/' + id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })

  console.log(res)

  if(res.status != 200) {
    modal.querySelector('#modal-error').innerText = 'Någonting gick fel'
    return
  }
  
  location.assign('index.html')
}

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


deleteBtn.addEventListener('click', () => {
  modal.classList.remove('d-none')
})

modal.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    modal.classList.add('d-none')
  }
})


modal.querySelector('#nBtn').addEventListener('click', () => {
  modal.classList.add('d-none')
})

modal.querySelector('#yBtn').addEventListener('click', handleDelete)



