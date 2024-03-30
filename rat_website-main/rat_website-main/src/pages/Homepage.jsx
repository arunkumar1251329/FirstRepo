import React from "react";
import NavBar from "../sections/navbar";
import SectionGallery from '../sections/section1';
import BookRide from '../sections/book_ride';
import BusinessSection from '../sections/business_section';
import JoinUs from '../sections/join_section';
import FooterSection from '../sections/footer';
import TopBanner from "../sections/top_banner";

function Homepage() {
    return(
        <>
          <NavBar />
        <SectionGallery />
        <TopBanner />
        <BookRide />
        <BusinessSection />
        <JoinUs />
        <FooterSection />
        </>
    )
    
}

export default Homepage