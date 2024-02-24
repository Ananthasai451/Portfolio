import './index.css';

function About() {
  return (
      <div className="about">
          <div className='information-heading'>HELLO <span className='hello-emoji'>👋</span></div>
          <ul className='about-me'>
              <li className='about-me-point'>An Enthusiastic Developer with <span className='experience-highlight'>2+ years of Professional experience</span> in Frontend technologies</li>
              <li className='about-me-point'>I have experience leading teams while fostering a collaborative environment</li>
              <li className='about-me-point'>I follow - "Crafting code with touch of humor"</li>
          </ul>
    </div>
  );
}

export default About;
