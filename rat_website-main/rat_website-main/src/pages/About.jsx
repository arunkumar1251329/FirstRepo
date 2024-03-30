import React from "react";
import NavBar from "../sections/navbar";
import FooterSection from "../sections/footer";
import '../css/about.css'

function About() {
    return(
        <div>
            <NavBar />
           <div className="about_section"> 
            <div className="about_section1">
                <h1 className="about_section1_text1">Welcome to RAT </h1>
                <h1 className="about_section1_text2">Revolutionizing Urban Mobility and Logistics</h1>
                <p className="about_section1_text3">At RAT, we're not just a service, we're a revolution in urban mobility and last-mile logistics.
                    Our vision is to provide efficient, eco-friendly, and affordable transportation solutions,
                    making life simpler for everyone
                </p>
             </div>
             <div className="about_section2">
                <h1 className="about_section2_text1">Services Offered</h1>
                <h5 className="about_section2_text2">Bike Taxis </h5>
                <p className="about_section2_text3">Experience the convenience of our bike taxis - quick, reliable, and cost-effective.</p>
                <p className="about_section2_text4">Travel across the city at just ₹5 per kilometer, enjoying the speed and efficiency of our electric rides.
                </p>
             </div>
             <div className="about_section3">
                <h1>Why Choose RAT?</h1>
                <div className="about_section3_text">
                    <p className="about_section3_text1">Eco-Friendly Rides:</p>
                    <p className="about_section3_text2">We care about the environment. That's why all our rides are on electric bikes,
reducing your carbon footprint while you travel or get your groceries.</p>
                </div>
                <div>
                    <p className="about_section3_text1">Affordable Pricing:</p>
                    <p className="about_section3_text2">Enjoy the luxury of bike taxis and grocery delivery without burning a hole in your pocket.
Our transparent pricing of ₹5 per kilometer sets us apart in the market.</p>
                </div>
                <div>
                    <p className="about_section3_text1">Driver Benefits:</p>
                    <p className="about_section3_text2">When you choose RAT, you're not just riding; you're supporting. We provide our drivers
with weekly payments, flexible schedules, rider protection kits, health insurance, and
even offer free education for their children.</p>
                </div>
             </div>
             <div className="about_section4">
                <h1>How RAT Works</h1>
                <ul className="about_section4_text">
                    <li>Download the App: Get the RAT app on your device from your app store.</li>
                    <li>Register: Sign up effortlessly using your phone number.</li>
                    <li>Book a Ride : Use the app to book a bike taxi</li>
                    <li>Enjoy the Ride: Experience the joy of riding in our eco-friendly electric bikes.</li>
                    <li>Pay Securely: Complete your transaction with our secure online payment system</li>
                </ul>
             </div>
             <div>
                <h1>Join the RAT Revolution</h1>
                <p>Become a part of the RAT community today, where we're not just changing the way you move
                    but also contributing to a greener, more sustainable future.
                </p>
                <p>Ready to RAT? Download the app now and explore the future of urban mobility!</p>
             </div>
            </div> 
             <FooterSection />
        </div>
    )
    
}

export default About