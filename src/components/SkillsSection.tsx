import { Skill, BACK_END_SKILLS, FRONT_END_SKILLS} from "@/interfaces/Skill";
import Image from "next/image";

export const SkillsSection = () => {
    return (
      <section className="flex h-screen gap-1">
        <div className="w-1/2 px-24">
          <h1 className="text-5xl py-16">
            About Me</h1>
          <p className="text-xl">
            I am a Full Stack Developer with experience in React, Node.js, and
            PostgreSQL. I am passionate about learning new technologies and
            applying them to solve real-world problems.
          </p>
        </div>
        <div className="w-1/2 h-3/5 mt-auto">
          <ul className="flex gap-20 flex-wrap">
            <li className="w-1/3 flex flex-row">
                <Image className="w-1/6 p-2 mb-auto" src="/icons/terminal.svg" width={500} height={500} alt="Terminal" />
                <div className="w-5/6 flex flex-col gap-2 justify-between">
                  <h2 className="text-4xl font-semibold text-secondary">
                    Back-End</h2>
                  <ul className="text-xl flex flex-wrap flex-col h-28 gap-2">
                    <li>
                      <p>FastApi</p>
                    </li>
                    <li>
                      <p>Django</p>
                    </li>
                    <li>
                      <p>Node.js</p>
                    </li>
                    <li>
                      <p>Strapi</p>
                    </li>
                    <li>
                      <p>AWS</p>
                    </li>
                    <li>
                      <p>Azure</p>
                    </li>
                  </ul>
                </div>
            </li>
            <li className="w-1/3 flex flex-row">
                <Image className="w-1/6 p-2 mb-auto" src="/icons/monitor.svg" width={500} height={500} alt="Terminal" />
                <div className="w-5/6 flex flex-col gap-2 justify-between">
                  <h2 className="text-4xl font-semibold text-secondary">
                    Front-End</h2>
                  <ul className="text-xl flex flex-wrap flex-col h-28 gap-2">
                    <li>
                      <p>React</p>
                    </li>
                    <li>
                      <p>Next</p>
                    </li>
                    <li>
                      <p>Tailwind</p>
                    </li>
                    <li>
                      <p>Flutter</p>
                    </li>
                    <li>
                      <p>Electron</p>
                    </li>
                  </ul>
                </div>
            </li>
            <li className="w-1/3 flex flex-row">
                <Image className="w-1/6 p-2 mb-auto" src="/icons/database.svg" width={500} height={500} alt="Terminal" />
                <div className="w-5/6 flex flex-col gap-2 justify-between">
                  <h2 className="text-4xl font-semibold text-secondary">
                    Database</h2>
                  <ul className="text-xl flex flex-wrap flex-col h-28 gap-2">
                    <li>
                      <p>PostgreSQL</p>
                    </li>
                    <li>
                      <p>MongoDB</p>
                    </li>
                    <li>
                      <p>Vector DB</p>
                    </li>
                    <li>
                      <p>Redis</p>
                    </li>
                  </ul>
                  
                </div>
            </li>
            <li className="w-1/3 flex flex-row">
                <Image className="w-1/6 p-2 mb-auto" src="/icons/terminal.svg" width={500} height={500} alt="Terminal" />
                <div className="w-5/6 flex flex-col gap-2 justify-between">
                  <h2 className="text-4xl font-semibold text-secondary">
                    Others</h2>
                  <ul className="text-xl flex flex-wrap flex-col h-28 gap-2">
                    <li>
                      <p>Scrum</p>
                    </li>
                    <li>
                      <p>Clean Code</p>
                    </li>
                    <li>
                      <p>Queues</p>
                    </li>
                  </ul>
                  
                </div>
            </li>
          </ul>
        </div>
      </section>
    );
    };