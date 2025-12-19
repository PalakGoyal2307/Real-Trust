function ProjectCard({ project }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md overflow-hidden
                 hover:-translate-y-1 hover:shadow-xl
                 transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={`${import.meta.env.https://real-trust-backend.onrender.com/}/${project.image}`}
          alt={project.name}
          className="h-48 w-full object-cover
                     group-hover:scale-110
                     transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h3
          className="text-lg font-bold text-gray-900
                     group-hover:text-indigo-600
                     transition-colors"
        >
          {project.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {project.description}
        </p>

        <button
          className="inline-flex items-center gap-1
                     text-indigo-600 font-medium
                     group-hover:gap-2
                     transition-all"
        >
          Read More
          <span className="transform group-hover:translate-x-1 transition">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
