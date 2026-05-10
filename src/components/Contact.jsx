function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8f7f4] px-8 md:px-16 min-h-screen py-24 "
    >

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Let’s Connect
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          I’m always open to learning opportunities,
          collaborations, and interesting projects.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">

          <a
            href="https://github.com/rishika-2626"
            target="_blank"
            className="
              bg-white
              px-6
              py-3
              rounded-full
              border
              border-gray-200
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishika-thatipamula26/"
            target="_blank"
            className="
              bg-white
              px-6
              py-3
              rounded-full
              border
              border-gray-200
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            LinkedIn
          </a>

          <a
            href="mailto:rishikasruthi@email.com"
            className="
              bg-white
              px-6
              py-3
              rounded-full
              border
              border-gray-200
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Email
          </a>

        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">
          © 2026 Rishika. Built with React & Tailwind CSS.
        </p>

      </div>

    </section>
  )
}

export default Contact
