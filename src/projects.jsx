import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

// Import images for the projects (ensure these images exist or adjust paths as needed)
import portfolioImg from "./images/portfolio.jpg";
import cltImg from "./images/clt.jpg";
import hrImg from "./images/hr.jpg";
import textModImg from "./images/textModeration.jpg";
import autodocImg from "./images/autodocgen.jpg";
import autoseoImg from "./images/autoseo.jpg";
import devTimerImg from "./images/devtimer.jpg";
import resumeEvalImg from "./images/resumeEval.jpg";
import aiApiImg from "./images/aiapi.jpg";
import satoriImg from "./images/satori.jpg";

const Projects = () => {
  const cards = [
    {
      imageUrl: portfolioImg,
      altText: 'Portfolio Website',
      title: 'Portfolio Website',
      description: 'This very portfolio website showcasing my projects and skills. Explore at mrunalgangurde.github.io',
      explore: 'https://mrunalgangurde.github.io'
    },
    {
      imageUrl: cltImg,
      altText: 'CLT Visualization',
      title: 'CLT-Visualization',
      description: 'An interactive visualization tool for CLT data that offers clear insights and dynamic graphs.',
      explore: 'https://github.com/MrunalGangurde/CLT-Visualization'
    },
    {
      imageUrl: hrImg,
      altText: 'HR Attrition Prediction Model',
      title: 'HR Attrition Prediction Model',
      description: 'A machine learning model designed to predict employee attrition and provide actionable HR insights.',
      explore: 'https://github.com/MrunalGangurde/HR-Attrition-Prediction'
    },
    {
      imageUrl: textModImg,
      altText: 'Comprehensive Text Moderation System',
      title: 'Comprehensive Text Moderation System',
      description: 'An AI-powered text moderation system that filters and moderates content effectively across platforms.',
      explore: 'https://github.com/MrunalGangurde/Text-Moderation-System'
    },
    {
      imageUrl: autodocImg,
      altText: 'AutoDocGen',
      title: 'AutoDocGen',
      description: 'An automated documentation generation tool that streamlines the process of creating project docs.',
      explore: 'https://github.com/MrunalGangurde/AutoDocGen'
    },
    {
      imageUrl: autoseoImg,
      altText: 'AutoSeo',
      title: 'AutoSeo',
      description: 'A tool that automates SEO tasks, optimizing web content for better search engine rankings.',
      explore: 'https://github.com/MrunalGangurde/AutoSeo'
    },
    {
      imageUrl: devTimerImg,
      altText: 'DevTimer',
      title: 'DevTimer',
      description: 'A productivity tool for developers to track coding time and improve efficiency throughout the day.',
      explore: 'https://github.com/MrunalGangurde/DevTimer'
    },
    {
      imageUrl: resumeEvalImg,
      altText: 'Resume Evaluation Tool',
      title: 'Resume Evaluation Tool with Gemini AI',
      description: 'An AI-driven tool that evaluates resumes, offering insights and improvements powered by Gemini AI.',
      explore: 'https://github.com/MrunalGangurde/Resume-Evaluation-Tool'
    },
    {
      imageUrl: aiApiImg,
      altText: 'AI as an API',
      title: 'AI as an API',
      description: 'A sleep-related AI service offered as an API (currently under construction) for innovative sleep solutions.',
      explore: 'https://github.com/MrunalGangurde/AI-as-an-API'
    },
    {
      imageUrl: satoriImg,
      altText: 'Satori Android Wallpaper App',
      title: 'Satori',
      description: 'An Android wallpaper application (under construction) designed to deliver inspiring visuals daily.',
      explore: 'https://github.com/MrunalGangurde/Satori'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="up_gap"
      id="project"
    >
      <h2 className="heading1 down_gap">Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
