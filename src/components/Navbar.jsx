function Navbar(){
    return (
        <nav className="flex justify-between items-center px-8 py-6 bg-white">
            <h1 className="text-2xl font-semibold text-black">
        Rishika
      </h1>

      <ul className="flex gap-8 text-gray-700">
        <li className="cursor-pointer hover:text-black">Work</li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Skills</li>
        <li className="cursor-pointer hover:text-black">Contact</li>
      </ul>
        </nav>
    )
}

export default Navbar