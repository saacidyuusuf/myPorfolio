import {
  attendenceImg,
  app,
  baxarApp,
  store,
} from "../assets";
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
              <Link to="https://github.com/saacidyuusuf/baxarFlow-application">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
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
              <Link>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
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
              <Link to="https://github.com/saacidyuusuf/EidStore">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
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
              <Link to="https://github.com/saacidyuusuf/Attendence-application">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
