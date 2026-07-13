import "../styles/Projects.css";
import satellite from "../assets/images/satellite.png";
import breastCancer from "../assets/images/breast-cancer.png";
import chatbot from "../assets/images/chatbot.png";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>🛰 Satellite Anomaly Detection using AI/ML</h3>
          <img 
            src={satellite}
            alt="Satellite Project"
            className="project-image"
          />

          <p>
            AI/ML model developed during my internship at ISRO for detecting
            anomalies in spacecraft telemetry and checkout data.
          </p>

          <div className="tech">
            Python • Machine Learning • Pandas • Scikit-learn
          </div>

          <div className="buttons">
            <a
              href="https://github.com/tsubhashree2005-dotcom/Satellite-Anomaly-Detection-AI-ML"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>🩺 Multimodal Breast Cancer Classification</h3>
          <img src={breastCancer} alt="Breast Cancer Project" className="project-image" />

          <p>
            Deep learning model combining histopathology images, genomic data
            and clinical features for breast cancer classification.
          </p>

          <div className="tech">
            TensorFlow • Deep Learning • EfficientNet • SHAP
          </div>

          <div className="buttons">
            <a
              href="https://github.com/tsubhashree2005-dotcom/Multimodal-Breast-Cancer-Classification"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>🏦 AI Banking Chatbot</h3>

          <img
            src={chatbot}
            alt="Banking Chatbot"
            className="project-image"
          />

          <p>
            Banking assistant chatbot capable of answering customer queries
            using Natural Language Processing techniques.
          </p>

          <div className="tech">
            Python • NLP • Flask • Machine Learning
          </div>

          <div className="buttons">
            <a
              href="https://github.com/tsubhashree2005-dotcom/Bank-ChatBot"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;