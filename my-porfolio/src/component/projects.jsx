import { projectimg2, projectimg4, saacid } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
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
              src={projectimg4}
              alt=""
            />
            <div className="githupProject">
              <h3
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Studio Website
              </h3>
              <span>
                {" "}
                <FaGithub
                  className="icongit"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                />
              </span>
            </div>
            <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
            </p>
          </div>
          <div className="gridp Two">
            <img
              src={projectimg2}
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
                Studio Website
              </h3>
              <span>
                {" "}
                <FaGithub
                  className="icongit"
                  data-aos-duration="1000"
                  data-aos="fade-in"
                  data-aos-delay="600"
                />
              </span>
            </div>
            <p data-aos-duration="1000" data-aos="fade-in" data-aos-delay="700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
            </p>
          </div>
          <div className="gridp Three">
            <img
              src={saacid}
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
                Studio Website
              </h3>
              <span>
                {" "}
                <FaGithub
                  className="icongit"
                  data-aos-duration="1000"
                  data-aos="fade-in"
                  data-aos-delay="800"
                />
              </span>
            </div>
            <p data-aos-duration="1000" data-aos="fade-in" data-aos-delay="700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto vel odit distinctio accusantium asperiores minus!
              Tempora delectus tenetur laborum?
            </p>
          </div>
          <div className="gridp Four">
            <img
              src={projectimg2}
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
                Studio Website
              </h3>
              <span>
                {" "}
                <FaGithub
                  className="icongit"
                  data-aos-duration="1000"
                  data-aos="fade-in"
                  data-aos-delay="800"
                />
              </span>
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
