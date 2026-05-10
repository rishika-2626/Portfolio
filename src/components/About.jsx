function About() {
  return (
    <section id="about" className="bg-[#f8f7f4] px-8 md:px-16 min-h-screen pt-14">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I’m a Computer Science student passionate about
              full-stack development, backend systems, IoT,
              and data science.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              I enjoy building scalable applications,
              solving real-world problems, and continuously
              learning modern technologies through hands-on projects.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className=" bg-white
  p-6
  rounded-3xl
  border
  border-gray-200
  transition
  duration-300
  hover:-translate-y-2
  hover:shadow-xl">
              <h3 className="text-4xl font-bold mb-2">
                4+
              </h3>

              <p className="text-gray-600">
                Projects Built
              </p>
            </div>

            <div className=" bg-white
  p-6
  rounded-3xl
  border
  border-gray-200
  transition
  duration-300
  hover:-translate-y-2
  hover:shadow-xl">
              <h3 className="text-4xl font-bold mb-2">
                Full Stack
              </h3>

              <p className="text-gray-600">
                Web Development
              </p>
            </div>

            <div className=" bg-white
  p-6
  rounded-3xl
  border
  border-gray-200
  transition
  duration-300
  hover:-translate-y-2
  hover:shadow-xl0">
              <h3 className="text-4xl font-bold mb-2">
                IoT
              </h3>

              <p className="text-gray-600">
                Hardware + Software
              </p>
            </div>

            <div className=" bg-white
  p-6
  rounded-3xl
  border
  border-gray-200
  transition
  duration-300
  hover:-translate-y-2
  hover:shadow-xl">
              <h3 className="text-4xl font-bold mb-2">
                DSA
              </h3>

              <p className="text-gray-600">
                Problem Solving
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About