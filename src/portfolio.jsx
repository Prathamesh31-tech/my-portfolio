import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function PortfolioWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null); // For Achievements / Certifications / Qualifications
  const [menuOpen, setMenuOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const toggleMenu = () => setMenuOpen(!menuOpen);

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "qualification", label: "Qualification" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];


  const handleBackClick = () => {
    setSelectedProject(null);
    setSelectedDetail(null);
  };

  // ✅ DETAIL COMPONENT VIEW
  if (selectedProject || selectedDetail) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 min-h-screen text-white p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <button
            onClick={handleBackClick}
            className="mb-6 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            ← Back
          </button>

          {/* ================== PROJECT DETAIL =================== */}
          {selectedProject === "crime" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Smart Crime Prediction & Heatmap Platform
              </h2>
              <p className="text-slate-300 mb-3">
                This project is a complete web-based platform to report, classify,
                and predict crime incidents using machine learning and geospatial
                visualization.
              </p>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>Built with ReactJS, Node.js, Express, MongoDB, and Python.</li>
                <li>Geospatial visualization and hotspot prediction.</li>
                <li>Interactive crime reporting system.</li>
              </ul>
              <a
                href="#"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
              >
                View Demo
              </a>
            </div>
          )}
          {selectedProject === "farmer" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Direct Market Access App for Farmers
              </h2>
              <p className="text-slate-300 mb-3">
                A MERN platform that provides farmers with real-time market prices
                and weather updates, enabling direct interaction between farmers
                and buyers.
              </p>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>MERN stack application.</li>
                <li>Integrated weather and market price APIs.</li>
                <li>Responsive and user-friendly interface.</li>
              </ul>
              <a
                href="#"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
              >
                View Demo
              </a>
            </div>
          )}

          {/* ================== ACHIEVEMENT / CERTIFICATION / QUALIFICATION DETAIL =================== */}
          {selectedDetail && (
            <div>
              <h2 className="text-3xl font-bold mb-4">{selectedDetail.title}</h2>
              <p className="text-slate-300 mb-3">{selectedDetail.description}</p>
              {selectedDetail.certLink && (
                <a
                  href={selectedDetail.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                >
                  View Certificate
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 min-h-screen text-white overflow-x-hidden">
      {/* ================== NAVBAR ================== */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-lg p-4 flex justify-between items-center z-50 shadow-lg"
      >
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-xl font-bold tracking-wide">
          Prathamesh Portfolio
        </motion.h1>

        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul
          className={`flex-col md:flex-row md:flex gap-6 text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-black/80 md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {sections.map((s) => (
            <motion.li
              key={s.id}
              className="cursor-pointer hover:text-indigo-400 mb-2 md:mb-0"
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* ================== ABOUT SECTION ================== */}
      <section
        id="about"
        className="pt-32 flex flex-col md:flex-row items-center justify-center px-6 gap-10 max-w-6xl mx-auto"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-80 h-80 rounded-full mb-4 border-4 border-indigo-500 shadow-2xl cursor-pointer hover:shadow-[0_0_50px_rgba(200,102,241,0.6)] transform-gpu shadow-[0_0_50px_rgba(99,102,241,0.6)]"
        >
          <motion.img
            src="/p.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-lg"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
            Prathamesh Rajiv Chaudhari
          </h2>
          <p className="mt-4 text-slate-300">
            Dedicated Full Stack Developer passionate about building modern web applications.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/prathamesh-chaudhari-a3b2492a1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Prathamesh31-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:prchaudhari3172@gmail.com"
              className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-500 transition"
            >
              Email
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================== PROJECTS ================== */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            onClick={() => setSelectedProject("crime")}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Smart Crime Prediction & Heatmap Platform
            </h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>
          <motion.div
            onClick={() => setSelectedProject("farmer")}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Direct Market Access App for Farmers
            </h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>
        </div>
      </section>

      {/* ================== ACHIEVEMENTS ================== */}
      <section id="achievements" className="py-20 px-6 bg-white/5">
        <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>
        <ul className="max-w-3xl mx-auto space-y-4 ">
          <li style={{textDecoration:"none"}}
            onClick={() =>
              setSelectedDetail({
                title: "Rackathon 2024 Participation",
                description:
                  "Participated in Rackathon, a National-Level Hackathon at GH Raisoni University.",
                certLink:
                  "https://drive.google.com/drive/folders/1eNGV9IcLZe7b7sNWDGTpT3R4BQyNjKQB?usp=drive_link",
              })
            }
            className="hover:text-indigo-400 underline cursor-pointer"
          >
            1. Participated in Rackathon at GH Raisoni University , Amravati
          </li>
          <li style={{textDecoration:"none"}}
            onClick={() =>
              setSelectedDetail({
                title: "3rd Rank - Electrons 2024",
                description: "Secured 3rd rank in Electrons 2024 Organized by GHRUA.",
              })
            }
            className="hover:text-indigo-400 underline cursor-pointer"
          >
           2. Secure 3rd rank in Electrons 2024 Organized by GHRUA
          </li>
        </ul>
      </section>

      {/* ================== CERTIFICATIONS ================== */}
      <section id="certifications" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Full Stack Web Development - Apna College",
              link: "https://drive.google.com/drive/folders/1eNGV9IcLZe7b7sNWDGTpT3R4BQyNjKQB",
              desc: "Complete MERN stack development course.",
            },
            {
              title: "Rackathon 2024 Participation - GH Raisoni",
              link: "https://drive.google.com/drive/folders/1eNGV9IcLZe7b7sNWDGTpT3R4BQyNjKQB",
              desc: "Hackathon participation certificate.",
            },
            {
              title: "Rackathon 2025 Participation - GH Raisoni",
              link: "https://drive.google.com/drive/folders/1eNGV9IcLZe7b7sNWDGTpT3R4BQyNjKQB",
              desc: "Hackathon 2025 participation certificate.",
            }
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-4 rounded-lg shadow-lg text-center hover:bg-white/10 transition cursor-pointer"
              onClick={() =>
                setSelectedDetail({
                  title: c.title,
                  description: c.desc,
                  certLink: c.link,
                })
              }
            >
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-slate-300 text-sm">Click to view details</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== QUALIFICATION ================== */}
      <section id="qualification" className="py-20 px-6 bg-white/5">
        <h2 className="text-3xl font-bold text-center mb-10">Qualification</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {[
            {
              title: "B.Tech in Computer Science - GH Raisoni University",
              marks: "8.8 CGPA",
              desc: "Currently pursuing B.Tech in Computer Science with strong foundation in software development.",
            },
            {
              title: "HSC - S.S.R.L Lalwani Junior College",
              marks: "72.33%",
              desc: "Completed HSC with strong academics.",
            },
            {
              title: "SSC - S.S.R.L Lalwani High School",
              marks: "88.60%",
              desc: "Completed SSC with distinction.",
            }
          ].map((q) => (
            <div
              key={q.title}
              onClick={() =>
                setSelectedDetail({
                  title: q.title,
                  description: `${q.desc} (Score: ${q.marks})`,
                })
              }
              className="bg-white/5 p-4 rounded-lg flex justify-between border border-white/10 cursor-pointer hover:bg-white/10 transition"
            >
              <span>{q.title}</span>
              <span>{q.marks}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================== RESUME ================== */}
      <section id="resume" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Resume</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <p className="text-slate-300 mb-4">Click below to view my resume:</p>
          <a
            href="https://drive.google.com/file/d/1goTUzhqEQRJFA5LUpMQVONUIk_rVojzN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </section>

      {/* ================== CONTACT ================== */}
<section id="contact" className="py-20 px-6 bg-white/5">
  <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl mx-auto text-center space-y-6"
  >
    <p className="text-slate-300">
      Have a project in mind or just want to say hello? Feel free to reach out!
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
      <a
        href="mailto:prchaudhari3172@gmail.com"
        className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all"
      >
        📧 Send Email
      </a>
      <a
        href="https://www.linkedin.com/in/prathamesh-chaudhari-a3b2492a1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition-all"
      >
        🔗 LinkedIn
      </a>
      <a
        href="https://github.com/Prathamesh31-tech"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all"
      >
        💻 GitHub
      </a>
    </div>

    <form
      action="https://formspree.io/f/mzzpzbkq"  // ✅ Optional: free email form handler
      method="POST"
      className="mt-10 space-y-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 rounded bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-indigo-600 py-3 rounded-lg hover:bg-indigo-500 transition-all"
      >
        ✨ Send Message
      </button>
    </form>
  </motion.div>
</section>


      {/* ================== FOOTER ================== */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-6 text-center text-slate-400 bg-black/20"
      >
        © {new Date().getFullYear()} Prathamesh Portfolio | Built with React, Tailwind & Framer Motion ✨
      </motion.footer>
    </div>
  );
}
