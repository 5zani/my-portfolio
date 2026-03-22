// pages/index.tsx (Next.js + Tailwind)
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-700">Hi, I'm Mohammed Faizan Khan</h1>
        <p className="text-xl mt-4 text-gray-600">Data Quality Analyst | Data Analyst | AI & ML Enthusiast</p>
        <p className="text-md mt-2 text-gray-500">Building reliable data pipelines and turning raw data into meaningful insights.</p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Data Quality Analyst at Aggregate Intelligence with hands-on experience in SQL, MongoDB, Python, Grafana,
          and ETL pipeline validation. I hold a B.Sc in Data Science and have published a research paper on Quantum
          Mechanics. I'm self-driven — independently learning Power BI, Machine Learning, and advanced data analytics
          to grow into a Data Scientist role.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          I speak five languages: English, Tamil, Hindi, Urdu, and Japanese — and I bring that same commitment
          to learning to everything I do in data.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-bold text-blue-600 mb-3">Data & Databases</h3>
            {["SQL", "MongoDB", "DBeaver", "JSON"].map(s => (
              <div key={s} className="p-2 mb-2 shadow rounded-lg text-center text-sm">{s}</div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-3">Programming</h3>
            {["Python", "Pandas", "NumPy", "Selenium"].map(s => (
              <div key={s} className="p-2 mb-2 shadow rounded-lg text-center text-sm">{s}</div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-3">BI & Visualization</h3>
            {["Power BI", "Grafana", "Tableau", "Microsoft Excel"].map(s => (
              <div key={s} className="p-2 mb-2 shadow rounded-lg text-center text-sm">{s}</div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-3">Data Engineering</h3>
            {["ETL Pipeline Validation", "Data Quality Checks", "REST API / Postman", "Databricks"].map(s => (
              <div key={s} className="p-2 mb-2 shadow rounded-lg text-center text-sm">{s}</div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-3">Machine Learning</h3>
            {["Scikit-learn", "OpenCV", "Supervised Learning", "Data Preprocessing"].map(s => (
              <div key={s} className="p-2 mb-2 shadow rounded-lg text-center text-sm">{s}</div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-3">Tools & Workflow</h3>
            {["Git / GitHub", "Jira / Agile", "VS Code", "Business Intelligence"].map(s => (
              <div key={s} className="p-2 mb-2 shadow rounded-lg text-center text-sm">{s}</div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Data Quality Validation Framework</h3>
              <span className="text-xs text-gray-400 ml-2 mt-1">Dec 2025</span>
            </div>
            <p className="text-xs text-blue-500 mb-2">Python · SQL · Grafana · Power BI</p>
            <p className="mt-2 text-sm text-gray-600">
              A data quality framework to automate validation checks across structured datasets. Built SQL-based rules
              to detect missing values, duplicates, and schema violations. Integrated Grafana for real-time pipeline
              health monitoring and delivered clean datasets to Power BI dashboards.
            </p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-3 inline-block text-sm">GitHub →</a>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">MongoDB Data Inspection Tool</h3>
              <span className="text-xs text-gray-400 ml-2 mt-1">Jan 2026</span>
            </div>
            <p className="text-xs text-blue-500 mb-2">Python · MongoDB · JSON</p>
            <p className="mt-2 text-sm text-gray-600">
              A Python utility that connects to MongoDB collections and runs automated quality checks on document
              structure and field completeness. Generates JSON-based reports summarizing null values, schema
              violations, and field-level statistics — used in production data reviews.
            </p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-3 inline-block text-sm">GitHub →</a>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Face Recognition System</h3>
              <span className="text-xs text-gray-400 ml-2 mt-1">2024</span>
            </div>
            <p className="text-xs text-blue-500 mb-2">Python · OpenCV · dlib · Machine Learning</p>
            <p className="mt-2 text-sm text-gray-600">
              Built an end-to-end ML pipeline for face recognition using OpenCV and dlib — covering raw image
              dataset preprocessing, feature extraction, model training, and output validation. Demonstrates
              strong understanding of data-driven ML workflows and model evaluation metrics.
            </p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-3 inline-block text-sm">GitHub →</a>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Accident Detection System</h3>
              <span className="text-xs text-gray-400 ml-2 mt-1">2024</span>
            </div>
            <p className="text-xs text-blue-500 mb-2">Python · Computer Vision · ML · Data Labeling</p>
            <p className="mt-2 text-sm text-gray-600">
              A computer vision model to automatically identify and classify road accident scenarios from video data.
              Processed and labeled raw video datasets to create structured training data. Evaluated model
              performance using accuracy, precision, recall, and F1-score.
            </p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-3 inline-block text-sm">GitHub →</a>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Touchless Interaction System</h3>
              <span className="text-xs text-gray-400 ml-2 mt-1">2024</span>
            </div>
            <p className="text-xs text-blue-500 mb-2">Python · OpenCV · MediaPipe · Hand Tracking</p>
            <p className="mt-2 text-sm text-gray-600">
              A gesture-based system to control the mouse and virtual keypad using real-time hand tracking.
              Involved processing live video stream data, extracting hand landmark coordinates as structured
              features, and mapping them to system control events — a practical application of real-time
              data processing.
            </p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-3 inline-block text-sm">GitHub →</a>
          </div>

        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Achievements & Certifications</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-5 shadow rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-700 mb-1">📄 Published Research Paper</h3>
            <p className="text-sm text-gray-600">
              Published a journal paper on the topic of Quantum Mechanics and Research — demonstrating academic
              research, analytical writing, and data interpretation skills.
            </p>
          </div>

          <div className="p-5 shadow rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-700 mb-1">🏆 National Level Paper Presentation</h3>
            <p className="text-sm text-gray-600">
              Presented research on Quantum Mechanics at a National Level Paper Presentation organized by
              SUGNA College of Technology, Coimbatore.
            </p>
          </div>

          <div className="p-5 shadow rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-700 mb-1">🎓 NPTEL Certification</h3>
            <p className="text-sm text-gray-600">
              Completed the NPTEL certification exam in Enhancing Soft Skills and Personality — issued by
              IIT/NIT faculty under the National Programme on Technology Enhanced Learning.
            </p>
          </div>

          <div className="p-5 shadow rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-700 mb-1">🎓 Infosys Springboard Certification</h3>
            <p className="text-sm text-gray-600">
              Certified in Machine Learning with Applications to Object Recognition — covering deep learning,
              OpenCV, and ML model deployment. Issued by Infosys Springboard.
            </p>
          </div>

        </div>
      </section>

      {/* Get In Touch */}
      <section id="contact" className="bg-gray-100 py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-2 text-gray-700">
          <p>Email: <a href="mailto:faizankhanyahoou@gmail.com" className="text-blue-600 hover:underline">faizankhanyahoou@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/mohammed-faizan-khan-6a1a90249" className="text-blue-600 hover:underline">Mohammed Faizan Khan</a></p>
          <p>GitHub: <a href="https://github.com/5zani" className="text-blue-600 hover:underline">github.com/5zani</a></p>
          <p>Portfolio: <a href="https://my-portfolio-azure-chi-11.vercel.app" className="text-blue-600 hover:underline">my-portfolio-azure-chi-11.vercel.app</a></p>
          <p>Mobile: <a href="tel:+919751527326" className="text-blue-600 hover:underline">+91-9751527326</a></p>
        </div>
      </section>

    </main>
  )
}
