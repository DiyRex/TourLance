import React from 'react';
import ProfileCard from '../components/ProfileCard';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import Nav from '../components/nav';
import Profile from '../assets/ProfileCard/profile.jpg';
import '../styles/AboutUS.css';

function AboutUS() {
  return (
    <div className='about'>
      <div className="nav-fix">
            <Nav />
        </div>
        <div className="title-column">
            <h1>About<span>US</span></h1>
        </div>
        <div className="mission">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sed autem quibusdam atque dolorem, accusantium in alias nesciunt nihil mollitia
               praesentium voluptatem esse illum corporis amet dignissimos. Alias,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sed autem 
               quibusdam atque dolorem, accusantium in alias nesciunt nihil mollitia praesentium voluptatem esse illum corporis amet dignissimos. Alias,Lorem 
               ipsum, dolor sit amet consectetur adipisicing elit. Hic sed autem quibusdam atque dolorem, accusantium in alias nesciunt nihil mollitia praesentium 
               voluptatem esse illum corporis amet dignissimos. Alias,Lorem ipsum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sed autem quibusdam
                atque dolorem, accusantium in alias nesciunt nihil mollitia praesentium voluptatem esse illum corporis amet dignissimos. Alias,Lorem ipsum, dolor sit 
                amet consectetur adipisicing elit. Hic sed autem quibusdam atque dolorem, accusantium in alias nesciunt nihil mollitia praesentium voluptatem esse illum 
                corporis amet dignissimos. Alias,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sed autem quibusdam atque dolorem, accusantium in alias 
                nesciunt nihil mollitia praesentium voluptatem esse illum corporis amet dignissimos. Alias,Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Hic sed autem quibusdam atque dolorem, accusantium in alias nesciunt nihil mollitia praesentium voluptatem esse illum corporis amet dignissimos. Alias,
                dolor sit amet consectetur adipisicing elit. Hic sed autem quibusdam atque dolorem, 
               accusantium in alias nesciunt nihil mollitia praesentium voluptatem esse illum corporis amet dignissimos. Alias, ex temporibus!</p>
        </div>
        <div className="members">
        <h3>Our Team</h3>
        <div className="profile-container-hidden">
        <div className="profile-container">
            <div className="profile-card">
              <ProfileCard 
            image={Profile}
            user_name="John Carter" 
            bio="I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript"
            fb_url="#"
            tw_url="#"
            ln_url="#"
            /></div>
            <div className="profile-card">
            <ProfileCard 
            image={Profile}
            user_name="John Carter" 
            bio="I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript"
            fb_url="#"
            tw_url="#"
            ln_url="#"
            />
            </div>
            <div className="profile-card">
            <ProfileCard 
            image={Profile}
            user_name="John Carter" 
            bio="I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript"
            fb_url="#"
            tw_url="#"
            ln_url="#"
            />
            </div>
        </div>
        </div>
        </div>
        <Footer/>    
    </div>
  )
}

export default AboutUS