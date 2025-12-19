function ClientCard({ client }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md p-6 text-center
                 hover:-translate-y-1 hover:shadow-xl
                 transition-all duration-300"
    >
      {/* AVATAR */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r
                     from-indigo-400 to-blue-400
                     opacity-0 group-hover:opacity-100
                     blur transition"
        />
        <img
          src={`${import.meta.env.https://real-trust-backend.onrender.com/}/${client.image}`}
          alt={client.name}
          className="relative h-24 w-24 rounded-full object-cover
                     ring-4 ring-white
                     group-hover:scale-105
                     transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <p className="text-sm text-gray-600 italic mb-4 line-clamp-3">
        “{client.description}”
      </p>

      <h4
        className="font-bold text-gray-900
                   group-hover:text-indigo-600
                   transition-colors"
      >
        {client.name}
      </h4>

      <p className="text-xs text-gray-500 mt-1">
        {client.designation}
      </p>
    </div>
  );
}

export default ClientCard;
