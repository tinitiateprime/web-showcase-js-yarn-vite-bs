import React, { useEffect, useState } from "react";

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });

  useEffect(() => {
    const endValues = {
      experience: 7,
      projects: 120,
      clients: 50,
      awards: 15,
    };

    const interval = setInterval(() => {
      setCounters((prev) => {
        const updated = { ...prev };
        for (let key in updated) {
          if (updated[key] < endValues[key]) {
            updated[key]++;
          }
        }
        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      position: "relative",
      color: "white",
      padding: "4rem 2rem",
      textAlign: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 1,
    },
    backgroundVideo: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    },
    section: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1000px",
      margin: "auto",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "1rem",
    },
    paragraph: {
      fontSize: "1.2rem",
      marginBottom: "3rem",
    },
    counters: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "2rem",
      marginBottom: "3rem",
    },
    counterBox: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: "1rem 2rem",
      borderRadius: "1rem",
      minWidth: "120px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    },
    team: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
      marginBottom: "4rem",
    },
    card: {
      backgroundColor: "#ffffff11",
      padding: "1.5rem",
      borderRadius: "1rem",
      width: "220px",
      backdropFilter: "blur(5px)",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
    },
    contact: {
      marginTop: "2rem",
    },
    button: {
      marginTop: "1rem",
      padding: "0.75rem 2rem",
      backgroundColor: "#f43f5e",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.3s",
    },
  };

  const team = [
    { name: "Priya", role: "UI/UX Designer" },
    { name: "Shalini M.", role: "Frontend Dev" },
    { name: "Ravi Kumar", role: "Backend Dev" },
    { name: "Eswar Reddy", role: "Project Lead" },
  ];

  return (
    <div style={styles.container}>
      <video autoPlay loop muted style={styles.backgroundVideo}>
        {/* <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}></div>

      <div style={styles.section}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          We are a passionate team crafting digital experiences that drive innovation and empower users.
        </p>

        {/* Animated Counters */}
        <div style={styles.counters}>
          <div style={styles.counterBox}>
            <h2>{counters.experience}+</h2>
            <p>Years Experience</p>
          </div>
          <div style={styles.counterBox}>
            <h2>{counters.projects}+</h2>
            <p>Projects Done</p>
          </div>
          <div style={styles.counterBox}>
            <h2>{counters.clients}+</h2>
            <p>Happy Clients</p>
          </div>
          <div style={styles.counterBox}>
            <h2>{counters.awards}+</h2>
            <p>Awards</p>
          </div>
        </div>

        {/* Team Section */}
        <h2>Our Team</h2>
        <div style={styles.team}>
          {team.map((member, idx) => (
            <div
              key={idx}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
            >
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default About;
