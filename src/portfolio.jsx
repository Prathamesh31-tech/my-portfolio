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
];

  const handleBackClick = () => {
    if (selectedDetail) {
      setSelectedDetail(null);
      setTimeout(() => scrollToSection("achievements"), 100); // ✅ Scroll back to achievements
    } else if (selectedProject) {
      setSelectedProject(null);
      setTimeout(() => scrollToSection("projects"), 100); // ✅ Scroll back to projects
    }
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
                Smart Crime Reporting and Prediction System Using Map Visualization

              </h2>
              <p className="text-slate-300 mb-3">
                A powerful web-based platform designed to make 
                crime reporting, analysis, and prediction smarter 
                and more accessible. The system integrates real-time 
                crime data, AI-based classification, and map visualization
                 to identify hotspots, crime chains, and patterns across 
                 Maharashtra. Users can report incidents, while the backend 
                 
                 verifies and classifies data automatically using ML models. 
                 It fetches verified crime news through NewsAPI, GNews, and 
                 Google RSS, extracts city locations, and visualizes crime 
                 trends on an interactive map.
              </p>
             
                 <h3 className="font-bold">Proposed System</h3> <br></br>
                   <motion.img
            src="/p_s.png"
            alt="Profile"
            className="w-150 h-100  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          /> <br></br>
           <h3 className="font-bold">Methodology</h3>
       <ul className="list-disc ml-5 text-slate-300 mb-3">
               
                <li>Data Collection: News API, GNews, Google RSS, User inputs</li>
                <li>Preprocessing: Text cleaning, city extraction</li>
                <li>Classification: ML model for crime detection (label: crime or not)</li>
                <li>Geocoding: Convert city names into latitude and longitude (lat/lng) for accurate map placement.</li>
                <li>Storage: MongoDB , label, location</li>
                 <li>Visualization: Google map with markers, heatmaps, hotspots</li>
              </ul>


               <h3 className="font-bold">Modules Description</h3> <br></br>
                   <motion.img
            src="/m_d.png"
            alt="Profile"
            className="w-150 h-80  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          /> <br></br>

             <h3 className="font-bold">Expected Outcomes</h3>
       <ul className="list-disc ml-5 text-slate-300 mb-3">
               
                <li>A smart, all-in-one system to track and monitor crimes.</li>
                <li>Correctly identify and locate crime incidents using AI.</li>
                <li>Show crime locations on a real-time map for both users and police.</li>
                <li>Detect patterns and similar chains of crimes using AI.</li>
                <li>Predict future crime hotspots using past and live data.</li>
                 <li>Help people and police stay informed and take quick action.</li>
                 <li>Support multiple languages so more people can understand the data easily.</li>
              </ul>

              <h3 className="font-bold" >Conclusion</h3>
              <p className="text-slate-300 mb-3">
                  The Smart Crime Reporting and Prediction System is an AI-powered 
                  platform that predicts future crime hotspots, links related incidents,
                  and uses satellite-based analysis for events like fires or riots. All 
                  data is shown on a live map, making crime reporting, tracking, and 
                  public safety smarter and faster.
             </p>
              <a
                href="https://github.com/Prathamesh31-tech/Crime_Hotspot_2.0.git"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                style={{marginRight:"10px",backgroundColor:"gray" , color:"black"}}
              >
                Github 
              </a>
                <a
                href="https://crime-zone.onrender.com"
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
                Trading Platform (MERN Stack)
              </h2>
              <p className="text-slate-300 mb-3">
                A powerful web-based trading platform designed to 
                provide users with a seamless and interactive experience 
                for managing trades, monitoring data, and analyzing performance. 
                The system is built using the MERN stack and focuses on secure
                 authentication, efficient data handling, and a responsive 
                 dashboard. It demonstrates full-stack development skills by
                  integrating frontend UI, backend APIs, and database management 
                  into a single scalable application.
              </p> <br />
              <h3 className="font-bold">Proposed System</h3>
               <p>A complete full-stack trading system that 
                allows users to interact with a modern dashboard, 
                manage trading-related data, and experience a
                 real-world application structure with secure 
                 authentication and smooth UI</p> <br /> <br />

                <motion.img
            src="/img4.png"
            alt="Profile"
            className="w-150 h-100  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          /> <br></br>

          <h3>Methodology</h3>
           <ul  className="list-disc ml-5 text-slate-300 mb-3">
            <li>User Interaction: Users access the platform through a responsive React-based UI</li>
            <li>API Handling: Backend APIs built with Express.js to handle requests</li>
            <li>Data Processing: Server processes trading-related data efficiently</li>
            <li>Database Management: MongoDB used to store user and system data</li>
            <li>Integration: Frontend and backend connected through REST APIs</li>
           </ul>
              <br /> 
              <h3>Modules Description</h3>
                  <ul  className="list-disc ml-5 text-slate-300 mb-3">
            <li>User Module: Handles registration, login, and authentication</li>
            <li>Dashboard Module: Displays trading interface and user data</li>
            <li>API Module: Manages communication between frontend and backend</li>
            <li>Database Module: Stores user data and application information securely</li>
           </ul>
            <br />

                <motion.img
            src="/imh6.png"
            alt="Profile"
            className="w-150 h-100  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />   <br />

                 <h3>Expected Outcomes</h3>
                       <ul  className="list-disc ml-5 text-slate-300 mb-3">
            <li>A fully functional trading platform with modern UI</li>
            <li>Secure user authentication and data management</li>
            <li>Smooth and responsive dashboard experience</li>
            <li>Efficient backend handling with scalable architecture</li>
            <li>Real-world implementation of MERN stack development</li>
            <li>Improved user experience with clean and interactive design</li>
           </ul> <br />

             <h3>Conclusion</h3>
             <p>The Trading Platform is a user-friendly web 
              application that simplifies trading through an 
              interactive and secure dashboard. It enables users 
              to efficiently manage and analyze their trading 
              activities while providing a smooth and scalable 
              experience.</p>
            <br />
               <a
                href="https://github.com/Prathamesh31-tech/TradingApp.git"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                style={{marginRight:"10px",marginBottom:"10px",backgroundColor:"gray" , color:"black"}}
              >
                Git-front
              </a>
                <a
                href="https://github.com/Prathamesh31-tech/TradingApp_dashboard.git"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                style={{marginRight:"10px",backgroundColor:"gray" , color:"black"}}
              >
                Git-dash 
              </a>
                   <a
                href="https://github.com/Prathamesh31-tech/TradingApp_backend.git"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                style={{marginRight:"10px",backgroundColor:"gray" , color:"black"}}
              >
                Git-back 
              </a>
              <a
                href="https://trading-app-seven-eta.vercel.app/"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
              >
                View Demo
              </a>
            </div>
          )}



          {selectedProject === "weather" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">
                WeatherNow – Live Weather Forecast App
              </h2>
              <p className="text-slate-300 mb-3">
                  The Weather Application is a responsive web-based 
                  project that allows users to search for any city and 
                  instantly view real-time weather information. 
                  The application fetches live weather data using 
                  the OpenWeatherMap API and displays temperature, 
                  weather conditions, humidity, and wind speed in a 
                  clean and user-friendly interface. <br /> <br />
                  This project demonstrates my ability to work with REST 
                  APIs, asynchronous JavaScript, DOM manipulation, 
                  and modern UI design using HTML, CSS, and JavaScript. 
              </p>
               <h3 className="font-bold">Key Features</h3>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li> Search weather details by city name</li>
                <li> Displays current temperature in Celsius</li>
                <li> Shows weather condition with dynamic icons</li>
                <li> Displays humidity percentage</li>
                <li> Displays wind speed</li>
                <li> Handles invalid city names with error messages</li>
                <li> Fully responsive and clean UI design</li>
              </ul>
                     <motion.img
            src="/wea.png"
            alt="Profile"
            className="w-150 h-80  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
             
             <br />
             <h3  className="font-bold">Technologies Used</h3>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>HTML5 – Structure and layout</li>
                <li>CSS3 – Styling, responsiveness, and UI design</li>
                <li>JavaScript (ES6) – Logic, API handling, and DOM manipulation</li>
                <li>OpenWeatherMap API – Real-time weather data</li>
                <li>Font Awesome – Weather-related icons</li>
              </ul>

               <br />
             <a
                href="https://github.com/Prathamesh31-tech/weatherApp.git"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                style={{marginRight:"10px",backgroundColor:"gray" , color:"black"}}
              >
                Github 
              </a>
              <a
                href="https://prathamesh31-tech.github.io/weatherApp/"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
              >
                View Demo
              </a>
            </div>
          )}

           {selectedProject === "music" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Khandesh Beats – Music Streaming Web App
              </h2>
              <p className="text-slate-300 mb-3">
                Khandesh Beats is a responsive and interactive 
                music streaming web application built using HTML,
                 CSS, and Vanilla JavaScript. The app provides a
                  smooth audio playback experience with a clean UI 
                  inspired by modern music players. Users can play, 
                  pause, switch tracks, and control playback using
                  an intuitive interface.
              </p>
               <h3 className="font-bold">Key Features</h3>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>Dynamic song list rendered using JavaScript</li>
                <li>Play / Pause individual songs and master controls</li>
                <li>Next & Previous track navigation</li>
                <li>Toggle between song list view and player view</li>
                <li>Fully responsive design for mobile and desktop</li>
                <li>Audio handled using JavaScript Audio API</li>
              </ul>
                     <motion.img
            src="mua.png"
            alt="Profile"
            className="w-150 h-80  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
             
             <br />
             <h3  className="font-bold">Technologies Used</h3>
              <ul className="list-disc ml-5 text-slate-300 mb-3">
                <li>HTML5 – Structure & layout</li>
                <li>CSS3 – Styling, responsiveness & animations</li>
                <li>JavaScript (ES6) – Audio logic, DOM manipulation</li>
                <li>Font Awesome – Playback icons</li>
              </ul>

               <br />
             <a
                href="https://github.com/Prathamesh31-tech/music_app.git"
                target="_blank"
                className="inline-block px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
                style={{marginRight:"10px",backgroundColor:"gray" , color:"black"}}
              >
                Github 
              </a>
              <a
                href="https://prathamesh31-tech.github.io/music_app/"
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
        style={{height:"90px"}}
        className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-lg p-4 flex justify-between items-center z-50 shadow-lg  "
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
              style={{fontSize:"20px"}}
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
          <h2 className=" md:text-xl  font-bold ">
            Hello,I'm
          </h2>
          <h2 className="text-2xl md:text-3xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
            Prathamesh Rajiv Chaudhari
          </h2>
          <h2 className=" md:text-xl  font-bold ">
            And I'm a <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">Web Developer</span>
          </h2>
          <p className="mt-4 text-slate-300">

                A Dedicated Full Stack Developer passionate 
                about building modern, responsive, and user-friendly
                web applications, turning ideas into powerful digital
                solutions with clean code and smart design.
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
              Smart Crime Reporting and Prediction System Using Map Visualization

            </h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>

          <motion.div
            onClick={() => setSelectedProject("farmer")}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Trading Platform
            </h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>


          <motion.div
            onClick={() => setSelectedProject("weather")}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              WeatherNow – Live Weather Forecast App
            </h3>
            <p className="text-sm text-slate-300">Click to view full details</p>
          </motion.div>



          
          <motion.div
            onClick={() => setSelectedProject("music")}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="cursor-pointer bg-white/5 p-5 rounded-lg shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
               Khandesh Beats – Music Streaming Web App
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </section>


      {/* ================== FOOTER ================== */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-6 text-center text-slate-400 bg-black/20"
      >
        © {new Date().getFullYear()} ✨
      </motion.footer>
    </div>
  );
}
