import { SkillsSection } from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col min-h-screen">
        <div className="my-auto ml-32 pl-2 py-1 border-l-2 border-l-green-800 ">
          <h1 className="text-6xl">Santiago Tovar</h1>
          <p className="text-xl mt-2">Full Stack Developer</p>
        </div>
        <div>
          <Image
            className="absolute top-0 right-0 w-1/2"
            src="/images/hero.png"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="flex h-screen gap-16 border-red-800 border">
        <div className="w-1/2 px-24">
          <h1 className="text-5xl py-16">
            About Me</h1>
          <p className="text-xl">
            I am a Full Stack Developer with experience in React, Node.js, and
            PostgreSQL. I am passionate about learning new technologies and
            applying them to solve real-world problems.
          </p>
        </div>
        <div className="w-1/2 h-1/2 mt-auto">
          <ul className="flex gap-20 flex-wrap">
            <li className="w-1/3">
              <div>
                <div>{/* <Image /> */}Image</div>
                <div>
                  <h2>Back-End</h2>
                  <p>FastApi, Django, Node.js, AWS, Azure</p>
                </div>
              </div>
            </li>
            <li className="w-1/3">
              <div>
                <div>{/* <Image /> */}Image</div>
                <div>
                  <h2>Front-End</h2>
                  <p>
                    Development: React, Axios, Electron, Tailwind CSS, Flutter
                  </p>
                </div>
              </div>
            </li>
            <li className="w-1/3">
              <div>
                <div>{/* <Image /> */}Image</div>
                <div>
                  <h2>Database</h2>
                  <p>PostgreSQL, MongoDB, Vector DB, Redis</p>
                </div>
              </div>
            </li>
            <li className="w-1/3">
              <div>
                <div>{/* <Image /> */}Image</div>
                <div>
                  <h2>Others</h2>
                  <p>Scrum, Clean code, SOLID principles</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <SkillsSection />

      <footer className="text-center py-4 border-t">
        <p>
          Connect with me on{" "}
          <span className="font-semibold">
            <a
              href="https://www.linkedin.com/in/santiago-tovar/"
              target="__blank"
            >
              LinkedIn
            </a>
          </span>{" "}
          and{" "}
          <span className="font-semibold">
            <a href="https://github.com/satovarr" target="__blank">
              GitHub
            </a>
          </span>
        </p>
        <p>
          Email:{" "}
          <span className="font-semibold">
            <a href="mailto:santiagotovar.contacto@gmail.com" target="__blank">
              santiagotovar.contacto@gmail.com
            </a>
          </span>
        </p>
      </footer>
    </main>
  );
}
