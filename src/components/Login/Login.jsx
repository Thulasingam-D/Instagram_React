import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/components/Login/Login.css'
import Playstore from '/src/components/Login/banners/playstore'

const Login = ()=> {
    return(
        <>
        <div className="container text-center bg-black px-5 col-sm-12 col-md-6 col-lg-4">

            {/* <h1 className='text-white mb-5'>Instagram</h1> */}
            <img className='col-6 mb-3' src="/src/assets/Instagram-4-3-2025.png" alt="" />


            <form >
        <input type="text" id='form_input1' className='d-block text-white w-100  bg-transparent my-1 p-2' placeholder='Phone number, username, or email' />
        <input type="text" id='form_input2' className='d-block w-100 text-white  bg-transparent my-2 p-2' placeholder='Password'/>

        <input type='Submit' id='form_btn' className='d-block p-1 mt-3 mb-4 w-100' />

            </form>

            <hr id='hr' className='my-1'/>
            <span id='ok' className='text-white px-3'>OR</span>

        <div className='bg-transparent'>
            <div id='fb' className="fb bg-transparent">
                <img id='fb_img' src="/src/assets/mdi--facebook.svg" alt="" />
                <p id='fb_text' className='d-inline px-3 text-primary'>Log in with Facebook</p>
            </div>
            <p id='forgot' className='text-white '>Forgot password?</p>
        </div>
        <p id='signup' className='text-white'>Don't have an account?<span className='text-primary'> Sign up</span></p>

        <p className='text-white mt-4 mb-1'>Get the app.</p>
        
        <div id='card_container' className='bg-black '>
        <Playstore />
        </div>

        </div>

        </>
    )
}
export default Login