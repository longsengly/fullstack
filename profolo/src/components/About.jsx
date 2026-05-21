import React from "react";

const About = () => {
  return (
    <div className="min-h-screen max-w-full flex justify-center bg-amber-50 px-4 py-20 lg:py-2 bg-black mt-12 scroll-y-smooth ">
      <div className="w-full  py-4">
        <div className="max-w-xl max-w-2xl mx-auto bg-[#2d2d2d] rounded-lg overflow-hidden font-cascadia text-sm mb-4">
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
              <span className="text-[#4ec9b0]">oun_punlork_smile</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-200">cat about-me</span>
            </div>

            {/* Output prompt */}
            <div>
              <span className="text-[#4ec9b0]">aboutjohn</span>
              <span className="text-[#569cd6]"> (main)</span>
              <span className="text-gray-400"> $ </span>
            </div>

            {/* Bio */}
            <p className="text-gray-300 w-full bg-gray-900  rounded-lg py-2 px-[5px]">
              <span className="text-white">
                Hello! I'm John. I'm a systems engineer for Google. I studied
                CompSci at Harvard, I enjoy long walks on the beach, and I
                believe artificial intelligence will inevitably rule us all one
                day. You should hire me!
              </span>
            </p>
          </div>
        </div>
        {/* skills */}
        <div className="max-w-2xl max-w-2xl mx-auto bg-[#2d2d2d] rounded-lg overflow-hidden font-cascadia text-sm h-74 mb-4 mt-4">
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
              <span className="text-[#4ec9b0]">oun_punlork_smile</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-200">cat Skill-me/tools-me</span>
            </div>

            {/* Output prompt */}
            <div>
              <span className="text-[#4ec9b0]">skills/tools</span>
              <span className="text-[#569cd6]"> (main)</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-400"> ls </span>
            </div>
            <div>
              <span className="text-[#4ec9b0]">Proficient With</span>
            </div>

            {/* Bio */}
            <div className="text-gray-300 w-full bg-gray-900  rounded-lg py-2 px-[5px] h-38 overflow-y-auto">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* habit */}
        <div className="max-w-2xl max-w-2xl mx-auto bg-[#2d2d2d] rounded-lg overflow-hidden font-cascadia text-sm h-74 mb-4 mt-4">
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
              <span className="text-[#4ec9b0]">oun_punlork_smile</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-gray-200">cat Skill-me</span>
            </div>

            {/* Output prompt */}
            <div>
              <span className="text-[#4ec9b0]">aboutjohn</span>
              <span className="text-[#569cd6]"> (main)</span>
              <span className="text-gray-400"> $ </span>
            </div>

            {/* Bio */}
            <div className="text-gray-300 w-full bg-gray-900  rounded-lg py-2 px-[5px] h-38 overflow-y-auto">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
