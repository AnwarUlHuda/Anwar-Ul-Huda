import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievement1, achievement2, achievement3 } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  title,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        style={{ backgroundImage: `url(${achievement1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      >
        <div className='relative w-full h-[230px]'>
          <h3>{title}</h3>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={image}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What makes my inventory valuable</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          My portfolio of certificates and endorsements serves as tangible evidence of my expertise and proficiency
          across various domains. Each certification signifies my dedication to continuous learning and mastery of essential skills.
          These endorsements validate my capabilities and achievements, showcasing my commitment to excellence in my field.
          From industry-recognized qualifications to specialized training programs, my credentials demonstrate my readiness
          to tackle challenges and deliver results.
          Explore my certifications to gain insight into the depth and breadth of my expertise.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        <StarsCanvas />
        {certificates.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        {/* <div class="iframe-wrapper">
          <iframe src="https://www.hackerrank.com/certificates/iframe/b1f196903caf" class="centered-iframe"></iframe>
        </div> */}

      </div>
    </>
  );
};

export default SectionWrapper(Works, "certificates");
