import React from 'react'
import hero_img from '../../assets/home.jpg'
import './Hero.css'

const Hero = () => {

  return (
    <div>
      <div className="hero">
      <div className="hero_top">
        <div className="hero_left">
          <h2>I'm Alvin Jonathan</h2>
          <h1>Professional FullStack Developer </h1>
          <p>I'm a senior fullstack engineer with over 15 years of industrial working experience.  </p>
          <div className="buttons">
            <button>Hire Me</button>
            <button>View My Projects</button>
          </div>
        </div>
        <div className="hero_right">
          <div className="hero_img">
            <img src={hero_img} alt="" />
          </div>
        </div>
      </div>
      <div className="hero_bottom">
        
      </div>
      </div>
    </div>
  )
}

export default Hero