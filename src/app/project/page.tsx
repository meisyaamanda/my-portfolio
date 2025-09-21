import Image from "next/image";
import ParticlesBg from "../home/particle-bg";

function ProjectsPage() {
  return (
    <div className="pb-16 pt-16">
      <ParticlesBg />
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-white">
        A small selection of recent{" "}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div>
        <div className="mt-8 pl-8 gap-8 item-center flex flex-col md:flex-row">
          <Image
            src="/images/p1.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              PT Bursa Efek Indonesia
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>
        <div className="mt-8 pl-8 gap-8 item-center flex flex-col md:flex-row-reverse">
          <Image
            src="/images/p2.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              Mandiri Utama Finance
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>
        <div className="mt-8 pl-8 gap-8 item-center flex flex-col md:flex-row">
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              PT Sarana Multi Infrastruktur
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
