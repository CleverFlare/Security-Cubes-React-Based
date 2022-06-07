import "./css/home.css";
import Typography from "../components/Typography";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Plan from "../complex components/Plan";
import TwitterSvg from "../icons/TwitterSvg";
import FacebookSvg from "../icons/FacebookSvg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="home-page">
      <div data-aos="fade-right" className="flex-center" id="home">
        <Typography
          varient="caption"
          element="p"
          style={{ textTransform: "uppercase" }}
        >
          cyber security made fun!
        </Typography>
        <Typography varient="pageHeader" element="p">
          Compete in a MMORPG game with other hackers.
        </Typography>
        <Button to="/hall">Hacker Portal</Button>
      </div>
      <div data-aos="fade-right" className="flex-center" id="about">
        <div className="flex-center__wrapper-columns">
          <Typography varient="sectionHeader" element="p">
            About
          </Typography>
          <Typography varient="labels" element="p">
            Here you can compete with other hackers in an online MMORPG game,
            you can access it through our hacker portal.
          </Typography>
        </div>
        <div className="flex-center__wrapper-columns">
          <Typography varient="sectionHeader" element="p">
            Mission
          </Typography>
          <Typography varient="labels" element="p">
            we are improving the education the world needs, by creating an
            engaging educational experience than we do from the classroom, based
            on interactive learning.
          </Typography>
        </div>
        <div className="flex-center__wrapper-columns">
          <Typography varient="sectionHeader" element="p">
            Vision
          </Typography>
          <Typography varient="labels" element="p">
            Being number one providing interactive learning, and Cyber Security
            consultancy.
          </Typography>
        </div>
      </div>
      <div data-aos="fade-right" className="flex-center" id="ctf">
        <Typography
          varient="caption"
          element="p"
          style={{ textTransform: "uppercase" }}
        >
          ctf online gym
        </Typography>
        <Typography varient="pageHeader" element="p">
          Compete With other players and capture the flags.
        </Typography>
        <Typography varient="sectionContent" element="p">
          participants must reverse engineer, break, hack, decrypt, and think
          creatively and critically to solve the challenges and capture the
          flags.
        </Typography>
        <Button>Compete Now</Button>
      </div>
      <div data-aos="fade-right" className="flex-center" id="contact">
        <Typography varient="sectionHeader" element="p">
          Contact Us
        </Typography>
        <Typography varient="sectionContent" element="p">
          Get in touch with us today!
        </Typography>
        <form className="contact-form-layout" onSubmit={handleContactSubmit}>
          <FormControl type="text" label="Name" />
          <FormControl type="email" label="Email" />
          <FormControl type="textarea" label="Your Message" />
          <Button varient="primary">Send</Button>
        </form>
      </div>
      <div data-aos="fade-right" className="flex-center" id="pricing">
        <Typography varient="sectionHeader" element="p">
          Pricing
        </Typography>
        <Typography varient="sectionContent" element="p">
          Here you can compete with other hackers in an online MMORPG game, you
          can access it through our hacker portal.
        </Typography>
        <div className="plans-grid">
          <Plan
            name="plan 1"
            features={["feature 1", "feature 2", "feature 3"]}
            price="00.00"
            duration="month"
          />
          <Plan
            name="plan 2"
            features={["feature 1", "feature 2", "feature 3"]}
            price="00.00"
            duration="month"
          />
          <Plan
            name="plan 3"
            features={["feature 1", "feature 2", "feature 3"]}
            price="00.00"
            duration="month"
          />
        </div>
      </div>
      <div data-aos="fade-right" className="flex-center" id="blog">
        <Typography varient="pageHeader" element="p">
          Blog
        </Typography>
        <Typography varient="sectionContent" element="p">
          Find a new source of knowledge for yourself!
        </Typography>
        <Button varient="disabled">Coming soon</Button>
      </div>
      <div data-aos="fade-right" className="follow-us">
        <p>Follow Us</p>
        <Link to="/">
          <TwitterSvg />
        </Link>
        <Link to="/">
          <FacebookSvg />
        </Link>
      </div>
    </div>
  );
};

export default Home;
