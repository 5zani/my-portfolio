export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-700">
          Hi, I'm Mohammed Faizan Khan
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          Data Quality Analyst | Data Analyst | AI & ML Enthusiast
        </p>
        <p className="text-md mt-2 text-gray-500">
          Building reliable data pipelines and turning raw data into meaningful insights.
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Data Quality Analyst at Aggregate Intelligence with hands-on experience in SQL, MongoDB, Python, Grafana,
          and ETL pipeline validation. I hold a B.Sc in Data Science and have published a research paper on Quantum
          Mechanics. I'm self-driven — independently learning Power BI, Machine Learning, and advanced data analytics.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          I speak five languages: English, Tamil, Hindi, Urdu, and Japanese.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              title: "Data & Databases",
              items: ["SQL", "MongoDB", "DBeaver", "JSON"]
            },
            {
              title: "Programming",
              items: ["Python", "Pandas", "NumPy", "Selenium"]
            },
            {
              title: "BI & Visualization",
              items: ["Power BI", "Grafana", "Tableau", "Microsoft Excel"]
            },
            {
              title: "Data Engineering",
              items: ["ETL Pipeline Validation", "Data Quality Checks", "REST API / Postman", "Databricks"]
            },
            {
              title: "Machine Learning",
              items: ["Scikit-learn", "OpenCV", "Supervised Learning", "Data Preprocessing"]
            },
            {
              title: "Tools & Workflow",
              items: ["Git / GitHub", "Jira / Agile", "VS Code", "Business Intelligence"]
            }
          ].map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-blue-600 mb-3">{group.title}</h3>
              {group.items.map((item) => (
                <div key={item} className="p-2 mb-2 shadow rounded-lg text-center text-sm">
                  {item}
                </div>
              ))}
            </div>
          ))}

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "Data Quality Validation Framework",
              date: "Dec 2025",
              tech: "Python · SQL · Grafana · Power BI",
              desc: "Automated validation checks across datasets with SQL rules and Grafana dashboards."
            },
            {
              title: "MongoDB Data Inspection Tool",
              date: "Jan 2026",
              tech: "Python · MongoDB · JSON",
              desc: "Automated MongoDB quality checks with JSON reports."
            },
            {
              title: "Face Recognition System",
              date: "2024",
              tech: "Python · OpenCV · ML",
              desc: "End-to-end ML pipeline for face recognition."
            },
            {
              title: "Accident Detection System",
              date: "2024",
              tech: "Computer Vision · ML",
              desc: "Model to detect road accidents from video data."
            },
            {
              title: "Touchless Interaction System",
              date: "2024",
              tech: "OpenCV · MediaPipe",
              desc: "Gesture-based system for mouse and keypad control."
            }
          ].map((project) => (
            <div key={project.title} className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <span className="text-xs text-gray-400">{project.date}</span>
              </div>
              <p className="text-xs text-blue-500 mb-2">{project.tech}</p>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Contact */}
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
  );
}