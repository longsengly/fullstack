import React from "react";

const jobs = [
  {
    company: "Google",
    role: "Systems Engineer",
    period: "2021 — Present",
    bullets: [
      "Designed scalable systems handling 1M+ requests/day",
      "Improved CI/CD pipeline to reduce deploy time by 30%",
    ],
  },
  {
    company: "Acme Corp",
    role: "Frontend Developer",
    period: "2018 — 2021",
    bullets: [
      "Built responsive React apps used by 200k+ users",
      "Collaborated with designers to ship accessible UIs",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-zinc-950 shadow-2xl overflow-hidden font-cascadia text-sm mb-6 border border-zinc-800 min-h-[520px]">
        {/* Title bar */}
        <div className="bg-[#3c3c3c] px-4 py-2.5 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-[clamp(13px,2vw,15px)] leading-relaxed">
          <div>
            <span className="text-[#4ec9b0]">johnsmith</span>
            <span className="text-gray-400"> $ </span>
            <span className="text-gray-200">cd work/experience</span>
          </div>

          <div className="mt-3">
            <span className="text-[#4ec9b0]">work/experience</span>
            <span className="text-[#569cd6]"> (main)</span>
            <span className="text-gray-400"> $ </span>
            <span className="text-gray-400"> ls</span>
          </div>

          <div className="mt-5 text-[#4ec9b0]">Experience</div>

          <div className="mt-4 bg-zinc-900 text-gray-300 rounded-lg p-4 space-y-4 min-h-[260px]">
            {jobs.map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <div className="text-white font-medium">{job.role}</div>
                  <div className="text-gray-400 text-sm">{job.company}</div>
                </div>

                <div className="text-gray-400 text-sm md:text-right">{job.period}</div>

                <div className="w-full mt-2 md:mt-0 md:w-3/4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-200">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-[13px]">{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
