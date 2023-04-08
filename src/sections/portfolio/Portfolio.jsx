import './portfolio.css';
import ProjectCatagories from './ProjectCatagories';
import Projects from './Projects';
import data from './data';
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out the projects that I've been working on.
      </p>
      <div className='container portfolio__container'>
        <ProjectCatagories/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio;