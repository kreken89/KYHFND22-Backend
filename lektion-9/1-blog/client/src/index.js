import jwt_decode from "jwt-decode";

const verifyToken = () => {
  try {
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token);

    const now = + Date.now().toString().slice(0, 10)

    console.log('exp: ' + decoded.exp, 'now: ' + now)
    if (decoded.exp < now) {
      localStorage.removeItem('token')
      console.log('token expired')
      throw new Error('token expired')
    } else {
      console.log('token valid')
    }


  } catch (err) {
    console.log(err)
    location.replace('login.html')
  }
}
verifyToken()

const getPosts = async () => {
  const res = await fetch('http://localhost:7778/api/blog')
  const posts = await res.json()


  posts.forEach(post => {

    document.querySelector('#output').insertAdjacentHTML('beforeend', `
    <div class="post">
        <div class="img-container">
          <img src="${post.imgURL}" alt="${post.title}">
        </div>
        <div class="right">
          <div class="top">
            <div>
              <h3>${post.title}</h3>
              <small>${post.author.firstName} ${post.author.lastName}</small>
            </div>
            <ul id="tags${post._id}" class="tags">
            </ul>
          </div>
          <div class="body">
            <p class="snippet">${post.body.slice(0, 50)}...</p>
            <p class="likes">likes: <span>${post.likes}</span></p>
          </div>
        </div> 
      </div>
    `)
    const ul = document.querySelector('#tags' + post._id)
    post.tags.forEach(tag => {
      const li = document.createElement('li')
      li.className = 'tag'
      li.innerText = tag
      ul.append(li)
    })

  })

}
getPosts()