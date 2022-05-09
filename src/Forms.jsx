import React from 'react'

function Forms() {
  return (
    <div className='div-form px-2' >
        <h2 className='sign'align="center">Welcome to our Light/Dark Toggling Website</h2>
        <h6 style={{textAlign:"center"}}>Sponsored by UdeyCraze.com</h6>
           <h2 className='sign'align="center">--Sign In--</h2>
        <form action="" className='form1'>
            <input className='username' type="text" placeholder='Austin Gareth...'/>
            <input className='password' type='password' placeholder='Password here...'/>
            <a className='submit' style={{textAlign:"center"}}>
               Sign In
            </a>
            <p className='forgot' style={{textAlign:"center"}}>
                <a href='#'>Forgot Password?</a>
            </p>
        </form>
    </div>
  )
}

export default Forms