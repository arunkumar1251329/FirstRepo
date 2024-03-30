import React, { useState, useCallback } from "react";
import bookRideImage from '../assets/book_ride.png'
import '../css/book_ride.css'
import bookRideImageMobile from '../assets/book_ride_mobile.png'

const BookRide = () => {
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const submitData = useCallback((pick_up,drops)=>{
        let formData = new FormData();
        formData.append('pickup', pick_up);
        formData.append('drop', drops);
        fetch('https://ratride.in/api/pickup_drops.php',{
            method: 'POST',
            body: formData
        }).then((res)=>{
           return res.text();
        }).then((data)=>{
            console.log(data);
        }).catch((e)=>{
            console.log(e);
        });
    },[]);
    return (
        <div>
        <div class='book_ride_section' id='book_ride_section'> 
            <div class='book_section'>
                <div class='text1'>Every Season's Your Reason to Ride!</div>
                <div class='text2'>Experience Rat</div>
                <div class='input_book_ride'>
                    <input class='pick_up' onChange={(e)=>{setPickup(e.target.value)}} value={pickup} type="text" placeholder="Pick up" required/>
                    <input class='drop_input' onChange={(e)=>{setDrop(e.target.value)}} value={drop} type="text" placeholder="Drop" required/>
                </div>
                <button class='book_button' id='book_button' onClick={()=>{submitData(pickup,drop)}}>Get Rat</button>
                <div class='text4'>Cruising in Style, Caring for Earth </div>
                <div class='text5'>100% Electric Rides</div>
            </div>
            <img class ='book_image' src={bookRideImage}/>
            
        </div>
        <img class='book_image_mobile' src={bookRideImageMobile}/>
        </div>
    )
}

export default BookRide;