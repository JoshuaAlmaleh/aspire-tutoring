import React, { useState } from 'react';
import '../CSS_folder/Home.css';
import { FAQ } from '../Backend/FAQ';
import { Services } from '../Backend/Services';
import ContactForm from '../Backend/ContactForm';
function Home() {
   const [showForm, setShowForm] = useState(false);
  return (
   <><section
          className="hero">
          <div className="hero-content"
              style={{ backgroundImage: `url('https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg')` }}>
              <h1 className="hero-title">Unlocking Your Potential, One Lesson at a Time</h1>
              <button className="hero-button" 
              // onClick={() => document.getElementById("Services").scrollIntoView({ behavior: "smooth" })}
              onClick={() => setShowForm(true)}
              >
                Learn More</button>
          </div>

      </section>
      
      
      {showForm && (
        <section className="ContactForm-section">
          <div className="container">
            <ContactForm />
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              Close Form
            </button>
          </div>
        </section>
      )}

      
      
      <section className="Welcome">
        <div className="container">
              <div className="Welcome">
                  <h1 className="Welcome-title">Welcome to Aspire Tutoring</h1>
                  <p className="Welcome-content">At Aspire Tutoring, we believe in providing personalised lessons that cater to the unique needs of each student. Our goal is to help students unlock their full potential and achieve academic success.</p>
              </div>
              </div>
          </section><section id = "Services" className = "Services">
          <div className="container">
            <Services />

          </div></section>
          <section className = "FAQ">
            <div className="container">
                <FAQ />
            </div>
            </section></>
  );
}

export default Home;
