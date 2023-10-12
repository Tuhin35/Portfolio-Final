import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants"
import Footer from './Footer';
const Contact = () => {
  return <section className='section container mx-auto flex flex-1 flex-col md:flex-row' id='contact' >
    <div className='flex flex-col md:flex-row'>
    <div className="">
      <div className="flex flex-col">
        <motion.div
          variants={fadeIn('up', 0.3)} initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}

          className="flex-1 ">
          <div>
            <h4 className="h4 text-5xl font-bold uppercase text-accent  mb-2 tracking-wide">
              get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none'>
              Lets Work <br /> <span className='text-gradient'>together</span>
            </h2>
          </div>
        </motion.div >

        <motion.form
          variants={fadeIn('down', 0.3)} initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1'>
          <input type="text" className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all
          ' placeholder='your email' />
          <input type="text" className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all
          ' placeholder='your email' />
          <textarea
            className='bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all
          resize-none
            ' placeholder='Your message'
          ></textarea>
          <button className='btn btn-lg items-center'>send message</button>
        </motion.form>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  </section>;
};

export default Contact;
