import { attendenceImg, app, baxarApp, store } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="projects">
      <div className="projectCont">
        <div className="projectTitle">
          <h1>
            <span className="projectspan">&&</span> Projects
          </h1>
        </div>
        <div className="projectGrid">
          <div className="gridp One">
            <img
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              src={baxarApp}
              alt=""
            />
            <div className="githupProject">
              <h3
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Baxarflow Application
              </h3>
              <Link
              style={{ textDecoration: 'none' , color: "#F6921E" }}
               to="https://github.com/saacidyuusuf/baxarFlow-application">
                <span>
                  <FaGithub
                    className="icongit"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  />
                </span>
              </Link>
            </div>
            <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
              i Created this web application so that people get article related
              to tech and get what they looking for.
            </p>
          </div>
          <div className="gridp Two">
            <img
              src={store}
              alt=""
              data-aos-duration="1000"
              data-aos="fade-in"
              data-aos-delay="600"
            />
            <div className="githupProject">
              <h3
                data-aos-duration="1000"
                data-aos="fade-in"
                data-aos-delay="600"
              >
                baxarStore Website
              </h3>
              <Link style={{ textDecoration: 'none' , color: "#F6921E" }}>
                <span>
                  <FaGithub
                    className="icongit"
                    data-aos-duration="1000"
                    data-aos="fade-in"
                    data-aos-delay="600"
                  />
                </span>
              </Link>
            </div>
            <p data-aos-duration="1000" data-aos="fade-in" data-aos-delay="700">
              This is beautiful web store to increase my knownledge on javascript.
              no framework pure javascript store.
            </p>
          </div>
          <div className="gridp Three">
            <img
              src={app}
              alt=""
              data-aos-duration="1000"
              data-aos="fade-in"
              data-aos-delay="700"
            />
            <div className="githupProject">
              <h3
                data-aos-duration="1000"
                data-aos="fade-in"
                data-aos-delay="800"
              >
                EidStore Website
              </h3>
              <Link 
              style={{ textDecoration: 'none' , color: "#F6921E" }}
              to="https://github.com/saacidyuusuf/EidStore">
                <span>
                  <FaGithub
                    className="icongit"
                    data-aos-duration="1000"
                    data-aos="fade-in"
                    data-aos-delay="800"
                  />
                </span>
              </Link>
            </div>
            <p data-aos-duration="1000" data-aos="fade-in" data-aos-delay="700">
              I am currently working on an app built with React Native that aims
              to assist individuals involved in selling Eid clothes. The app
              will feature a wide selection of clothes from three major
              companies. Previously, sellers faced challenges with in-person
              sales when customers wanted to purchase three dozen clothes or
              more. With this app, they will be able to conveniently buy three
              dozen or more clothes, list them on the platform, and the app will
              provide information on where they can deliver their products.
            </p>
          </div>
          <div className="gridp Four">
            <img
              src={attendenceImg}
              alt=""
              data-aos-duration="1000"
              data-aos="fade-in"
              data-aos-delay="800"
            />
            <div className="githupProject">
              <h3
                data-aos-duration="1000"
                data-aos="fade-in"
                data-aos-delay="800"
              >
                Attendence application
              </h3>
              <Link 
              style={{ textDecoration: 'none' , color: "#F6921E" }}
              to="https://github.com/saacidyuusuf/Attendence-application">
                <span>
                  <FaGithub
                    className="icongit"
                    data-aos-duration="1000"
                    data-aos="fade-in"
                    data-aos-delay="800"
                  />
                </span>
              </Link>
            </div>
            <p data-aos-duration="1000" data-aos="fade-in" data-aos-delay="900">
              An Attendnece Application that would help many schools and university
              to keep track on the students who came to class and the ones who
              did'nt and it has a lot of features. and it would help teachers to
              see which class they are teaching the whole year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
