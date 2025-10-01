// pages/index.tsx (Next.js + Tailwind)
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Mohammed Faizan Khan</h1>
        <p className="text-xl mt-4">Aspiring Data Scientist | Data Analyst | AI & ML Enthusiast.</p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I hold a B.Sc in Data Science and I'm passionate about Artificial Intelligence,
          Machine Learning, and building real-world projects that make an impact. 
          Currently preparing for opportunities in Japan while also improving my Japanese language (N3 target).
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 shadow rounded-lg">Python</div>
          <div className="p-4 shadow rounded-lg">Machine Learning</div>
          <div className="p-4 shadow rounded-lg">SQL</div>
          <div className="p-4 shadow rounded-lg">Power BI</div>
          <div className="p-4 shadow rounded-lg">Next.js</div>
          <div className="p-4 shadow rounded-lg">Tailwind CSS</div>
          <div className="p-4 shadow rounded-lg">GitHub</div>
          <div className="p-4 shadow rounded-lg">Data Visualization</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-bold text-lg">Face Recognition System</h3>
            <p className="mt-2 text-sm">Developed a Python-based face recognition system with OpenCV and dlib.</p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-2 inline-block">GitHub →</a>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-bold text-lg">Touchless Interaction system</h3>
            <p className="mt-2 text-sm">Gesture-based system to draw, control the mouse and Contor Key pad Virtualy using hand tracking.</p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-2 inline-block">GitHub →</a>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-bold text-lg">Accident-Detection</h3>
            <p className="mt-2 text-sm">Accident Detection System An accident detection system is a technology designed to automatically identify and report vehicle accidents, often with the goal of minimizing response times and improving safety.</p>
            <a href="https://github.com/5zani" className="text-blue-600 mt-2 inline-block">GitHub →</a>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-bold text-lg">Law Firm Website</h3>
            <p className="mt-2 text-sm">Modern animated law firm website using Next.js, Tailwind CSS & Framer Motion.</p>
          </div>
        </div>
      </section>

      {/*Achivement */}      
      <section id="achievements" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 shadow rounded-lg">National Level Paper Presentation in the topic of "Quantum Mechanics" organized by SUGNA College of Technology Coimbatore.</div>
          <div className="p-4 shadow rounded-lg">Published my Journal paper in the topic of "Quantum Mechanics and research"</div>
          <div className="p-4 shadow rounded-lg">Completed the "NPTEL" Exam in the subject of "Enhancing Soft skill and personality"</div>
          <div className="p-4 shadow rounded-lg">Certified in "Object Detection and Recognition Using Deep Learning in OpenCV & Explore Machine Learning using Python" in "Infosys springboard"</div>
        </div>
      </section>

      {/* GETINTOUCH! */}
      <section id="GETINTOUCH!" className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>Email: <a href="faizankhanyahoou@gmail.com" className="text-blue-600">faizankhanyahoou@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/mohammed-faizan-khan-6a1a90249" className="text-blue-600">My LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/5zani" className="text-blue-600">My GitHub</a></p>
        <p>Mobile: <a href="+91-9751527326" className="text-blue-600">+91-9751527326</a></p>
      </section>
    </main>
  )
}
