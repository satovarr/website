import BlogSection from "@/components/BlogSection";
import { SkillsSection } from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col md:flex-row min-h-screen w-full relative">
        <div className="my-auto ml-32 pl-2 py-1 border-l-2 border-l-green-800 w-full md:w-1/2">
          <h1 className="text-6xl">Santiago Tovar</h1>
          <p className="text-xl mt-2">Full Stack Developer</p>
        </div>
        <div className="hero-image mt-20 md:w-1/2">{" "}</div>
      </section>

      <SkillsSection />
      <BlogSection />
    </main>
  );
}
