import { SkillsSection } from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Santiago Tovar</h1>
        <p className="text-xl mt-2">Full Stack Developer</p>
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
