import React from 'react'

import Style from "./HeroStyles.module.css"
import HeroImg from "../../assets/Heroine_Reshma.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import TwitterLight from "../../assets/twitter-light.svg"
import TwitterDark from "../../assets/twitter-dark.svg"

import GithubLight from "../../assets/github-light.svg"
import GithubDark from "../../assets/github-dark.svg"

import LinkdinLight from "../../assets/linkedin-light.svg"
import LinkdinDark from "../../assets/linkedin-dark.svg"

import cv from "../../assets/cv.pdf"
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === "light"  ? sun : moon;

  const TwitterIcon = theme === "light"  ? TwitterLight: TwitterDark;
  const GithubIcon = theme === "light"  ? GithubLight: GithubDark;
  const LinkdinIcon= theme === "light"  ? LinkdinLight: LinkdinDark;
  

  return (
    <section id="hero" className={Style.container}>
      <div className={Style.colorModeContainer}>
        <img className={Style.hero} src={HeroImg} alt="my image" />

        <img  className={Style.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>

        <div className={Style.info}>

          <h1>Reshma.CA</h1>

          <h2>Full Stack Developer</h2>

          <span>
            <a href="https://x.com/Reshmacaci" target="_blank">
            <img src={TwitterIcon} alt="Twitter Icon" />
            </a>

            <a href="https://github.com/Reshma-CA" target="_blank">
            <img src={GithubIcon} alt="Twitter Icon" /></a>

            <a href="https://www.linkedin.com/in/reshmaca" target="_blank">
            <img src={LinkdinIcon} alt="Twitter Icon" /></a>

          </span>
         
          <p className={Style.description}> With a passion for developing modern React and Django web apps for commercial businesses.</p>
          <a href={cv} download>
            <button className='hover' >Resume</button>
          </a>

        </div>
        
        </section>
  )
}

export default Hero

