import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="bg-[#f8f7f4] px-8 md:px-16 min-h-screen pt-4 pb-10">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects