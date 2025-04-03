import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p>className='about_me_left'>Hello! I'm Mrunal Gangurde, a budding Software Developer, Data Analyst, and AI/ML enthusiast passionate about software development, testing, and data science. I specialize in analyzing and interpreting data to drive meaningful insights while exploring AI/ML tools like TensorFlow and PyTorch.
                                     My core expertise lies in data analysis, software development, and AI/ML, and we're always excited to connect and collaborate on innovative projects!</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
