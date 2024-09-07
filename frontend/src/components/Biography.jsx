import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p id="Bio">Biography</p>
          <h3 id="WWA ?">Who We Are ? </h3>
          <p>
          Rajiv Gandhi Medical Services (RGMS): Compassionate Care for a Healthier Tomorrow
          Founded in honor of the late Prime Minister Rajiv Gandhi.
          State-of-the-art facility blending expertise with empathy.
          Personalized health solutions for each patient.
          Quality, safety, and community engagement at our core.
          Join us on this journey toward wellness!
          </p>
          <p>Our Commitment</p>
          <p>Quality and Safety: RGMS adheres to the highest standards of quality and safety. Your well-being is our priority.</p>
          <p>
          Community Engagement: Beyond hospital walls, we engage with our community—conducting health camps, awareness drives, and outreach programs.
          </p>
          <p>Research and Innovation: We stay at the forefront of medical advancements, contributing to scientific research and innovation.</p>
          <p>Join Our Journey ❤️ </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
