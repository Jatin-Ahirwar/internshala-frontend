import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footertop'>
            <div className='footertags'>
                <h6>about us</h6>
                <h6>we are hiring</h6>
                <h6>hire intern for your company</h6>
            </div>
            <div className='footertags'>
                <h6>team diary</h6>
                <h6>blog</h6>
                <h6>out services</h6>
            </div>
            <div className='footertags'>
                <h6>terms & conditions</h6>
                <h6>privacy policy</h6>
                <h6>contact us</h6>
            </div>
            <div className='footertags'>
                <h6>sitemap</h6>
                <h6>carrers</h6>
                <h6>help and support</h6>
            </div> 
        </div>
        <div className='footerbottam'>
            <button className='btnnnnnn'><i class="ri-google-play-fill"></i> Get Android App</button>
            <div className='footericons'>
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-x-line"></i>
            <i class="ri-youtube-fill"></i>
            <i class="ri-linkedin-fill"></i>
            </div>
            <p>@ Get Android App © Copyright 2023 Internshala</p>
        </div>
    </div>
  )
}

export default Footer