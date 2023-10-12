import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText("raihan35-559@diu.edu.bd");
        toast.success("Mail address copied 👌", { position: 'top-right', })
    }

    return (
        <section id="CONTACT" className="px-4 pt-16 min-h-fit lg:min-h-[74vh] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-cubic">
                 <motion.div
              variants={fadeIn('up', 0.8)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='w-64 mt-10  flex flex-row text-[20px] gap-x-6 max-w-max mx-auto'>
              <Link to="https://www.facebook.com/ariaan.tuhin/"> <FaFacebook></FaFacebook> </Link>
              <Link to="https://github.com/Tuhin35"> <FaGithub /> </Link>
              <Link to="https://www.linkedin.com/in/raihan-tuhin-7a200125a/"> <FaLinkedin /> </Link>
            </motion.div>
            <h1 className="text-xl md:text-[52px] font-semibold text-center my-8 text-white md:text-left md:leading-[4.25rem] w-full">Therefore,</h1>
            <h3 className=" p-3 md:p-1 text-3xl md:text-4xl py-6 leading-relaxed font-semibold text-para">I appreciate you coming by. I believe there should be constant learning and development. As a result, I'm currently searching to join a new team of professionals so that I may bring my significant design and development experience to bear on genuine business problems. Give me a call or shoot me an &nbsp;

                <a href="mailto:raihan35-559@diu.edu.bd" onClick={copyToClipboard}
                    className="cursor-pointer font-bold text-2xl md:text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-300 to-sky-400  border-b-2">
                    email
                </a>&nbsp;
                if you believe we would be a good fit.
                &#129309;</h3>

               

        </section>
    );
};

export default Footer;