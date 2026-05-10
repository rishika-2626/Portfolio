function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        className="inline-block bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition"
      >
        View Project
      </a>

    </div>
  )
}

export default ProjectCard