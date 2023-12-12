import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
          variants={fadeIn('right', 0.3)} initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top'>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.6)} initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex-1'>
          <h2 className='h2 text-amber-900 text-bold'> About me.</h2>
          <h3 className='h3 mb-4'>I'm a Freelancer full stack web Developer with over 6 years of experience.</h3>
          <p>
            Hello, I am Raihan Uddin Tuhin.  Home  Town BrahmanBaria. I'm now studying software engineering at Daffodil International University.My passion has always been creating new things, and coding adds an added spark to that. I first became interested in web development in 2020 when I chose to learn more about it.After then, I became familiar with the MERN stack and worked on various projects.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={2} duration={2} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Years of <br />
                Exoerience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={100} duration={8} /> : null}

              </div>
              <div className='font-primary text-sm tracking-[2px]'>Project <br />
                completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={30} duration={4} /> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Satisfied <br />
                Clients
              </div>
            </div>
          </div>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center my-6 mx-auto lg:mx-0'>
           <Link to='contact'>
           <button className=' btn btn-lg'>
              Contact me
            </button>
           </Link>
            <Link className='text-gradient btn-link'> My Portfolio</Link>
          </motion.div>
        </motion.div>
      </div>

    </div>


  </section>;
};

export default About;
