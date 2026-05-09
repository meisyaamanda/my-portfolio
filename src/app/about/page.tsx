import ParticlesBg from "../home/particle-bg";

function AboutPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden py-16">
      <ParticlesBg />

      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold">
        A small selection of recent <span className="text-cyan-300">About</span>
      </h1>
    </div>
  );
}

export default AboutPage;
