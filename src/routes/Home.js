import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import pitch from "../assets/eireogPitch.gif";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={pitch}
        title="The Title"
        text="All the text"
        btnText="Eire og button"
        url="/"
        btnClass="Show"
      />
    </>
  );
}
export default Home;
