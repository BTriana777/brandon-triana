import React from 'react'
import './style/brandon.css'

export const Brandon = () => {

  const parallax = (e) => {
    const imgs = document.querySelectorAll('.imgs-back').forEach(img => {
      const speed = img.getAttribute('speed');
      const x = (window.innerWidth - e.pageX*speed)/100;
      const y = (window.innerHeight - e.pageY*speed)/100;

      img.style.cssText = `transform: translateX(${x}px) translateY(${y}px);`
    })
  }

  return (
    <div>
      <header>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section  className='flex' id="home" onMouseMove={parallax} >
        <img className='imgs-back' src="./back-1.png" alt="back" speed="3"/>
        <img className='imgs-back' src="./back-2.png" alt="back" speed="2"/>
        <img className='imgs-back' src="./back-3.png" alt="back" speed="4"/>
        <img className='imgs-back' src="./back-4.png" alt="back" speed="3"/>
        <img className='imgs-back' src="./back-5.png" alt="back" speed="2"/>
        <img className='imgs-back' src="./back-6.png" alt="back" speed="4"/>
        <div className="text-container flex-column">
          <h1>Hi</h1>
          <h1>I'm Brandon Triana</h1>
          <h1>Full Stack Developer</h1>
        </div>
        <div className='img-container-header'>
          <img src="./BrandonOne.png" alt="brandon" className='img-home1'/>
          <img src="./BrandonTwo.png" alt="brandon" className='img-home2'/>
        </div>
      </section>

      <section id='about'>
        <p>I'm Brandon Triana Full Stack Developer, I'm from Colombia, I really like creating, learning or teaching. I specialize as Front end. I want to expand my knowledge and be able to develop mobile apps</p>
        <div className='skill-container'>
          <h1>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </h1>
          <div className='icons-skills'>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML5" />
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="SASS" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Nodejs" />
            <img src="https://img.icons8.com/color/452/mongodb.png" alt="MongoDB" />
          </div>
        </div>
      </section>

      <section id='projects'>
        <div className="card">
          <img src="./devs.png" alt="Devs"/>
          <h3>DEVS_UNITED</h3>
        </div>
      </section>
    </div>
  )
}
