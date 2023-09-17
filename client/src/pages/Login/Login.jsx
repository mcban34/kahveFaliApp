import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="loginApp">
      <div className='loginPage'>
        <div className="loginPageTopContent">
          <h2>Fal Rehberi App</h2>
          <p>Kahveyle başlayan serüveniniz, geleceğinizi aydınlatan bir yolculuğa dönüşebilir. </p>
        </div>
        <div className="loginPageTop">
        </div>
      </div>
      <img width={300} src="http://localhost:3000/img/coffeCup.png" alt="" />
      <Link className='startButton' to='/home'>Hemen Başla</Link>
    </div>
  )
}

export default Login