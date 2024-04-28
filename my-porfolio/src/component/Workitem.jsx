import Classes from "./work.module.css";
import { illustrator, premier } from "../assets/index";
import jsimg from "./logos/javascript.png";
import githubimg from "./logos/317712_code repository_github_repository_resource_icon.png";
import reactimg from "./logos/7423887_react_react native_icon.png";
import htmlimg from "./logos/317755_badge_html_html5_achievement_award_icon.png";
import { useEffect, useState } from "react";
import Testimonial from "./testimonial";
import Projects from "./projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./hero";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Aboutitem from "./Aboutitem";

const WorkItem = () => {
  const [isopen, setopen] = useState(null);
  const handleSectionClick = (sectionName) => {
    setopen(isopen === sectionName ? null : sectionName);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, []);
  return (
    <>
      <Hero />
      <Aboutitem />
      <section data-aos="fade" data-aos-delay="300" className={Classes.skill}>
        <div className={Classes.containerskill}>
          <div className={Classes.titleskill}>
            <h1>
              <span className="projectspan">&&</span> Skills
            </h1>
          </div>
          <div className={Classes.colorhaye}>
            <div className={Classes.colorone}></div>
            <div className={Classes.skillkayga}>
              <div className={Classes.skillone}>
                <img width="70" src={jsimg} alt="" />
                <motion.div
                  onClick={() => handleSectionClick("javascript")}
                  style={{ zIndex: 1 }}
                  className={Classes.javainfo}
                  data-aos="fade-in"
                  data-aos-delay="500"
                  layout
                  transition={{ layout: { duration: 1, type: "spring" } }}
                ></motion.div>
              </div>

              <div className={Classes.skillone}>
                <img width="70" src={premier} alt="" />
              </div>
              <div className={Classes.skillone}>
                <img width="70" src={htmlimg} alt="" />

                <motion.div
                  onClick={() => handleSectionClick("html")}
                  className={Classes.htmlinfo}
                  style={{ zIndex: 1 }}
                  data-aos="fade-in"
                  data-aos-delay="600"
                  layout
                  transition={{ layout: { duration: 1, type: "spring" } }}
                >
                  <motion.h2 layout="position">html</motion.h2>
                  {isopen === "html" && (
                    <motion.div
                      className={Classes.htmlmotion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <p>
                        html ipsum, dolor sit amet consectetur adipisicing elit.
                        Atque laudantium saepe earum libero fugiat nostrum sequi
                        mollitia? Maxime, perspiciatis neque.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <div className={Classes.skillone}>
                <img width="70" src={illustrator} alt="" />
              </div>
              <div className={Classes.skillone}>
                <img width="70" src={reactimg} alt="" />

                <motion.div
                  data-aos="fade-in"
                  data-aos-delay="700"
                  onClick={() => handleSectionClick("github")}
                  className={Classes.githubinfo}
                  style={{ zIndex: 1 }}
                  layout
                  transition={{ layout: { duration: 1, type: "spring" } }}
                ></motion.div>
              </div>
              <div className={Classes.skillone}>
                <img width="70" className="github" src={githubimg} alt="" />
              </div>
            </div>
            <div className={Classes.colortwo}></div>
          </div>
        </div>
      </section>
      <div className="projectwork">
        <Projects />
      </div>
      <div className="aboutfooter">
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default WorkItem;
