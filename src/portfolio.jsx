import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function PortfolioWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "qualification", label: "Qualification" },
    { id: "resume", label: "Resume" }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 min-h-screen text-white p-6">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="max-w-4xl mx-auto mt-20">
          <button onClick={handleBackClick} className="mb-6 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">← Back</button>
          {selectedProject === "crime" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Smart Crime Prediction & Heatmap Platform</h2>
              <p className="text-slate-300 mb-3">This project is a complete web-based platform to report, classify, and predict crime incidents using machine learning and geospatial visualization. It includes interactive heatmaps, hotspot predictions, and user-friendly reporting.</p>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>Built with ReactJS, Node.js, Express, MongoDB, and Python.</li>
                <li>Geospatial visualization and hotspot prediction.</li>
                <li>Interactive crime reporting system.</li>
              </ul>
              <a href="#" target="_blank" className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500">View Demo</a>
            </div>
          )}
          {selectedProject === "farmer" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Direct Market Access App for Farmers</h2>
              <p className="text-slate-300 mb-3">This platform provides farmers with real-time market prices and weather updates, enabling direct interaction between farmers and buyers, removing middlemen and increasing income.</p>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>MERN stack application.</li>
                <li>Integrated weather and market price APIs.</li>
                <li>Responsive and user-friendly interface.</li>
              </ul>
              <a href="#" target="_blank" className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500">View Demo</a>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 min-h-screen text-white overflow-x-hidden">
      {/* NAVBAR */}
      <motion.nav initial={{y:-60,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8}} className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-lg p-4 flex justify-between items-center z-50 shadow-lg">
        <motion.h1 whileHover={{scale:1.05}} className="text-xl font-bold tracking-wide">Prathamesh Portfolio</motion.h1>
        <ul className="flex gap-6 text-sm">
          {sections.map((s) => (
            <motion.li key={s.id} className="cursor-pointer hover:text-indigo-400" whileHover={{scale:1.1}} onClick={() => scrollToSection(s.id)}>
              {s.label}
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* HERO / ABOUT */}
      <section id="about" className="pt-32 flex flex-col items-center text-center px-4">
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-44 h-44 rounded-full mb-4 border-4 border-indigo-500 shadow-2xl cursor-pointer"
        >
          <motion.img 
            src="/p.jpg" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover" 
            initial={{scale:0.8,opacity:0}} 
            animate={{scale:1,opacity:1}} 
            transition={{duration:1}}
          />
        </motion.div>
        <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
          Prathamesh Rajiv Chaudhari
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5}} className="max-w-xl mt-3 text-slate-300">
          Dedicated Full Stack Developer and Computer Science student passionate about building responsive, user-friendly web apps with modern tech.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="flex gap-4 mt-5">
          <a href="https://www.linkedin.com/in/prathamesh-chaudhari-a3b2492a1" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">GitHub</a>
          <a href="mailto:prchaudhari3172@gmail.com" className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500">Email</a>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div onClick={() => handleProjectClick("crime")} whileHover={{scale:1.05, rotateY:5}} className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition">
            <h3 className="text-xl font-semibold mb-2">Smart Crime Prediction & Heatmap Platform</h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>
          <motion.div onClick={() => handleProjectClick("farmer")} whileHover={{scale:1.05, rotateY:5}} className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition">
            <h3 className="text-xl font-semibold mb-2">Direct Market Access App for Farmers</h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      <section id="achievements" className="py-20 px-6 bg-white/5">
        <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-center">
          <li><a href="#" className="hover:text-indigo-400 underline">🏆 Smart India Hackathon Finalist 2025</a></li>
          <li><a href="#" className="hover:text-indigo-400 underline">🚀 Built automated crime reporting system</a></li>
          <li><a href="#" className="hover:text-indigo-400 underline">💼 Internship at XYZ Company</a></li>
        </ul>
      </section>

      <section id="certifications" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {["Full Stack Web Development - Apna College", "Rackathon 2024 Participation - GH Raisoni", "Rackathon 2025 Participation - GH Raisoni"].map((c) => (
            <motion.a key={c} href="#" target="_blank" whileHover={{scale:1.05}} className="bg-white/5 p-4 rounded-lg shadow-lg text-center hover:bg-white/10 transition">
              <h3 className="font-semibold text-lg mb-2">{c}</h3>
              <p className="text-slate-300 text-sm">Click to view certificate</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="qualification" className="py-20 px-6 bg-white/5">
        <h2 className="text-3xl font-bold text-center mb-10">Qualification</h2>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white/5 p-4 rounded-lg flex justify-between border border-white/10">
            <span>B.Tech in Computer Science - GH Raisoni University, Amravati</span>
            <span>8.8 CGPA</span>
          </div>
          <div className="bg-white/5 p-4 rounded-lg flex justify-between border border-white/10">
            <span>HSC - S.S.R.L Lalwani Junior College</span>
            <span>72.33%</span>
          </div>
          <div className="bg-white/5 p-4 rounded-lg flex justify-between border border-white/10">
            <span>SSC - S.S.R.L Lalwani High School</span>
            <span>88.60%</span>
          </div>
        </motion.div>
      </section>

      <section id="resume" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Resume</h2>
        <motion.div initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} className="max-w-lg mx-auto text-center">
          <p className="text-slate-300 mb-4">Click below to view my resume:</p>
          <a href="/mnt/data/Resume PRC.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300">View Resume</a>
        </motion.div>
      </section>

      <motion.footer initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="py-6 text-center text-slate-400 bg-black/20">
        © {new Date().getFullYear()} Prathamesh Portfolio | Built with React, Tailwind & Framer Motion ✨
      </motion.footer>
    </div>
  );
}
