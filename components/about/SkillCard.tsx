interface SkillCard {
  category: string;
  skills: string[];
}


export default function SkillCard({ category, skills }: SkillCard) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-left">
      <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-white/10 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}