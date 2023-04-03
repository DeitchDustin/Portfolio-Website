import './about.css';
import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt='Description' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'></div>
          <p>
            As a former geologist, Navy veteran, and Pacific Crest Trail 'Thru' Hiker, I've traversed many different paths that have each imparted valuable lessons and skills. From working alongside diverse groups of people in the Navy, to enduring and adapting to various environments and conditions as a field geologist, my experiences have equipped me with a breadth of knowledge and expertise.
          </p>
          <p>
            Currently, I am embarking on a new journey as a software developer, having completed the Hack Reactor advanced software engineering immersive program, which provided me with over 1000 hours of coursework to hone my technical skills.

            With a history of overcoming challenges and adapting to different learning environments, I'm confident in my ability to thrive in the tech industry. I am eager to tackle new challenges and continue expanding my skillset in the exciting world of software development.
          </p>
          <a href={CV} download='DeitchDustin-Resume.pdf' className='btn primary'> Download Resume <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About;