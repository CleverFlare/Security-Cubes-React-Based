import "./css/home.css";
import Typography from "../uikit/simple/Typography";
import Button from "../uikit/simple/Button";
import FormControl from "../uikit/simple/FormControl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Plan from "../uikit/complex/Plan";
import TwitterSvg from "../icons/TwitterSvg";
import FacebookSvg from "../icons/FacebookSvg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ plans, token }) => {
  const [transform, setTransform] = useState(null);
  const [contactUsername, setContactUsername] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: contactEmail,
      FullName: contactUsername,
      message: contactMessage,
    };
    fetch("https://securitycubes.com/api/contactUs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      setContactEmail("");
      setContactMessage("");
      setContactUsername("");
    });
  };

  return (
    <div className="home-page">
      <div
        data-aos="fade-right"
        className="sector columns justify-center gap-50"
        id="home"
      >
        <Typography
          varient="caption"
          element="p"
          style={{ textTransform: "uppercase" }}
        >
          cyber security made fun!
        </Typography>
        <Typography varient="page-header" element="p">
          Compete in a MMORPG game with other hackers.
        </Typography>
        <Button to="/hall">Hacker Portal</Button>
      </div>
      <div
        data-aos="fade-right"
        className="sector columns justify-center gap-50"
        id="about"
      >
        <div className="columns justify-center gap-10">
          <Typography varient="section-header" element="p">
            About
          </Typography>
          <Typography varient="labels" element="p">
            Here you can compete with other hackers in an online MMORPG game,
            you can access it through our hacker portal.
          </Typography>
        </div>
        <div className="columns justify-center gap-10">
          <Typography varient="section-header" element="p">
            Mission
          </Typography>
          <Typography varient="labels" element="p">
            we are improving the education the world needs, by creating an
            engaging educational experience than we do from the classroom, based
            on interactive learning.
          </Typography>
        </div>
        <div className="columns justify-center gap-10">
          <Typography varient="section-header" element="p">
            Vision
          </Typography>
          <Typography varient="labels" element="p">
            Being number one providing interactive learning, and Cyber Security
            consultancy.
          </Typography>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="sector columns justify-center gap-50"
        id="ctf"
      >
        <Typography
          varient="caption"
          element="p"
          style={{ textTransform: "uppercase" }}
        >
          ctf online gym
        </Typography>
        <Typography varient="page-header" element="p">
          Compete With other players and capture the flags.
        </Typography>
        <Typography varient="section-content" element="p">
          participants must reverse engineer, break, hack, decrypt, and think
          creatively and critically to solve the challenges and capture the
          flags.
        </Typography>
        <Button to={token ? "/training" : "/account"}>Compete Now</Button>
      </div>
      <div
        data-aos="fade-right"
        className="sector columns justify-center gap-50"
        id="contact"
      >
        <Typography varient="section-header" element="p">
          Contact Us
        </Typography>
        <Typography varient="section-content" element="p">
          Get in touch with us today!
        </Typography>
        <form className="contact-layout" onSubmit={handleContactSubmit}>
          <FormControl
            type="text"
            value={contactUsername}
            onChange={(event) => setContactUsername(event.target.value)}
            label="Name"
          />
          <FormControl
            type="email"
            value={contactEmail}
            onChange={(event) => setContactEmail(event.target.value)}
            label="Email"
          />
          <FormControl
            type="textarea"
            value={contactMessage}
            onChange={(event) => setContactMessage(event.target.value)}
            label="Your Message"
          />
          <Button varient="primary">Send</Button>
        </form>
      </div>
      <div
        data-aos="fade-right"
        className="sector columns justify-center gap-50"
        id="pricing"
        style={transform}
        onTransitionEnd={() => setTransform({ transform: "none" })}
      >
        <Typography varient="section-header" element="p">
          Pricing
        </Typography>
        <Typography varient="section-content" element="p">
          Here you can compete with other hackers in an online MMORPG game, you
          can access it through our hacker portal.
        </Typography>
        <div className="plans-layout">
          {plans &&
            plans.map((plan) => (
              <Plan
                key={plan.id}
                id={plan.id}
                name={plan.PlanName}
                features={plan.Features}
                price={plan.Pricing}
                duration="month"
                paid={plan.paid}
              />
            ))}
          {!plans && (
            <>
              <Plan
                id=""
                name="Plan A"
                features={["feature", "feature", "feature"]}
                price="00.00"
                duration="month"
                paid={true}
              />
              <Plan
                id=""
                name="Plan A"
                features={["feature", "feature", "feature"]}
                price="00.00"
                duration="month"
                paid={true}
              />
              <Plan
                id=""
                name="Plan A"
                features={["feature", "feature", "feature"]}
                price="00.00"
                duration="month"
                paid={true}
              />
            </>
          )}
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="sector columns justify-center gap-50"
        id="blog"
      >
        <Typography varient="page-header" element="p">
          Blog
        </Typography>
        <Typography varient="section-content" element="p">
          Find a new source of knowledge for yourself!
        </Typography>
        <Button varient="disabled">Coming soon</Button>
      </div>
      <div data-aos="fade-right" className="official-accounts">
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

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Home);
