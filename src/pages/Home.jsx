import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    console.log("Home Loaded");
  }, []);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero">
        <h1>Explore India With STA ✈️</h1>
        <p>Discover beautiful destinations and unforgettable experiences.</p>
        <button onClick={scrollToSection}>Explore Now</button>
      </section>

      <section ref={sectionRef} className="about">
        <h2>Why Choose Us?</h2>
        <p>Trusted travel planning and best deals guaranteed.</p>
        <button onClick={() => navigate("/destinations")}>
          View Destinations
        </button>
      </section>
    </>
  );
}

export default Home;