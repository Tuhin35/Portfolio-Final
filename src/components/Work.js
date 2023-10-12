import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import arrow from "../assets/Developer logo/ARROW.png";
import BOOTSTRAP from "../assets/Developer logo/bootstrap-5-1.svg";
import CSS from "../assets/Developer logo/css-3-svgrepo-com.svg";
import Express from "../assets/Developer logo/express-js-icon.svg";
import Firebase from "../assets/Developer logo/firebase-svgrepo-com.svg";
import HTML from "../assets/Developer logo/html-svgrepo-com.svg";
import Mongo from "../assets/Developer logo/mongodb-svgrepo-com.svg";
import Node from "../assets/Developer logo/node-svgrepo-com.svg";
import REACT from "../assets/Developer logo/react-2.svg";
import Tail from "../assets/Developer logo/tailwind-css-2.svg";
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Work = () => {
  const images = [
    REACT, Tail, Node, Express, Mongo, Firebase ,HTML ,CSS
  ]
  
  return (
    <section id="work" className='relative my-10  md:mt-36 mb-[50px]'>
      <div className='container mx-auto'>
      <SectionHeader 
        title="I work Hard_  " FcBriefcase={FcBriefcase}
        subtitle="Showcasing some of my awesome projects."
 />
      <img src={arrow} alt="" className="hidden md:block absolute lg:-top-[10%] lg:-right-[10%] lg:w-[13%] xl:-right-[12%] xl:w-[13%]" />
      <div className="flex flex-col flex-1  w-full gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          <motion.div
           variants={fadeIn('down', 0.1)} initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.1 }}
          className="w-[100%] border-[#ffffff83] border-[1px] h-[400px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"></div>
            {/* <img src="https://ashikonweb.netlify.app/static/media/autohunt%20ss.c026b6d0acf6f16f0795.png" alt="" className="w-full h-full object-cover" /> */}
            <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
              <h1 className="text-2xl py-4 font-semibold text-gradient">Online Resell market</h1>
              <p className={`text-sm text-para hidden text-black group-hover:block`}>Its a common market place where user can buy and sell secondhand Tv, Ac and refrigerator .</p>
              <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                {
                  images.map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                }
              </div>
              <div className="flex gap-3 py-2">
                <a target="_blank" href="http://autohunt-f5b1c.web.app" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                <a target="_blank" href="https://github.com/Ashikur540/AutoHunt-Resell-MarketPlace-Client-" rel="noreferrer" aria-label="github"><FaGithub /></a>


              </div>
            </div>
          </motion.div>
          <motion.div
          
          variants={fadeIn('up', 0.3)} initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[100%] border-[#ffffff83] border-[1px] h-[400px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectThree text-white mx-auto"></div>
            {/* <img src="https://ashikonweb.netlify.app/static/media/autohunt%20ss.c026b6d0acf6f16f0795.png" alt="" className="w-full h-full object-cover" /> */}
            <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
              <h1 className="text-2xl py-4 text-gradient font-semibold">Dentist Portal</h1>
              <p className={`text-sm text-para  text-black group-hover:block`}> You can appointment a Dentist at home</p>
              <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                {
                  images.map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                }
              </div>
              <div className="flex gap-3 py-2">
                <a target="_blank" href="http://autohunt-f5b1c.web.app" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                <a target="_blank" href="https://github.com/Ashikur540/AutoHunt-Resell-MarketPlace-Client-" rel="noreferrer" aria-label="github"><FaGithub /></a>


              </div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn('down', 0.4)} initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.4 }}
          className="w-[100%] border-[#ffffff83] border-[1px] h-[400px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectTwo text-white mx-auto"></div>
            {/* <img src="https://ashikonweb.netlify.app/static/media/autohunt%20ss.c026b6d0acf6f16f0795.png" alt="" className="w-full h-full object-cover" /> */}
            <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
              <h1 className="text-2xl py-4 text-gradient  font-semibold">Booking to travel Bangladesh</h1>
              <p className={`text-sm text-para hidden  text-black group-hover:block`}>You can Booking a many package to travel bangladeshi place.</p>
              <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                {
                  images.map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                }
              </div>
              <div className="flex gap-3 py-2">
                <a target="_blank" href="http://autohunt-f5b1c.web.app" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                <a target="_blank" href="https://github.com/Ashikur540/AutoHunt-Resell-MarketPlace-Client-" rel="noreferrer" aria-label="github"><FaGithub /></a>


              </div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn('up', 0.2)} 
           whileInView={'show'}
           viewport={{ once: false, amount: 0.2 }}
          className="w-[100%] border-[#ffffff83] border-[1px] h-[400px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectFour text-white mx-auto"></div>
            {/* <img src="https://ashikonweb.netlify.app/static/media/autohunt%20ss.c026b6d0acf6f16f0795.png" alt="" className="w-full h-full object-cover" /> */}
            <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
              <h1 className="text-2xl py-4 font-semibold text-gradient">Social Media</h1>
              <p className={`text-sm text-para hidden text-black group-hover:block`}>In this platform you you can post, comment and react to  other posts .</p>
              <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                {
                  images.map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                }
              </div>
              <div className="flex gap-3 py-2">
                <a target="_blank" href="http://autohunt-f5b1c.web.app" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                <a target="_blank" href="https://github.com/Ashikur540/AutoHunt-Resell-MarketPlace-Client-" rel="noreferrer" aria-label="github"><FaGithub /></a>


              </div>
            </div>
          </motion.div>
        </div>

      </div>
      </div>

    </section>
  )
}

export default Work