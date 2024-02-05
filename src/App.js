import './App.scss';
import React, { useEffect } from 'react';

import NavBar from './components/NavBar.js';
import Headline from './components/Headline.js';
import content from './content.json';
import { AI_CONTENT } from './components/CarouselContent.js';
import Carousel from './components/Carousel.js';
import CarouselDots from './components/CarouselDots.js';
import IconList from './components/IconList.js';
import Timeline from './components/Timeline.js';
import About from './components/About.js';

function App() {
  const [ai_app, updateAIApp] = React.useState({
    currentIndex: 0,
    previousIndex: -1,
    direction: 0
  });
  const [swe_app, updateSWEApp] = React.useState({
    currentIndex: 0,
    previousIndex: -1,
    direction: 0
  });

  useEffect(() =>{
    let scrollTop = 0
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > scrollTop && currentScroll > 100) {
        document.querySelector(".navbar").classList.remove("active");
      } else{
        document.querySelector(".navbar").classList.add("active");
      }
      scrollTop = currentScroll <= 0 ? 0 : currentScroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  return (
    <div className="App">
      <div className="Nav-container">
        <NavBar className="Navbar"/>
      </div>
      <section>
        <Headline title={content.headline.title} subtitle={content.headline.subtitle} content={content.headline.content} />
      </section>
      <section className="Experience">
        <div className="Experience__intro">
          <h2>Experience and Education</h2>
          <p>
            Overview of recent work and development
          </p>
        </div>
        <Timeline />
      </section>
      <section className="Projects">
        <div className="Projects__intro">
          <h2>Projects</h2>
          <p>
            Big projects I have done 
          </p>
        </div>

        <Carousel content={AI_CONTENT} updateApp={updateAIApp} currentIndex={ai_app.currentIndex}
        previousIndex={ai_app.previousIndex} direction={ai_app.direction}
        />
        <div className="carousel-dots">
        <CarouselDots content={AI_CONTENT} currentIndex={ai_app.currentIndex} />
        </div>
      </section>
      <section className="Techstack">
        <div className="Techstack__intro">
          <h2>
            Things I know
          </h2>
        </div>
        <IconList />
      </section>
      <section className="About">
        <div className="About__intro">
          <h2>
            About me
          </h2>
        </div>
        <div>
          <About subtitle={"Hello!"} content={content.about.intro} />
        </div>
      </section>
      <section className="Footer"> 
      {
      //remove this maybe
      }
        <hr />
        <div className="details">
          <p>
          </p>
          <p>
            Alex Wu
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
