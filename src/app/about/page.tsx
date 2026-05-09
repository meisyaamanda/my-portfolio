import Image from "next/image";
import ParticlesBg from "../home/particle-bg";

function AboutPage() {
  return (
    <div className="relative text-white overflow-hidden py-16 px-6 md:px-12 lg:px-24">
      <ParticlesBg />

      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-16">
        About <span className="text-cyan-300">Me</span>
      </h1>

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-12">
        {/* Text */}
        <div className="flex flex-col gap-5 text-center md:text-left flex-1">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meisya Amanda Aldi
            </h2>
            <p className="text-cyan-300 text-lg font-medium mt-1">
              Software Engineer
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Hi! I&apos;m a Software Engineer with a background in Informatics
            and over 2 years of hands-on experience building enterprise-grade
            web applications. I enjoy turning complex business requirements into
            clean, functional systems.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Throughout my career, I&apos;ve had the opportunity to work on
            real-world projects for leading Indonesian companies, including PT
            Bursa Efek Indonesia, Mandiri Utama Finance, PT Sarana Multi
            Infrastruktur, Nuxa Skin Clinic, and Lavees Cosmedics — delivering
            internal systems, business management platforms, and information
            systems that are actively used in production.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I&apos;m passionate about writing maintainable code, building great
            user experiences, and continuously learning new technologies to keep
            up with the ever-evolving world of software development.
          </p>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 self-start">
          <div className="w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border-2 border-cyan-300/30 shadow-lg shadow-cyan-500/10">
            <Image
              src="/images/profile.png"
              alt="Meisya Amanda Aldi"
              width={1806}
              height={2994}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
