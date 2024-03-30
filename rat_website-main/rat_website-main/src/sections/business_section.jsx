import React from "react";
import '../css/business_section.css'
import BusinessMobileImage from '../assets/business_mobile.png'

const BusinessSection = () => {
    return(
        <div class='business_section'>
            <img src={BusinessMobileImage} class='business_mobile_image'/>
            <div class='business_section_left'>
                <div class='business_text1'>Rat my Business</div>
                <div class='business_text2'>Revolutionizing last-mile logistics for your business</div>
                <div class='business_text3'>Whether it's transporting corporate employees, delivering </div>
                <div class='business_text4'>e-commerce packages, or supporting local Kirana stores,</div>
                 <div class='business_text5'>we're your trusted partner in seamless connectivity</div>
           
            </div>
            <div class='business_input'>
                <input class='company_name' type="text" placeholder="Company Name"/>
                <input class='company_email' type="text" placeholder="Email"/>
                <input class='comapny_number' type="text" placeholder="Number"/>
                <input class='company_requirement' type="text" placeholder="Requirement"/>
                <button class='business_book_button'>Submit</button>
            </div>
        </div>
    )
}

export default BusinessSection