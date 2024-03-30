import React from "react";
import '../css/footer.css';
import { Link } from 'react-router-dom';

const FooterSection = () =>{
    return(
        <div>
            <div class='footer_announcement'>Join RAT for a fulfilling journey with benefits beyond the road</div>
            <div class='footer_section'>
                <div class='footer_menu1'>
                    <div>Log in/ Sign up</div>
                    <div>Download App</div>
                    <Link to="/about" className='footer_about'>About</Link>
                </div>
                <div class="footer_menu2">
                    <div>Partner</div>
                    <div>Career</div>
                    <div>Support</div>
                </div>
                <div class='footer_menu3'>
                    <div>Contact us</div>
                    <div>Address</div>
                    <div class='footer_address'>Rd Number 36, Jawahar Colony, Jubilee Hills, Hyderabad, Telangana, 500033.</div>
                </div>
            </div>
        </div> 
    )
}

export default FooterSection