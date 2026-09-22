import { Link } from "react-router-dom"
import mainUI from "./assets/smart-waiter/main-ui.png"
import aiRecommendation from "./assets/smart-waiter/ai-recommendation.png"
import physicalKiosk from "./assets/smart-waiter/physical-kiosk.jpg"
import objectDetection from "./assets/smart-waiter/object-detection.jpg"


function SmartWaiter() {
    return (
        <main className="project-page">
            <div className="container">

                {/* Back */}
                <Link to="/" className="back-link">
                    ← Back to Portfolio
                </Link>

                {/* Header */}
                <header className="project-header">
                    <p className="project-label">
                        AI · COMPUTER VISION · FULL-STACK
                    </p>

                    <h1>Smart Waiter</h1>

                    <p className="project-subtitle">
                        Multimodal AI-Powered Café Ordering & Proactive Service
                    </p>
                </header>

                {/* Main Screenshot */}
                <section className="project-showcase">
                    <img
                        src={mainUI}
                        alt="Smart Waiter kiosk ordering interface"
                        className="project-image project-image-main"
                        style={{ width: "70%", maxWidth: "700px", margin: "0 auto" }}
                    />

                    <p className="image-caption">
                        Smart Waiter kiosk interface with traditional ordering and
                        AI-assisted interaction
                    </p>
                </section>

                {/* Overview */}
                <section className="project-section">
                    <h2>Overview</h2>

                    <p>
                        Smart Waiter is a multimodal AI-powered café service system
                        designed to transform a traditional self-service kiosk into
                        a more proactive and intelligent assistant.
                    </p>

                    <p>
                        The system combines conversational AI, computer vision,
                        voice interaction, and automated recommendation logic to
                        support customers throughout the ordering and dining
                        experience.
                    </p>

                    <p>
                        A key feature is the ability to monitor food consumption
                        through computer vision and identify appropriate moments
                        to proactively suggest complementary items.
                    </p>
                </section>

                {/* AI Recommendation */}
                <section className="project-showcase">
                    <img
                        src={aiRecommendation}
                        alt="Smart Waiter AI recommendation interface"
                        className="project-image"
                        style={{ width: "70%", maxWidth: "700px", margin: "0 auto" }}
                    />

                    <p className="image-caption">
                        AI-assisted recommendation and conversational interaction
                    </p>
                </section>

                {/* Key Features */}
                <section className="project-section">
                    <h2>Key Features</h2>

                    <ul className="project-list">
                        <li>
                            <strong>Hybrid Kiosk Interface</strong> — React-based
                            interface supporting both traditional menu ordering and
                            an AI-driven chatbot.
                        </li>

                        <li>
                            <strong>Intent-Based Recommendation</strong> — semantic
                            retrieval and contextual rules map vague customer
                            requests to suitable menu items.
                        </li>

                        <li>
                            <strong>Voice Interaction</strong> — Web Speech API
                            provides Speech-to-Text and Text-to-Speech interaction
                            for the kiosk.
                        </li>

                        <li>
                            <strong>Computer Vision Monitoring</strong> — a custom
                            YOLOv8 model classifies tabletop dining states such as
                            Full, Partially Eaten, and Empty.
                        </li>

                        <li>
                            <strong>Proactive Service</strong> — consumption state
                            detection can trigger complementary product suggestions
                            at an appropriate point during the dining session.
                        </li>
                    </ul>
                </section>

                {/* Physical Kiosk */}
                <section className="project-showcase">
                    <img
                        src={physicalKiosk}
                        alt="Smart Waiter physical kiosk prototype"
                        className="project-image"
                        style={{ width: "70%", maxWidth: "700px", margin: "0 auto" }}
                    />

                    <p className="image-caption">
                        Smart Waiter running on a physical kiosk prototype
                    </p>
                </section>

                {/* Architecture */}
                <section className="project-section">
                    <h2>System Architecture</h2>

                    <p>
                        The system is divided into an interaction layer, backend
                        logic layer, and vision monitoring layer.
                    </p>

                    <div className="architecture-list">

                        <div className="architecture-item">
                            <h3>01 · React Kiosk</h3>
                            <p>
                                Provides the customer-facing ordering interface,
                                chatbot interaction, voice controls, and menu
                                navigation.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>02 · FastAPI Backend</h3>
                            <p>
                                Acts as the central API layer connecting the kiosk
                                interface with recommendation, ordering, database,
                                and computer vision services.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>03 · Recommendation Engine</h3>
                            <p>
                                Uses semantic retrieval, weighted attributes, and
                                contextual rules to convert customer intent into
                                relevant recommendations.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>04 · Order & Database Management</h3>
                            <p>
                                Handles order processing and database operations using
                                SQLite.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>05 · Camera Service & YOLOv8</h3>
                            <p>
                                Continuously monitors the dining environment and runs
                                YOLOv8 inference to classify tabletop consumption
                                states.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>06 · State Trigger Logic</h3>
                            <p>
                                Applies temporal consistency checks before triggering
                                proactive actions, helping reduce false positives from
                                temporary detection errors.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Object Detection */}
                <section className="project-showcase">
                    <img
                        src={objectDetection}
                        alt="Smart Waiter YOLOv8 object detection result"
                        className="project-image"
                        style={{ width: "70%", maxWidth: "700px", margin: "0 auto" }}
                    />

                    <p className="image-caption">
                        YOLOv8-based computer vision and tabletop state detection
                    </p>
                </section>

                {/* Technologies */}
                <section className="project-section">
                    <h2>Technologies</h2>

                    <div className="tech-list">
                        <span>React</span>
                        <span>Python</span>
                        <span>FastAPI</span>
                        <span>YOLOv8</span>
                        <span>Computer Vision</span>
                        <span>Semantic Retrieval</span>
                        <span>Web Speech API</span>
                        <span>SQLite</span>
                    </div>
                </section>

                {/* Development */}
                <section className="project-section">
                    <h2>Development</h2>

                    <ul className="project-list">
                        <li>
                            Developed a React-based kiosk interface supporting
                            traditional menu ordering and AI-assisted interaction.
                        </li>

                        <li>
                            Built a FastAPI backend integrating recommendation,
                            ordering, database, and camera services.
                        </li>

                        <li>
                            Integrated a custom-trained YOLOv8 model for real-time
                            tabletop consumption state classification.
                        </li>

                        <li>
                            Implemented semantic retrieval and contextual rules for
                            intent-based menu recommendations.
                        </li>

                        <li>
                            Integrated Web Speech API for voice-based interaction
                            using Speech-to-Text and Text-to-Speech.
                        </li>

                        <li>
                            Implemented temporal consistency logic to reduce false
                            triggers caused by temporary visual occlusion or
                            unstable detections.
                        </li>

                        <li>
                            Integrated frontend and backend services through REST
                            APIs and unified application state management.
                        </li>
                    </ul>
                </section>

                {/* Architecture Summary */}
                <section className="project-section">
                    <h2>Operational Workflow</h2>

                    <div className="architecture-list">

                        <div className="architecture-item">
                            <h3>01 · Customer Interaction</h3>
                            <p>
                                Customers can browse the traditional kiosk menu or
                                switch to the AI chatbot interface.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>02 · Intent & Ordering</h3>
                            <p>
                                Customers can select products manually or use voice
                                input and mood cards to receive recommendations.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>03 · Order Fulfillment</h3>
                            <p>
                                Confirmed orders are processed and recorded through
                                the backend and database.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>04 · Vision Monitoring</h3>
                            <p>
                                The camera service monitors the dining environment
                                while YOLOv8 analyzes consumption states.
                            </p>
                        </div>

                        <div className="architecture-item">
                            <h3>05 · Proactive Recommendation</h3>
                            <p>
                                When an appropriate consumption state is detected,
                                the system can initiate a complementary product
                                recommendation.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Source Code */}
                <section className="project-section">
                    <h2>Source Code</h2>

                    <p>
                        The complete project source code, documentation, and
                        implementation details are available on GitHub.
                    </p>

                    <a
                        href="https://github.com/koyuki-chan/PWM2_2025_Charlie"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link"
                    >
                        View Project on GitHub →
                    </a>
                </section>

            </div>
        </main>
    )
}

export default SmartWaiter

