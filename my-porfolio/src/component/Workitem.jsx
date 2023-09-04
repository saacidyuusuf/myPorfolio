import Classes from "./work.module.css";
import Navbar from "../layout/navbar";
import pyimg from "./logos/4375050_logo_python_icon.png";
import jsimg from "./logos/javascript.png";
import cssimg from "./logos/657801_circles_code_css_css3_line_icon.png";
import githubimg from "./logos/317712_code repository_github_repository_resource_icon.png";
import reactimg from "./logos/7423887_react_react native_icon.png";
import htmlimg from "./logos/317755_badge_html_html5_achievement_award_icon.png";
import { useEffect, useState } from "react";
import Experience from "./Experience";
import Projects from "./projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./hero";
import { motion } from "framer-motion";
import Footer from "./Footer";

const WorkItem = () => {
  const [isopen, setopen] = useState(null);
  const handleSectionClick = (sectionName) => {
    setopen(isopen === sectionName ? null : sectionName);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      delay: 100, // Set the delay before animations start (in milliseconds)
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero/>
      <Experience/>
      <section data-aos="fade" data-aos-delay="300" className={Classes.skill}>
        <div className={Classes.containerskill}>
          <div className={Classes.titleskill}>
            <h1>Skills</h1>
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
                >
                    <motion.div
                      className={Classes.jsmotion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}>
                      <p>
                        Be so Good They <br/>can't Ignore U
                      </p>
                    </motion.div>
                </motion.div>
              </div>
              
              <div className={Classes.skillone}>
                <img width="70" src={pyimg} alt="" />
                <motion.div
                  onClick={() => handleSectionClick("python")}
                  style={{ zIndex: 1 }}
                  data-aos="fade-in"
                  data-aos-delay="500"
                  className={Classes.pyinfo}
                  layout
                  transition={{ layout: { duration: 1, type: "spring" } }}
                >
                  <motion.h2>python work</motion.h2>
                  {isopen === "python" && (
                    <motion.div
                      className={Classes.pymotion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <p>
                        Python ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque laudantium saepe earum libero fugiat nostrum
                        sequi mollitia? Maxime, perspiciatis neque.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
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
                  <motion.h2 layout="position">html work</motion.h2>
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
                <img width="70" src={cssimg} alt="" />
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
                  transition={{ layout: { duration: 1, type: "spring" } }}>
                  
                    <motion.div
                      className={Classes.githubmotion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}>
                      <p>
                        every man has Two life when <br />did Your second start?
                      </p>
                    </motion.div>
                </motion.div>
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
      <Projects/>
      </div>
      <Footer/>
    </>
  );
};

export default WorkItem;
