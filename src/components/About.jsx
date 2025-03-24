
import '../styles/about.css';
import AboutUsCard from './WhatAboutUs.jsx';
import contacts from '../assets/contacts.js';

const About = () => {
    function createCard(contact){
        return <AboutUsCard 
         key = {contact.id}
         imageSrc = {contact.imageSrc}
         cardTitle = {contact.cardTitle}
         cardDesignation = {contact.cardDesignation}
         cardText = {contact.cardText} 
         buttonText = {contact.buttonText} 
         buttonLink = {contact.buttonLink} />
    }

    return (
        <div className="about-us-body">
            <h1 className="about-us-title">About Us</h1>
            <div className="feature-divider"></div>
            <p className="about-us-subtitle">
            Mufasa empowers investors with cutting-edge tools and data-driven insights to build and manage successful portfolios.
            With a seamless blend of technology and expertise, our platform simplifies market navigation, helping you make smarter investment decisions.
            Whether you're a veteran investor or just getting started, BullBear Hub is your trusted guide to financial success.
                <br/><br/>
                Driven by expertise and a passion for innovation, our team is dedicated to your success.
                Get to know the people shaping the future of investing.
            </p>
            <h2 className="section-title">Who We Are</h2>

            <div className="cards-container">
                {/* Map function to create cards for each contact */ }
                {contacts.map(createCard)} 
            </div>
        </div>
    );
}

export default About;
