import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/gym.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            TRANSFORM YOUR <span>BODY</span>&MIND
          </h1>
          <p className="hero-subtitle">
            unleash your inner strength with <strong>IronFit Elite</strong>{" "}
            where passion meets power
          </p>
          <div className="hero-buttons">
            <a href="#contact">
              <button className="btn-primary">Join Now</button>
            </a>
            <a href="#programs">
              <button className="btn-secondary">Explore Programs</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
