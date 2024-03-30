import React from "react";
import image1 from '../assets/homepage_1.jpg'
import image2 from '../assets/homepage_2.jpg'
import image3 from '../assets/homepage_3.jpg'
import mobile_image1 from '../assets/homepage_mobile1.jpg'
import mobile_image2 from '../assets/homepage_mobile2.jpg'
import mobile_image3 from '../assets/homepage_mobile3.png'
import '../css/section1.css'

const SectionGallery = () =>{
    return(
        <div className='gallery_section'>
            <div className='gallery'>
                <img src={image1} alt="Image 1" className='gallery_image' />
                <img src={image2} alt="Image 2" className='gallery_image' />
                <img src={image3} alt="Image 3" className='gallery_image' />
                <img src={mobile_image1} alt="Image 1" className='gallery_image_mobile' />
                <img src={mobile_image2} alt="Image 2" className='gallery_image_mobile' />
                <img src={mobile_image3} alt="Image 3" className='gallery_image_mobile' />
                <div className='overlay'>
                <div className='gallery_text'>
                    Rain or Shine, Dawn to Dusk 
                </div>
                <div class='gallery_text2'>E-Mobility Marvel at <span class='gallery_text_span'>₹5/KM</span> Anytime, Every Time.</div>
                <button className='rat_button'>Get RAT</button>
                </div>
            </div>
            </div>
    )
}

export default SectionGallery;