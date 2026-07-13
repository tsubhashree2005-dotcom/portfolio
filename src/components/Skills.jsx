import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming</h3>

          <div className="skill-tags">
            <span>🐍 Python</span>
            <span>☕ Java</span>
            <span>💻 C</span>
            <span>🗄 SQL</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>AI / ML</h3>

          <div className="skill-tags">
            <span>🤖 Machine Learning</span>
            <span>🧠 Deep Learning</span>
            <span>🔥 TensorFlow</span>
            <span>⚡ PyTorch</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Data Science</h3>

          <div className="skill-tags">
            <span>📊 Pandas</span>
            <span>📈 NumPy</span>
            <span>📉 Matplotlib</span>
            <span>🧮 Scikit-Learn</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>

          <div className="skill-tags">
            <span>🐙 Git</span>
            <span>💻 GitHub</span>
            <span>📝 VS Code</span>
            <span>📒 Jupyter</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;