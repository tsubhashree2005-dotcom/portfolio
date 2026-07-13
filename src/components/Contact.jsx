import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Get In Touch</h2>

      <p>
        I'm always open to discussing AI/ML projects, internships,
        research opportunities, and collaborations.
      </p>

      <div className="contact-details">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <a href="mailto:tsubhashree2005@gmail.com">
            tsubhashree2005@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/t-subhashree/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>💻 GitHub</h3>
          <a
            href="https://github.com/tsubhashree2005-dotcom"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;