import React from "react";
import joinUsImage from '../assets/join_us_bike.png'
import '../css/join_section.css'

const JoinUs = () =>{
    return(
        <div class='join_us_section'>
            <div class='join-text_section'>
                <div class='join_text1'>Join us as Partner</div>
                <div class='join_text2'>Drive Beyond, Secure Beyond</div>
                <div class='join_text3'>At RAT, driving for us means more than just a job. We provide, Enjoy free education for your children,
                    weekly payments, flexible schedules, attractive earnings, rider protection kits, health insurance.</div>
                <div class='join_text4'>we provide electric vehicles if you don't have one.</div>  
                <button class='join_button'>Join us</button>
            </div>   
            <img class='join_image' src={joinUsImage}/>
        </div>
    )
}

export default JoinUs