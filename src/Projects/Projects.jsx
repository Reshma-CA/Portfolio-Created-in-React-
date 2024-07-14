import React from 'react'


import Style from "../Projects/Projects.module.css"
import viberr from "../assets/ecommerce.avif"
import FreshBurger from "../assets/imagesres.jpeg"
import hipster from "../assets/li.jpg"
import fitlift from "../assets/joblab-colorlib-template-353x278.jpg"
import ProjectCard from '../common/ProjectCard'


const Projects = () => {
  return (
    <section id="projects" className={Style.container}>
    <h1 className='sectionTitle'>Projects</h1>

    <div className={Style.projectsContainer}>

      <ProjectCard src={viberr}
       link="https://github.com/Reshma-CA/Ecommerce_Real_sporty"
       h3="RealSporty" p=" Ecommerce App "
       />

      <ProjectCard src={hipster}
       link="https://github.com/Reshma-CA/Library_management_system-CRUD-"
       h3="Library Management System" p=" Library Management App "
       />

     <ProjectCard src={ FreshBurger}
       link="https://github.com/Reshma-CA/Chandra_Restaurant-MaterialUI-"
       h3="chandra Resturent" p=" Resturent App "
       />

    <ProjectCard src={fitlift}
       link="https://github.com/Reshma-CA/RealJobs_Backend"
       h3="Job platform" p=" Job platform App "
       />

    </div>
    
    </section>
  )
}

export default Projects