import { Skill, BACK_END_SKILLS, FRONT_END_SKILLS} from "@/interfaces/Skill";

export const SkillsSection = () => {
    return (
        <section className="py-10">
      <div className="container mx-auto">
        {/* Back-End Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Back-End Development</h2>
          <div className="flex flex-wrap">
            {BACK_END_SKILLS.map((skill, index) => (
              <span key={index} className="m-2 bg-gray-200 px-4 py-2 rounded-full text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        {/* Front-End Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Front-End Development</h2>
          <div className="flex flex-wrap">
            {FRONT_END_SKILLS.map((skill, index) => (
              <span key={index} className="m-2 bg-gray-200 px-4 py-2 rounded-full text-sm">
                {skill.name}
              </span>
            ))}
          </div>
      </div>
        </div>
    </section>
    );
    };