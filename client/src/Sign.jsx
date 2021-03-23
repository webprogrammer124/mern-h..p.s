import React, { useState } from 'react'
import './Sign.css'
import img from './s.jpg'


const SignIn=()=>{
    return(
        <>
        
        <div className="parent">
            <div className="bg">
                
            </div>
         <form action="" className='fo'> 
            <h1>LOGIN</h1>
                <input type="email" title="Email"  placeholder='Email'/>
                <input type="password"  title='Password '  placeholder='Password'/>
                <button className='btn'>  
                <a href='' className=''>
                        SIGN IN
                </a>
                </button>

            </form>
        </div>

        </>
    )

}




export default SignIn;