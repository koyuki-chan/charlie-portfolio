import { Link } from "react-router-dom"

function AntiFraudBot() {
  return (
    <div className="project-page">
      <div className="container">

        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>

        <header className="project-header">
          <p className="project-label">AI / MACHINE LEARNING PROJECT</p>

          <h1>AI Anti-Fraud Chatbot</h1>

          <p className="project-subtitle">
            An AI-powered fraud detection chatbot that combines BERT-based
            classification, rule-based risk signals, and an LLM to analyze
            suspicious job-related messages and generate explanations.
          </p>
        </header>

        <section className="project-section">
          <h2>Overview</h2>

          <p>
            This project was developed to explore how artificial intelligence
            can be used to detect potential job scams and provide users with
            understandable explanations of suspicious messages.
          </p>

          <p>
            Instead of relying on a single model, the system combines multiple
            signals including a BERT-based text classifier, platform risk
            scores, scam-related keywords, and an Ollama-based LLM for
            generating the final explanation.
          </p>
        </section>

        <section className="project-section">
          <h2>System Architecture</h2>

          <p>
            The system follows a multi-stage processing pipeline:
          </p>

          <div className="architecture-list">

            <div className="architecture-item">
              <strong>01 — User Input</strong>
              <span>
                The user submits a potentially suspicious hiring or job-related
                message through the web interface.
              </span>
            </div>

            <div className="architecture-item">
              <strong>02 — Intent Detection</strong>
              <span>
                The system determines whether the input requires scam
                classification or another type of processing.
              </span>
            </div>

            <div className="architecture-item">
              <strong>03 — Fraud Classification</strong>
              <span>
                A BERT-based model analyzes the text and produces a fraud
                prediction.
              </span>
            </div>

            <div className="architecture-item">
              <strong>04 — Risk Analysis</strong>
              <span>
                Additional signals such as platform risk scores and
                scam-related keywords are considered alongside the model result.
              </span>
            </div>

            <div className="architecture-item">
              <strong>05 — LLM Explanation</strong>
              <span>
                Ollama is used to process the detection results and generate
                human-readable explanations in English or Chinese.
              </span>
            </div>

            <div className="architecture-item">
              <strong>06 — Response</strong>
              <span>
                The final result is formatted and returned to the web interface,
                with interaction history maintained by the application.
              </span>
            </div>

          </div>
        </section>

        <section className="project-section">
          <h2>Technologies</h2>

          <div className="tech-list">
            <span>Python</span>
            <span>PyTorch</span>
            <span>BERT</span>
            <span>Ollama</span>
            <span>LLM</span>
            <span>Gradio</span>
            <span>CSV Dataset</span>
            <span>Machine Learning</span>
          </div>
        </section>

        <section className="project-section">
          <h2>ML Pipeline</h2>

          <p>
            The fraud detection component uses a BERT-based text classification
            model implemented with PyTorch. The model analyzes the user's input
            and produces prediction results that are combined with additional
            rule-based signals.
          </p>

          <p>
            These results are then passed to an Ollama-based LLM, which
            generates a natural-language explanation of the detected risks.
            This allows the system to provide both a classification result and
            an explanation that is easier for users to understand.
          </p>
        </section>

        <section className="project-section">
          <h2>Application Architecture</h2>

          <p>
            The application is structured into several components, including
            the Gradio web interface, Python backend, request routing,
            chat management, data processing, fraud classification, dataset
            management, and the Ollama client.
          </p>

          <p>
            The modular structure allows the machine learning model and LLM
            components to work together while keeping the user interface and
            processing logic separated.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>

          <ul className="project-list">
            <li>BERT-based fraud text classification</li>
            <li>PyTorch model integration</li>
            <li>Scam keyword detection</li>
            <li>Platform risk scoring</li>
            <li>Ollama-based LLM explanations</li>
            <li>English and Chinese responses</li>
            <li>Interactive Gradio web interface</li>
            <li>Conversation and detection history</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Source Code</h2>

          <a
            href="https://github.com/koyuki-chan/Scam-AI-Chatbot"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            View on GitHub →
          </a>
        </section>

      </div>
    </div>
  )
}

export default AntiFraudBot