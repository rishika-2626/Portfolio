import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="min-h-screen bg-[#f8f7f4] flex items-center px-8 md:px-16">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side */}
        <div className="flex-1">
          
          <p className="text-gray-500 text-lg mb-4">
            ASPIRING SOFTWARE ENGINEER
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            Hi, I’m Rishika
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
            Building projects in web development, IoT, data science,
            and cybersecurity while learning modern full-stack development.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              View Projects
            </button>

            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              GitHub
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          
          <img
            src={heroImage}
            alt="Hero"
            className="w-[350px] md:w-[450px] object-contain"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero