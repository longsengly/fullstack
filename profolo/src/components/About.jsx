import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-4">
      <div className="w-full max-w-2xl mx-auto space-y-4">
        <div className="w-full bg-zinc-950 rounded-xl overflow-hidden font-cascadia text-sm mb-4 shadow-2xl border border-zinc-800">
          {/* Title bar */}
          <div className="bg-[#3c3c3c] px-4 py-2.5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Body */}
          <div className="px-5 py-5 space-y-3 text-[clamp(12px,2vw,14px)] leading-relaxed">
            {/* Command */}
            <div>
              <span className="text-[#4ec9b0]">johnsmith</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-200">cat aboutjohn</span>
            </div>

            {/* Output prompt */}
            <div>
              <span className="text-[#4ec9b0]">aboutjohn</span>
              <span className="text-[#569cd6]"> (main)</span>
              <span className="text-gray-400"> $ </span>
            </div>

            {/* Bio */}
            <p className="text-gray-300 w-full bg-gray-900 h-40 rounded-lg py-5 px-[5px]">
              <span className="text-white font-cascadia text-[clamp(13px,2vw,15px)] leading-relaxed">
                Hello! I'm John. I'm a systems engineer for Google. I studied
                CompSci at Harvard, I enjoy long walks on the beach, and I
                believe artificial intelligence will inevitably rule us all one
                day. You should hire me!
              </span>
            </p>
          </div>
        </div>
        {/* skills */}
        <div className="w-full bg-zinc-950 rounded-xl overflow-hidden font-cascadia text-sm h-130 mb-4 shadow-2xl border border-zinc-800">
          {/* Title bar */}
          <div className="bg-[#3c3c3c] px-4 py-2.5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Body */}
          <div className="px-5 py-5 space-y-3 text-[clamp(12px,2vw,14px)] leading-relaxed">
            {/* Command */}
            <div>
              <span className="text-[#4ec9b0]">johnsmith</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-200">cd skills/tools</span>
            </div>

            {/* Output prompt */}
            <div>
              <span className="text-[#4ec9b0]">skills/tools</span>
              <span className="text-[#569cd6]"> (main)</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-400"> ls</span>
            </div>
            <div>
              <span className="text-[#4ec9b0]">Proficient With</span>
            </div>

            {/* Skills list */}
            <div className="text-gray-300 w-full bg-gray-900 rounded-lg py-4 px-[18px] h-85 overflow-y-auto">
              <div className="mb-4 text-sm text-[#4ec9b0]">Proficient With</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-6">
                  <div className="pl-2">javascript</div>
                  <div className="pl-2">react</div>
                  <div className="pl-2">git</div>
                  <div className="pl-2">github</div>
                  <div className="pt-2 text-[#4ec9b0]">Exposed To</div>
                  <div className="pl-2">nodejs</div>
                </div>

                <div className="space-y-6">
                  <div className="pl-2">bootstrap</div>
                  <div className="pl-2">html5</div>
                  <div className="pl-2">css3</div>
                  <div className="pl-2">figma</div>
                  <div className="pt-2">python</div>
                  <div className="pl-2">adobe illustrator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hobbies */}
        <div className="w-full bg-zinc-950 rounded-xl overflow-hidden font-cascadia text-sm h-75 mb-4 shadow-2xl border border-zinc-800">
          {/* Title bar */}
          <div className="bg-[#3c3c3c] px-4 py-2.5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Body */}
          <div className="px-5 py-5 space-y-3 text-[clamp(12px,2vw,14px)] leading-relaxed">
            {/* Command */}
            <div>
              <span className="text-[#4ec9b0]">johnsmith</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-200">cd hobbies/interests</span>
            </div>

            {/* Output prompt */}
            <div>
              <span className="text-[#4ec9b0]">hobbies/interests</span>
              <span className="text-[#569cd6]"> (main)</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-400"> ls</span>
            </div>

            {/* Hobbies list */}
            <div className="text-gray-300 w-full bg-gray-900  rounded-lg py-2 px-[5px] h-38 overflow-y-auto">
              <div className="space-y-3">
                <div>📘  reading</div>
                <div>🎭  theater</div>
                <div>🎬  movies</div>
                <div>🍳  cooking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
