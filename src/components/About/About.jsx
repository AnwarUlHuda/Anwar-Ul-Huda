import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import './About.css';

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { FormattedMessage } from "react-intl";
import { IntlProvider } from 'react-intl';
import cv from '../../assets/Anwar_Ul_Huda_May_2025_Resume.pdf';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <IntlProvider>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Experienced Frontend Developer with more than 3 years of experience in web application development, specializing
          in building scalable, responsive, and visually appealing user interfaces. Proven ability to lead feature
          development, improve performance, and collaborate with cross-functional teams. Skilled in JavaScript,
          TypeScript, React.js, and Redux. Committed to staying updated with the latest industry trends and delivering
          high-quality, pixel-perfect solutions.
        </motion.p>

        <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="buttonDownload mt-4">
          <FormattedMessage
            id='btn-cv'
            defaultMessage='Download CV'
          />
        </a>

        <div className='mt-7 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </IntlProvider>
    </>
  );
};

export default SectionWrapper(About, "about");
