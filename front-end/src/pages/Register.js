import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Interface : Register</h1>
      <form action="/users/register" method="POST">
        <div>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <div>
          <input type="password" id="password2" name="password2" placeholder="Confirm password" required />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
        <a href="/users/login" > Already register ? Login here </a>
      </form>
    </div>
  )
}

export default Register
