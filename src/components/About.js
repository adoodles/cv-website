import React from 'react';

const About = ({ subtitle, content }) => {
  return (
    <div className="about">
      <div className="about__text">
        {subtitle && <h2 className="about__subtitle">{subtitle}</h2>}
        {content && <p className="about__content">{content}</p>}
      </div>
      <div className="about__images">
        <h2>Contacts</h2>
        <a href='https://drive.google.com/file/d/1KhR4LqX1gYkg_2DV0s6FnBpspn1F1Bh3/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='about__button'>CV</a>
        <a href='https://www.linkedin.com/in/alex-wu/' target="_blank" rel="noopener noreferrer" className='about__button'>LinkedIn</a>
      </div>
    </div>
  );
};

export default About;
