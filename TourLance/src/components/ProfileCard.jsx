import React from 'react';
import '../styles/ProfileCard.css'
import card from '../assets/ProfileCard/card.png';
import facebookIcon from '../assets/ProfileCard/facebook.png';
import twitterIcon from '../assets/ProfileCard/twitter.png';
import linkedinIcon from '../assets/ProfileCard/linkedin.png';

function ProfileCard(Props) {
  return (
    <div class="profile-card">
      <div class="card-container" style={{backgroundImage:`url(${card})`}}>
        <div class="upper-container" style={{backgroundImage:`url(${Props.image})`}}></div>
        <div class="lower-container">
          <div class="content-container">
            <h1>{Props.user_name}</h1>
            <p>
              {Props.bio}
            </p>
          </div>
          <div class="social-container">
            <a href={Props.fb_url}><img src={facebookIcon} alt="img" /></a>
            <a href={Props.tw_url}><img src={twitterIcon} alt="img" /></a>
            <a href={Props.ln_url}><img src={linkedinIcon} alt="img" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard