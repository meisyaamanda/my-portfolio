"use client";

import ParticlesBg from "../home/particle-bg";

function SkillPage() {
  const skills = [
    { name: "JavaScript", level: "Intermediate", percentage: 50 },
    { name: "TypeScript", level: "Beginner", percentage: 30 },
    { name: "React", level: "Intermediate", percentage: 50 },
    { name: "Next.js", level: "Beginner", percentage: 30 },
    { name: "Node.js", level: "Intermediate", percentage: 75 },
    { name: "Tailwind CSS", level: "Intermediate", percentage: 55 },
    { name: "Go", level: "Beginner", percentage: 40 },
    { name: "PHP", level: "Intermediate", percentage: 60 },
    { name: "Laravel", level: "Intermediate", percentage: 60 },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500";
      case "Advanced":
        return "bg-blue-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Beginner":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen relative text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <ParticlesBg />
      <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-sm">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${getLevelColor(skill.level)} transition-all duration-500`}
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillPage;
