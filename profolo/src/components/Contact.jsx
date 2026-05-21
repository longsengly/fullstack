export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900  p-4">
      <div className="w-full max-w-2xl rounded-xl bg-zinc-950 shadow-2xl overflow-hidden border border-zinc-800">
        {/* Top bar */}
        <div className="flex items-center gap-2 bg-zinc-800 px-4 py-3">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-cascadia text-green-400 text-sm sm:text-base">
          {/* Command */}
          <p className="text-gray-300 text-[#15f1a4]">
            johnsmith <span className="text-green-400">$</span> cd
            hobbies/interests
          </p>

          <p className="mt-2 text-gray-300">
            hobbies/interests (main) <span className="text-green-400">$</span>{" "}
            ls
          </p>

          {/* List */}
          <div className="mt-6 space-y-3 font-cascadia">
            <ul className="mt-6 space-y-4 w-full items-start md:justify-start text-2xl cursor-pointer">
              <li className="flex  md:justify-start gap-3 text-gray-800 text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
                <span className="text-blue-600">
                  🎓
                </span>
                <span className="text-lg">Teacher</span>
              </li>

              <li className="flex  md:justify-start gap-3 text-gray-800 text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
                <span>
                  💻
                </span>
                <span className="text-lg">Coding</span>
              </li>

              <li className="flex  md:justify-start gap-3 text-gray-800 text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
                <span className="text-yellow-600">
                  📖
                </span>
                <span className="text-lg">Reading a Book</span>
              </li>

              <li className="flex  md:justify-start gap-3 text-gray-800 break-all text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
                <span className="text-black">
                    📧
                </span>
                <span className="text-lg">ale906271@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
