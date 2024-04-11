import React from 'react'
import './About.css'
// @ts-ignore
import NavBarComponent from 'NavBarComponent/NavBarComponent'
import profile from '../assets/profile.png'

function About() {
  return (
    <div>
      <NavBarComponent />
      <section className="about">
        <img src={profile} />
        <p> Hola soy goku</p>
      </section>
    </div>
  )
}

export default About
