import React from 'react';
import './why.css';
import project from './images/project.png';
import experience from './images/experience.png'; // Image for Professional Experience
import hackathon from './images/hackathon.png'; // Image for Smart India Hackathon
import college from './images/college.png';     // Image for College Competition
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='modiv'
                >
                    <div className="flex2">
                        <div className="box">
                            <img src={project} alt="Projects Completed" className='why_logo' />
                            <h4 className='mid_text'>6+</h4>
                            <p className='main_text_why'>Completed Projects</p>
                        </div>
                        <div className="box">
                            <img src={experience} alt="Professional Experience" className='why_logo' />
                            <h4 className='mid_text'>Experience</h4>
                            <p className='main_text_why'>Data Analyst & Operations</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='modiv'
                >
                    <div className="flex2">
                        <div className="box">
                            <img src={hackathon} alt="Smart India Hackathon" className='why_logo' />
                            <h4 className='mid_text'>1st Runner-Up</h4>
                            <p className='main_text_why'>Smart India Hackathon 2022</p>
                        </div>
                        <div className="box">
                            <img src={college} alt="College Competition" className='why_logo' />
                            <h4 className='mid_text'>1st Prize</h4>
                            <p className='main_text_why'>College Competition Winner</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WhyHireMe;
