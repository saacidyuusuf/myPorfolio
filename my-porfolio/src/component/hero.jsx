/* eslint-disable */
import { staggerContainer, textVariant } from "../utilist/motion";
import { motion } from "framer-motion";
import Classes from "./work.module.css";
import Canvas from './canvas'

const Hero = () => {

  return (
    <>
    <Canvas/>
    <section className={Classes.textbox}>
      <motion.div
        className={Classes.textcontent}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        >
        <motion.div variants={textVariant(1)} className={Classes.flexHero}>
          <div className={Classes.roundHero} />
          <div className={Classes.lineHero} />
        </motion.div>
        <motion.span variants={textVariant(1.1)}>Hi I'm Cabdimalik</motion.span>
        <motion.h1 variants={textVariant(1.2)}>Web developer</motion.h1>
        <motion.p variants={textVariant(1.3)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          minus <br />
          in veniam quod, blanditiis obcaecati officia nemo qui illo est
          perferendis ea optio reiciendis quia.
        </motion.p>
      </motion.div>
    </section>
        </>
  );
};

export default Hero;
