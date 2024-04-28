import Footer from "./Footer";
import { editing, marketing, uiux, web } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";
import { Link } from "react-router-dom";
import { Color } from "three";

const Services = () => {
  return (
    <>
      <div className="servicesHaye">
        <h1>Services</h1>
        <div className="service">
          <motion.div
            className="serviceCol"
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
          >
            <img src={web} alt="web creation" />
            <p>
              I'm front-end developer over 1 year and half i worked alot of
              Projects that you can view them on Github reach out if you want
              user friendly website
            </p>
            <Link  to="" style={{ textDecoration: 'none' , color: "#F6921E" }}>Visit here</Link>
            <h3>Front-end developer</h3>
          </motion.div>
          <motion.div
            className="serviceCol"
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={uiux} alt="web creation" />
            <p>
              I design Your dream website with UI/UX approach to make it more
              interactive for the users.
            </p>
            <Link to=""  style={{ textDecoration: 'none' , color: "#F6921E" }}>Visit here</Link>
            <h3>UI/UX</h3>
          </motion.div>
          <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.14 }}
            className="serviceCol"
          >
            <img src={marketing} alt="web creation" />
            <p>
              i'm digital marketing who promote products on facebook ads. aiming
              the audience who want that product we promoted alot of business so
              they can reach global audience.
            </p>
              <Link to=""  style={{ textDecoration: 'none' , color: "#F6921E" }}>Visit here</Link>
            <h3>Digital marketing</h3>
          </motion.div>
          <motion.div
            className="serviceCol"
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.16 }}
          >
            <img src={editing} alt="web creation" />
            <p>
              i'm video editer and i shot short films i worked with alot of
              people through online videos about their life or projects they are
              working on
            </p>
            <Link to=""  style={{ textDecoration: 'none' , color: "#F6921E" }}>Visit here</Link>
            <h3>Video Editing</h3>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
/* 
Here are the descriptions rewritten in a more natural and easy-to-understand style, avoiding overly complex language:

**1. Video Editing:**

> **I can turn your shaky phone footage into a polished masterpiece!**  Need a commercial, explainer video, or a heart-warming family montage?  I'll add music, effects, and smooth transitions to make your video stand out.

**2. UI/UX Design:**

> **Websites and apps should be easy to use, right?** I design interfaces that are clear, beautiful, and make sense.  No more getting lost clicking around! I'll focus on what users need and make your website or app a joy to use.

**3. Website Creation:**

> **Want a website that looks amazing and actually works?**  I can build you one! From creating a user-friendly layout to making sure your website loads fast, I'll take care of everything so you can focus on your business.

**4. Movie Poster Design:**

> **Your movie deserves a poster that pops!** I'll create a visually stunning poster that captures the heart of your film and makes people want to watch it. Whether it's a hilarious comedy or a thrilling action flick, I'll design a poster that reflects your movie's unique style.


*/
