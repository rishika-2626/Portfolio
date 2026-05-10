import skills from '../data/skills'

function Skills() {
  return (
    <section className="bg-[#f8f7f4] px-8 md:px-16 pt-4 pb-10">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skillGroup.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="cursor-pointer hover:text-black bg-gray-100 px-4 py-2 rounded-full text-sm transition duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills