import React from "react";
import "../CSS_folder/ContentSection.css"; 

const DiscountOffer = () => {
  return (
    <section className="discount-offer">
      <div className="discount-text">
        <h2>Limited time offer: 10% OFF on First Lesson</h2>
        <p>
        Are you ready to excel in math?<br/> Book your first personalized math tutoring session with Aspire Tutoring today and receive 10% off! Don't miss this opportunity to transform your math skills and boost your confidence. Contact us now to secure your spot and take the first step towards academic success!
        </p>
        <a href="/contact" className="cta-button">Claim Your Discount</a>
      </div>
    </section>
  );
};

export default DiscountOffer;
