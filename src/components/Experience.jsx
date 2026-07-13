import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2>Experience</h2>

      <div className="experience-container">

        <div className="experience-card">
          <h3>ISRO – U R Rao Satellite Centre</h3>

          <h4>AI/ML Intern</h4>

          <p>Apr 2026 – May 2026</p>

          <p>
            Worked on Satellite Anomaly Detection using AI/ML by analyzing
            spacecraft telemetry and checkout data to identify abnormal
            behaviour in satellite systems.
          </p>
        </div>

        <div className="experience-card">
          <h3>Infosys Springboard</h3>

          <h4>Virtual Intern</h4>

          <p>Oct 2025 – Dec 2025</p>

          <p>
            Completed industry-oriented training in Artificial Intelligence,
            Machine Learning and Data Science while developing practical
            problem-solving skills through projects.
          </p>
        </div>

        <div className="experience-card">
          <h3>Vital Skills in association with Techkriti, IIT Kanpur</h3>

          <h4>Virtual Intern</h4>

          <p>Jun 2025 – Jul 2025</p>

          <p>
            Completed a summer internship in Machine Learning, working on real-time projects involving data preprocessing, model building, evaluation, and optimization using Python, Scikit-learn, and TensorFlow
          </p>
        </div>

      </div>

    </section>
  );
}

export default Experience;