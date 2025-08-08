/* eslint-disable react/prop-types */
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
      options={{max: 45, scale: 1, speed: 450}}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>

          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={() => window.open (source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt={github} className='w-1/2 h-1/2 object-contain' />

          </div>
        </div>
     </div>

     <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (<p key={tag.name} className={`text-[14px] ${tag.color}`}>
        #{tag.name}
      </p>))}
      </div>

     </div>
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
         variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I've had the opportunity to work on a few different projects that have helped me improve my skills as a developer. One of the projects I worked on was a web application using Node.js, JavaScript, HTML, and CSS. This project really pushed me to improve my web development skills and helped me gain a deeper understanding of front-end and back-end technologies. Another project I worked on was a computer vision application that used MediaPipe and OpenCV. This project was really interesting because it allowed me to explore computer vision and image processing techniques and develop my skills in these areas. Finally, I worked on a 3D development project, specifically a game, which helped me improve my skills in 3D modeling and game development. Overall, these projects gave me valuable experience in a range of technologies and domains, helping me to develop a well-rounded skill set as a developer.
        </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (<ProjectCard key = {`project-${index}`} index={index} {...project} />))}

      </div>

    </>
  )
}

export default SectionWrapper(Works, "");