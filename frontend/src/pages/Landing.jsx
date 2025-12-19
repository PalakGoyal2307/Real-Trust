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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    await api.post("/subscribers", { email });
    alert("Subscribed successfully");
    setEmail("");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="space-y-16 md:space-y-24 pb-20">

      {/* ================= CONTACT / HERO ================= */}
      <section
        id="contact"
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Consultation, Design <br /> & Marketing
            </h2>
            <p className="text-gray-300 max-w-md mx-auto md:mx-0">
              Have a project in mind or want to collaborate?
              Fill in the form and our team will get back to you.
            </p>
          </div>

          <div className="rounded-xl p-6 sm:p-8 shadow-2xl bg-[#0A1E3F]/55 backdrop-blur-sm text-white">
            <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6">
              Get a free <br /> Consultation
            </h3>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              {["fullName", "email", "mobile", "city"].map((field, i) => (
                <input
                  key={i}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  className="w-full bg-transparent border-b border-gray-400 focus:border-white outline-none py-2 placeholder-gray-300"
                  value={contact[field]}
                  onChange={(e) =>
                    setContact({ ...contact, [field]: e.target.value })
                  }
                  required
                />
              ))}

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

      {/* ================= TRIANGLE IMAGE ================= */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Build Digital Experiences
            </h2>
            <p className="text-gray-600 max-w-md">
              Our team delivers innovative, scalable, and user-friendly solutions.
            </p>
          </div>

          <div className="relative w-full h-[300px] sm:h-[380px] flex justify-center">
            <img
              src="/circle1.jpg"
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full absolute top-0 left-1/2 -translate-x-1/2 border-4 border-white shadow-xl"
            />
            <img
              src="/circle2.jpg"
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-full absolute bottom-0 left-8 sm:left-12 border-4 border-white shadow-2xl"
            />
            <img
              src="/circle3.jpg"
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full absolute bottom-6 right-8 sm:right-12 border-4 border-white shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="services" className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
            <p className="text-gray-600 mt-4">
              Solutions that help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["why1.png", "why2.png", "why3.png", "why4.png"].map((img, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
                <img src={`/${img}`} className="w-32 sm:w-40 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
                <p className="text-gray-600 text-sm">
                  We deliver scalable and performance-driven solutions.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          <img src="/about.jpg" className="rounded-2xl shadow-xl w-full" />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              We build innovative digital products.
            </p>

            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-sm">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">30+</h3>
                <p className="text-sm">Clients</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-5">Our Projects</h2>
        <p className="text-center text-gray-600 mb-12">
          Projects that bring value and results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section id="clients" className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Happy Clients</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((c) => (
              <ClientCard key={c._id} client={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0A1E3F]/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          <div>
            <h3 className="text-2xl font-bold mb-4">Real Trust</h3>
            <p className="text-gray-300">Building digital excellence.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "projects", "clients", "contact"].map((s) => (
                <li key={s}>
                  <button onClick={() => scrollToSection(s)} className="hover:underline">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="px-4 py-3 rounded text-black w-full"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-white text-[#0A1E3F] px-6 py-3 rounded font-semibold">
              Subscribe
            </button>
          </form>

        </div>

        <div className="border-t border-white/20 text-center py-4 text-sm">
          © {new Date().getFullYear()} Real Trust
        </div>
      </footer>

    </div>
  );
}

export default Landing;
