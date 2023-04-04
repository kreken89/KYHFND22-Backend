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