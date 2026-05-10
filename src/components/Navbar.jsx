function Navbar(){
    return (
        <nav className="flex justify-between items-center px-8 py-6 bg-white">
            <h1 className="text-2xl font-semibold text-black">
        Rishika
      </h1>

      <ul className="flex gap-8 text-gray-700">

  <li>
    <a
      href="#work"
      className="hover:text-black transition"
    >
      Work
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="hover:text-black transition"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#skills"
      className="hover:text-black transition"
    >
      Skills
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="hover:text-black transition"
    >
      Contact
    </a>
  </li>

</ul>
        </nav>
    )
}

export default Navbar