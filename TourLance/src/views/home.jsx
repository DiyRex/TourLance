import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/nav';
import Seegiriya from '../assets/seegiriya2.jpg'
import '../styles/home.css'
import VisitSL from '../components/VisitSL'
import Button from 'react-bootstrap/Button';

export default function home() {
    return (
        <div className='home-page'>
            <div className="nav-fix">
                <Nav />
            </div>
            <div className="homeimg">
                <img className='main-img' src={Seegiriya} alt="" />
                <div className='home-description'>
                    <p className='main-para'>
                    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
                    </p>
                    <div className='main-button'>
                        <Button className='explore-button' size="lg" href="#">Explore</Button> 
                        <Button className='booknow-button' size="lg"  href="#">Book Now</Button>
                    </div>
                </div>
            </div>
            <VisitSL />
            <Footer />
        </div>
    )
}
