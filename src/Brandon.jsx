import React, {useState} from 'react'

import dataProjects from './dataProjects';
import { Cards } from './Cards';
import { GrGithub, GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaCircleNotch, FaCircle, FaHome, FaAngellist, FaReact, FaPhoneAlt} from "react-icons/fa";

import './style/brandon.css';
import 'animate.css';

export const Brandon = () => {

  const [btnActive, setBtnActive] = useState(true)
  const [btnNav, setBtnNav] = useState(false)
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: ''
  })

  const changeNav = () => {
    setBtnNav(!btnNav)
  }
  
  const changeValue = ({target}) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value
    })
    formValidator()
  }

  const formValidator = () => {
    if((formValue.name.length > 0)&&(formValue.email.length > 0)&&(formValue.message.length > 4)){
      setBtnActive(false)
    }else{
      setBtnActive(true)
    }
  }

  const parallax = (e) => {
    document.querySelectorAll('.imgs-back').forEach(img => {
      const speed = img.getAttribute('speed');
      const x = (window.innerWidth - e.pageX*speed)/100;
      const y = (window.innerHeight - e.pageY*speed)/100;

      img.style.cssText = `transform: translateX(${x}px) translateY(${y}px);`
    })
  }
  return (
    <div>
      <header>
        <ul className='nav-desktop'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="btn-nav-mobile" onClick={changeNav}>
          {
            btnNav?
            <FaCircleNotch color='#fff' size={'28px'}/>
            :
            <FaCircle color='#9a7de5' size={'28px'} />
          }
        </div>

        <nav 
          className={`nav-mobile-container animate__animated ${btnNav? 'animate__fadeInLeft': 'animate__fadeOutLeft'}`}
          // style={{display: `${btnNav? 'block': 'none'}`}} 
        >
          <ul className='nav-mobile'>
            <li><a href="#home" onClick={changeNav}>Home</a><FaHome color='#fff' size={'38px'} /></li>
            <li><a href="#about" onClick={changeNav}>About</a><FaAngellist color='#fff' size={'32px'} /></li>
            <li><a href="#projects" onClick={changeNav}>Projects</a><FaReact color='#fff' size={'32px'} /></li>
            <li><a href="#contact" onClick={changeNav}>Contact</a><FaPhoneAlt color='#fff' size={'28px'} /></li>
          </ul>
        </nav>

      </header>
      <section  className='flex' id="home" onMouseMove={parallax} >
        <img className='imgs-back' src="https://i.imgur.com/sYqjFAZ.png" alt="back" speed="3"/>
        <img className='imgs-back' src="https://i.imgur.com/zt2sRZq.png" alt="back" speed="2"/>
        <img className='imgs-back' src="https://i.imgur.com/dzwhEty.png" alt="back" speed="4"/>
        <img className='imgs-back' src="https://i.imgur.com/wKKPi20.png" alt="back" speed="3"/>
        <img className='imgs-back' src="https://i.imgur.com/Y0973jg.png" alt="back" speed="2"/>
        <img className='imgs-back' src="https://i.imgur.com/D6xIx4O.png" alt="back" speed="4"/>
        <div className="text-container flex-column">
          <h1>Hi</h1>
          <h1>I'm Brandon Triana</h1>
          <h1>Full Stack Developer</h1>
          <div className='icon-home'>
            <a href="https://github.com/BTriana777" target="_blank" rel="noreferrer" ><GrGithub size={'28px'} color={'#fff'} cursor={'pointer'}/></a>
            <a href="https://www.linkedin.com/in/brandontriana/" target="_blank" rel="noreferrer" ><GrLinkedin size={'28px'} color={'#fff'} cursor={'pointer'}/></a>
            <a href="https://www.instagram.com/b_trianap/" target="_blank" rel="noreferrer" ><GrInstagram size={'28px'} color={'#fff'} cursor={'pointer'}/></a>
          </div>
        </div>
        <div className='img-container-header'>
          <img src="https://i.imgur.com/gQInrrT.png" alt="brandon" className='img-home1'/>
          <img src="https://i.imgur.com/5jJfOLk.png" alt="brandon" className='img-home2'/>
        </div>
      </section>

      <section id='about'>
        <p className='animate__animated animate__fadeInLeft'>I'm Brandon Triana Full Stack Developer, I'm from Colombia, I really like creating, learning or teaching. I specialize as Front end. I want to expand my knowledge and be able to develop mobile apps</p>
        <div className='skill-container animate__animated animate__fadeInRight animate__fadeOutLeft'>
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
        <h1>Some of my projects</h1>
        <div className="cards-container">
          {dataProjects.map(({id, title, code, deploy, img}) => (
            <Cards 
              key = {id}
              title = {title}
              code = {code}
              deploy = {deploy}
              img = {img}
            />
          ))}
        </div>
      </section>

      <section id="contact">
          <form action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL}`} method="post">
            <h1>Send me a messagge!</h1>
            <input type="text" name="name" placeholder="Name"  autoComplete="false" value={formValue.name} onChange={changeValue} />
            <input type="email" name='email' placeholder='Email' autoComplete="false" value={formValue.email} onChange={changeValue} />
            <input type="tel" name="tel" placeholder='Phone' autoComplete="false"/>
            <textarea placeholder='Message' name="message" cols="30" rows="10" value={formValue.message} onChange={changeValue} ></textarea>
            <button type="submit" disabled={btnActive} style={{boxShadow:  `${btnActive? '' : '0 0 8px var(--primary)'}`, backgroundColor: `${btnActive? '' : 'var(--primary)'}` }} >SEND</button>
            <input type="hidden" name="_next" value="https://btriana777.github.io/brandon-triana/"></input>
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
      </section>
    </div>
  )
}
