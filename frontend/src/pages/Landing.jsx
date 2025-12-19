import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";

function Landing() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    api.get("/projects").then((res) => setProjects(res.data));
    api.get("/clients").then((res) => setClients(res.data));
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await api.post("/contacts", contact);
    alert("Form submitted");
    setContact({ fullName: "", email: "", mobile: "", city: "" });
  };

  const handleSubscribe = async () => {
    await api.post("/subscribers", { email });
    alert("Subscribed successfully");
    setEmail("");
  };

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
  <div id="home" className="space-y-24 pb-20">

    {/* HERO */}
   {/* ================= CONTACT SECTION ================= */}
<section
  id="contact"
  className="relative py-24 bg-cover bg-center"
  style={{ backgroundImage: "url('/contact-bg.jpg')" }}
>
  {/* Dark overlay on image */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT TEXT */}
    <div className="text-white">
      <h2 className="text-4xl font-bold leading-tight mb-6">
        Consultation, Design <br /> & Marketing
      </h2>

      <p className="text-gray-300 max-w-md">
        Have a project in mind or want to collaborate?
        Fill in the form and our team will get back to you.
      </p>
    </div>

    {/* RIGHT CONTACT DIV (TRANSLUCENT) */}
    <div
      className="
        rounded-xl p-8 shadow-2xl
        bg-[#0A1E3F]/55
        backdrop-blur-sm
        text-white
      "
    >
      <h3 className="text-center text-3xl font-bold mb-6">
        Get a free <br />Consulation
      </h3>

      <form
        onSubmit={handleContactSubmit}
        className="space-y-5"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent border-b border-gray-400 focus:border-white outline-none py-2 placeholder-gray-300"
          value={contact.fullName}
          onChange={(e) =>
            setContact({ ...contact, fullName: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent border-b border-gray-400 focus:border-white outline-none py-2 placeholder-gray-300"
          value={contact.email}
          onChange={(e) =>
            setContact({ ...contact, email: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full bg-transparent border-b border-gray-400 focus:border-white outline-none py-2 placeholder-gray-300"
          value={contact.mobile}
          onChange={(e) =>
            setContact({ ...contact, mobile: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="City"
          className="w-full bg-transparent border-b border-gray-400 focus:border-white outline-none py-2 placeholder-gray-300"
          value={contact.city}
          onChange={(e) =>
            setContact({ ...contact, city: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="w-full mt-6 bg-white text-[#0A1E3F] py-3 font-semibold rounded hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</section>


{/* ================= TRIANGLE IMAGE SECTION WITH BUBBLES ================= */}
<section className="py-10 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-4xl font-bold mb-4 text-gray-900">
        We Build Digital Experiences
      </h2>
      <p className="text-gray-600 max-w-md">
        Our team delivers innovative, scalable, and user-friendly solutions
        tailored to your business needs.
      </p>
    </div>

    {/* RIGHT TRIANGLE + BUBBLES */}
    <div className="relative w-full h-[380px] flex justify-center">

      {/* ===== BUBBLES ===== */}
      <span className="bubble bubble-1"></span>
      <span className="bubble bubble-2"></span>
      <span className="bubble bubble-3"></span>
      <span className="bubble bubble-4"></span>

      {/* TOP IMAGE */}
      <img
        src="/circle1.jpg"
        alt="Top"
        className="w-50 h-50 rounded-full object-cover
          absolute top-0 left-1/2 -translate-x-1/2
          shadow-xl border-4 border-white z-10"
      />

      {/* BOTTOM LEFT IMAGE */}
      <img
        src="/circle2.jpg"
        alt="Bottom Left"
        className="w-55 h-55 rounded-full object-cover
          absolute bottom-0 left-12
          shadow-2xl border-4 border-white z-20"
      />

      {/* BOTTOM RIGHT IMAGE */}
      <img
        src="/circle3.jpg"
        alt="Bottom Right"
        className="w-50 h-50 rounded-full object-cover
          absolute bottom-6 right-12
          shadow-xl border-4 border-white z-10"
      />
    </div>

  </div>
</section>



{/* ================= WHY CHOOSE US ================= */}
<section id="services" className="py-10 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION TITLE */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900">
        Why Choose Us
      </h2>
      <p className="text-gray-600 mt-4">
        We provide solutions that help your business grow and succeed.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img
          src="/why1.png"
          alt="Quality"
          className="w-40 h-30 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-3">
          Quality Driven Approach
        </h3>
        <p className="text-gray-600 text-sm">
          We focus on delivering high-quality solutions with attention to detail.
          Every project is built for performance, reliability, and scalability.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img
          src="/why2.png"
          alt="Client"
          className="w-30 h-30 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-3">
          Client-Centric Solutions
        </h3>
        <p className="text-gray-600 text-sm">
          Our process revolves around understanding client requirements deeply.
          We deliver solutions aligned with business goals.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img
          src="/why3.png"
          alt="Team"
          className="w-30 h-30 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-3">
          Experienced Team
        </h3>
        <p className="text-gray-600 text-sm">
          Our team consists of skilled professionals with industry experience.
          We blend creativity with technology to deliver results.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img
          src="/why4.png"
          alt="Delivery"
          className="w-30 h-30 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-3">
          Timely Delivery
        </h3>
        <p className="text-gray-600 text-sm">
          We value time and follow structured workflows.
          Projects are delivered on schedule without compromise.
        </p>
      </div>

    </div>
  </div>
</section>


{/* ================= ABOUT US ================= */}
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT IMAGE */}
    <div className="relative group">
      <div className="absolute inset-0 bg-[#0A1E3F]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>

      <img
        src="/about.jpg"
        alt="About Us"
        className="
          w-full rounded-2xl shadow-xl
          transform transition duration-500
          group-hover:scale-105
        "
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        About Us
      </h2>

      <p className="text-gray-600 mb-5 leading-relaxed">
        We are a team of passionate professionals committed to building
        innovative digital solutions that empower businesses to grow.
      </p>

      <p className="text-gray-600 mb-8 leading-relaxed">
        With a strong focus on quality, performance, and user experience,
        we deliver scalable solutions tailored to modern business needs.
      </p>

      {/* STATS / HIGHLIGHTS */}
      <div className="flex gap-8">
        <div>
          <h3 className="text-3xl font-bold text-[#0A1E3F]">50+</h3>
          <p className="text-gray-600 text-sm">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#0A1E3F]">30+</h3>
          <p className="text-gray-600 text-sm">Happy Clients</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#0A1E3F]">5+</h3>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>
      </div>
    </div>

  </div>
</section>



      {/* PROJECTS */}
      <section id="projects" className="py-20 max-w-8xl mx-auto px-6 bg-blue-50">
  <h2 className="text-3xl font-bold text-center mb-5">Our Projects</h2>
  <p className="text-center text-gray-600 mb-12">
    We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((p) => (
      <ProjectCard key={p._id} project={p} />
    ))}
  </div>
</section>



      {/* CLIENTS */}
     <section id="clients" className="bg-gray-50 py-10">
  <div className="max-w-8xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Happy Clients
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {clients.map((c) => (
        <ClientCard key={c._id} client={c} />
      ))}
    </div>
  </div>
</section>

      
      {/* NEWSLETTER */}
     <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1E3F]/50"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

        {/* LEFT: BRAND INFO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Real Trust</h3>
          </div>

          <p className="text-gray-300 max-w-sm">
            We build innovative digital solutions that help businesses
            grow, scale, and succeed in the modern world.
          </p>
        </div>

        {/* MIDDLE: NAV LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>

          <ul className="space-y-3 text-gray-300">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-white">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="hover:text-white">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("clients")} className="hover:text-white">
                Clients
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* RIGHT: NEWSLETTER (SAME AS LANDING PAGE STYLE) */}
        <div>
          <h4 className="text-xl font-semibold mb-6">
            Subscribe to Newsletter
          </h4>

          <p className="text-gray-300 mb-4">
            Get the latest updates, offers, and insights directly to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded border border-white bg-transparent text-white outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-[#0A1E3F] px-6 py-3 rounded font-semibold hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/20 text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Real Trust. All rights reserved.
      </div>
    </footer>
    </div>
  );
}

export default Landing;
