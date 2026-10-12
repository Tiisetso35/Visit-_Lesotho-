// The hero image lives in the public folder, so its path is built from PUBLIC_URL.
const heroStyle = {
  backgroundImage: `linear-gradient(rgba(10, 30, 22, 0.55), rgba(10, 30, 22, 0.55)), url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
};

function Hero() {
  return (
    <section className="hero" id="home" style={heroStyle}>
      <div className="hero-content">
        <h1>Discover the Kingdom in the Sky</h1>
        <p>
          Waterfalls, mountain passes, snow and living Basotho culture, all in one small
          country high above Southern Africa.
        </p>
        <a className="hero-btn" href="#attractions">Explore attractions</a>
      </div>
    </section>
  );
}

export default Hero;
