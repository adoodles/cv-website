import React from 'react';
import logo from '../logo.svg';
import profile from './images/profile_pic.jpeg'

const Headline = ({ title, subtitle, content }) => {
  return (
    <div className="headline">
      <div className="headline__text">
        <h1 className="headline__title">{title}</h1>
        {subtitle && <h2 className="headline__subtitle">{subtitle}</h2>}
        {content && <p className="headline__content">{content}</p>}
      </div>
      <div className="headline__profile">
        <img src={profile}  alt="profile" />
      </div>
    </div>
  );
};

export default Headline;
