import React from 'react';
import './skills.css';
import './new.css';
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1'>Skills</h2>

      <h3 className='heading2'>Programming & Scripting</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="Python" />
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="SQL" />
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Core Java" />
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Excel" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Data Analytics & Tools</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Power BI" />
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Pandas" />
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="NumPy" />
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="Matplotlib" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
