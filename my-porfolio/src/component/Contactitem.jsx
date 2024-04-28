import Navbar from "../layout/navbar";
import classes from "./contact.module.css";
import img1 from "./images/3d-rendering-detective-profession-male-avatar_52659-1091.jpg";
import {FaGithub, FaTwitter, FaLinkedin}from 'react-icons/fa'
import {useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contactitem = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
      delay: 300, // Set the delay before animations start (in milliseconds)
    })
  }, []);

  return (
    <>
      <section data-aos='zoom-in' className={classes.contactpor}>
        <div className={classes.contacts}>
          <div className={classes.contactcol}>
            <div className={classes.gridtwo}>
              <h3>Git in Touch</h3>
              <img width="200" src={img1} alt="" />
              <div className={classes.icons}>
                <a href="">
                  <FaLinkedin/>
                </a>
                <a className="github" href="https://github.com/saacidyuusuf/cabdimalik">
                  <FaGithub/>
                </a>
                <a href="" className="twitter">
                  <FaTwitter/>
                </a>
              </div>
            </div>
            <div className={classes.formhaye}>
              <form action="">
                <div className={classes.gadi}>
                  <label className={classes.label1} htmlFor="">
                    first name
                  </label>
                  <input type="text" placeholder="first name" required />
                  <br />
                  <label className={classes.label2} htmlFor="">
                    last name
                  </label>
                  <input type="text" placeholder="last name" required />
                </div>
                <div className={classes.gaditwo}>
                  <label htmlFor="">Your Email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                  <br />
                  <label htmlFor="">Messege</label>
                  <br />
                  <textarea
                    name="text"
                    id="text"
                    cols="40"
                    rows="10"
                  ></textarea>
                  <button className={classes.formbtn} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactitem;
