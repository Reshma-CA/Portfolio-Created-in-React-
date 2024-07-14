import React from 'react'
import Style from "./Skills.module.css";

import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkilllList from '../../common/SkilllList';

const Skills = () => {
  return (
    <section id="skills" className={Style.container}>
        <h1 className="sectionTitle">Skills</h1>

        <div className={Style.skillList}>
           
        <SkilllList src={checkMarkIcon} skill="HTML"/>
        <SkilllList src={checkMarkIcon} skill="CSS"/>
        <SkilllList src={checkMarkIcon} skill="JavaScripat"/>
        <SkilllList src={checkMarkIcon} skill="Python"/>
        <SkilllList src={checkMarkIcon} skill="Django"/>
        <SkilllList src={checkMarkIcon} skill="SQL"/>

      </div>
      <hr/>
      <div className={Style.skillList}>
           
           <SkilllList src={checkMarkIcon} skill="Rest Api"/>
           <SkilllList src={checkMarkIcon} skill="React"/>
           <SkilllList src={checkMarkIcon} skill="Material UI"/>
           <SkilllList src={checkMarkIcon} skill="Git"/>
          
   
         </div>

    </section>
  )
}

export default Skills