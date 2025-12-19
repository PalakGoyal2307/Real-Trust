import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Admin() {
  const navigate = useNavigate();

  // ================= PROJECT STATE =================
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  // ================= CLIENT STATE =================
  const [client, setClient] = useState({
    name: "",
    description: "",
    designation: "",
    image: null,
  });
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  // ================= VIEW STATE =================
  const [contacts, setContacts] = useState([]);
  const [subs, setSubs] = useState([]);

  // ================= FETCH ALL DATA =================
  const fetchData = async () => {
    const projectsRes = await api.get("/projects");
    const clientsRes = await api.get("/clients");
    const contactsRes = await api.get("/contacts");
    const subsRes = await api.get("/subscribers");

    setProjects(projectsRes.data);
    setClients(clientsRes.data);
    setContacts(contactsRes.data);
    setSubs(subsRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= LOGOUT HANDLER =================
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to landing page
  };

  // ================= PROJECT HANDLERS =================
  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("image", project.image);

    await api.post("/projects", formData);
    alert("Project added successfully");

    setProject({ name: "", description: "", image: null });
    fetchData();
  };

  const updateProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    if (project.image) formData.append("image", project.image);

    await api.put(`/projects/${editingProject}`, formData);
    alert("Project updated");

    setEditingProject(null);
    setProject({ name: "", description: "", image: null });
    fetchData();
  };

  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    await api.delete(`/projects/${id}`);
    fetchData();
  };

  // ================= CLIENT HANDLERS =================
  const handleClientSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("description", client.description);
    formData.append("designation", client.designation);
    formData.append("image", client.image);

    await api.post("/clients", formData);
    alert("Client added successfully");

    setClient({
      name: "",
      description: "",
      designation: "",
      image: null,
    });
    fetchData();
  };

  const updateClient = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("description", client.description);
    formData.append("designation", client.designation);
    if (client.image) formData.append("image", client.image);

    await api.put(`/clients/${editingClient}`, formData);
    alert("Client updated");

    setEditingClient(null);
    setClient({
      name: "",
      description: "",
      designation: "",
      image: null,
    });
    fetchData();
  };

  const deleteClient = async (id) => {
    if (!confirm("Delete this client?")) return;
    await api.delete(`/clients/${id}`);
    fetchData();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* ================= PROJECT SECTION ================= */}
<section className="bg-white rounded-2xl shadow p-6">
  <div className="grid md:grid-cols-2 gap-6 items-start">

    {/* LEFT SIDE – FORM + LIST */}
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {editingProject ? "Edit Project" : "Add Project"}
        </h2>
        <span className="text-sm text-gray-500">
          Total: {projects.length}
        </span>
      </div>

      <form
        onSubmit={editingProject ? updateProject : handleProjectSubmit}
        className="space-y-3"
      >
        <input
          type="text"
          placeholder="Project Name"
          className="border rounded-lg p-2 w-full
                     focus:ring-2 focus:ring-indigo-400 outline-none"
          value={project.name}
          onChange={(e) =>
            setProject({ ...project, name: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Project Description"
          className="border rounded-lg p-2 w-full
                     focus:ring-2 focus:ring-indigo-400 outline-none"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
          required
        />

        <input
          type="file"
          className="border rounded-lg p-2 w-full"
          onChange={(e) =>
            setProject({ ...project, image: e.target.files[0] })
          }
          required={!editingProject}
        />

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700
                     text-white px-4 py-2 rounded-lg
                     transition"
        >
          {editingProject ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* PROJECT LIST */}
      <div className="mt-6 space-y-2">
        {projects.map((p) => (
          <div
            key={p._id}
            className="flex justify-between items-center
                       bg-slate-50 p-3 rounded-lg
                       hover:bg-slate-100 hover:shadow
                       transition"
          >
            <span className="font-medium text-gray-800">
              {p.name}
            </span>

            <div className="space-x-2">
              <button
                className="bg-indigo-600 hover:bg-indigo-700
                           text-white px-3 py-1 rounded transition"
                onClick={() => {
                  setEditingProject(p._id);
                  setProject({
                    name: p.name,
                    description: p.description,
                    image: null,
                  });
                }}
              >
                Edit
              </button>

              <button
                className="bg-red-600 hover:bg-red-700
                           text-white px-3 py-1 rounded transition"
                onClick={() => deleteProject(p._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="hidden md:flex items-center justify-center">
      <img
        src="/projects.jpg"
        alt="Project Management"
        className="max-h-96 object-contain drop-shadow-lg"
      />
    </div>

  </div>
</section>

  {/* ================= CLIENT SECTION ================= */}
<section className="bg-white rounded-2xl shadow p-6">
  <div className="grid md:grid-cols-2 gap-6 items-start">
    
    {/* LEFT SIDE – FORM + LIST */}
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {editingClient ? "Edit Client" : "Add Client"}
        </h2>
        <span className="text-sm text-gray-500">
          Total: {clients.length}
        </span>
      </div>

      <form
        onSubmit={editingClient ? updateClient : handleClientSubmit}
        className="space-y-3"
      >
        <input
          type="text"
          placeholder="Client Name"
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
          value={client.name}
          onChange={(e) =>
            setClient({ ...client, name: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Client Description"
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
          value={client.description}
          onChange={(e) =>
            setClient({ ...client, description: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Designation"
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
          value={client.designation}
          onChange={(e) =>
            setClient({ ...client, designation: e.target.value })
          }
          required
        />

        <input
          type="file"
          className="border rounded-lg p-2 w-full"
          onChange={(e) =>
            setClient({ ...client, image: e.target.files[0] })
          }
          required={!editingClient}
        />

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700
                     text-white px-4 py-2 rounded-lg
                     transition"
        >
          {editingClient ? "Update Client" : "Add Client"}
        </button>
      </form>

      {/* CLIENT LIST */}
      <div className="mt-6 space-y-2">
        {clients.map((c) => (
          <div
            key={c._id}
            className="flex justify-between items-center
                       bg-slate-50 p-3 rounded-lg
                       hover:bg-slate-100 hover:shadow
                       transition"
          >
            <div>
              <p className="font-medium text-gray-800">
                {c.name}
              </p>
              <p className="text-xs text-gray-500">
                {c.designation}
              </p>
            </div>

            <div className="space-x-2">
              <button
                className="bg-indigo-600 hover:bg-indigo-700
                           text-white px-3 py-1 rounded transition"
                onClick={() => {
                  setEditingClient(c._id);
                  setClient({
                    name: c.name,
                    description: c.description,
                    designation: c.designation,
                    image: null,
                  });
                }}
              >
                Edit
              </button>

              <button
                className="bg-red-600 hover:bg-red-700
                           text-white px-3 py-1 rounded transition"
                onClick={() => deleteClient(c._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="hidden md:flex items-center justify-center">
      <img
        src="/clients.jpg"
        alt="Client Management"
        className="max-h-96 object-contain drop-shadow-lg"
      />
    </div>

  </div>
</section>



      {/* ================= CONTACTS ================= */}
     <section className="bg-white p-6 rounded-2xl shadow">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold text-gray-800">
      Contact Form Entries
    </h2>
    <span className="text-sm text-gray-500">
      Total: {contacts.length}
    </span>
  </div>

  <div className="space-y-2 max-h-64 overflow-y-auto">
    {contacts.map((c) => (
      <div
        key={c._id}
        className="group bg-slate-50 p-3 rounded-lg
                   hover:bg-slate-100 hover:shadow
                   transition"
      >
        <p className="text-sm text-gray-800 font-medium">
          {c.fullName}
        </p>

        <p className="text-xs text-gray-600">
          {c.email} · {c.mobile}
        </p>

        <p className="text-xs text-gray-500">
          {c.city}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ================= SUBSCRIBERS ================= */}
      <section className="bg-white p-6 rounded-2xl shadow">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold text-gray-800">
      Newsletter Subscribers
    </h2>
    <span className="text-sm text-gray-500">
      Total: {subs.length}
    </span>
  </div>

  <div className="space-y-2 max-h-64 overflow-y-auto">
    {subs.map((s) => (
      <div
        key={s._id}
        className="flex items-center justify-between
                   bg-slate-50 p-3 rounded-lg
                   hover:bg-slate-100 hover:shadow
                   transition"
      >
        <span className="text-sm text-gray-700">
          {s.email}
        </span>

        <span className="text-xs text-gray-400 opacity-0
                         group-hover:opacity-100 transition">
          subscribed
        </span>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}

export default Admin;
