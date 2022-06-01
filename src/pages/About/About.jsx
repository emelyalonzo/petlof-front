import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import logoCat from "../../images/cat.svg";
import alfonso from "../../images/alfonso.png";
import emely from "../../images/Emely.png";
import sergio from "../../images/sergio.png";
import logoLove from "../../images/cat-love.svg";

const About = () => {
  return (
    <div>
      <Nav
        isAbout={true}
        minimal={true}
        isPage={true}
        setShowModal={() => {}}
        showModal={false}
      />
      {/* BANNER SUPERIOR */}
      <div className="titleAbout">
        <div className="titleAbout-container--items">
          <h2>About Us</h2>
          <p>
            Their About Us page stands out by showcasing some of their unique
            and creative projects.
          </p>
        </div>
      </div>
      {/* ABOUT APP */}
      <div className="aboutApp">
        <div className="titleAbout-container--items">
          <img className="catLogoSty" src={logoCat} alt="LogoCat" />
          <h2>How our app works?</h2>
          <p>
            Their About Us page stands out by showcasing some of their unique
            and creative projects.
          </p>
          <Link to="/signup" className="containerNav-item--about">
            SignUp
          </Link>
        </div>
      </div>
      {/* ABOUT DEV*/}
      <div className="aboutDevs">
        <div className="aboutDevs-container--items">
          <h2>Meet our teem</h2>
          <p>
            Their About Us page stands out by showcasing some of their unique
            and creative projects.
          </p>
        </div>
        <div className="aboutDev-container--imgs">
          <div className="dev-1">
            <img className="imgUserDevs" src={alfonso} alt="LogoCat" />
            <h2>Alfonso Manzanares</h2>
            <p>
              Their About Us page stands out by showcasing some of their unique
              and creative projects.
            </p>
            <a href="https://google.com" target="_blank" rel="noreferrer">
            <button className="btn-link">Ver Linkedin</button>
            </a>
          </div>
          <div className="dev-1">
            <img className="imgUserDevs" src={emely} alt="LogoCat" />
            <h2>Emely Alonso</h2>
            <p>
              Their About Us page stands out by showcasing some of their unique
              and creative projects.
            </p>
            <a href="https://google.com" target="_blank" rel="noreferrer">
            <button className="btn-link">Ver Linkedin</button>
            </a>
          </div>
          <div className="dev-1">
            <img className="imgUserDevs" src={sergio} alt="LogoCat" />
            <h2>Sergio Soler</h2>
            <p>
              Their About Us page stands out by showcasing some of their unique
              and creative projects.
            </p>
            <a href="https://www.linkedin.com/in/cvitaess/" target="_blank" rel="noreferrer">
            <button className="btn-link">Ver Linkedin</button>
            </a>
          </div>
        </div>
      </div>
      {/* ABOUT APP */}
      <div className="aboutFooter">
        <div className="titleFooter-container--items">
          <h2>Made with</h2>
          <img className="imgUsercatlove" src={logoLove} alt="LogoCat" />
        </div>
      </div>
    </div>
  );
};

export default About;
