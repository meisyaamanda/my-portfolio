import Image from "next/image";
import ParticlesBg from "../home/particle-bg";

function ProjectsPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden py-16">
      <ParticlesBg />

      {/* Title */}
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold">
        A small selection of recent{" "}
        <span className="text-cyan-300">projects</span>
      </h1>

      {/* Projects Wrapper */}
      <div className="mt-12 space-y-12 px-6 md:px-12 lg:px-20">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/bei.png"
            alt="bei"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              PT Bursa Efek Indonesia
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/images/muf.png"
            alt="muf"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              Mandiri Utama Finance
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              PT Sarana Multi Infrastruktur
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/images/muf.png"
            alt="muf"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              Nuxa Skin Clinic
            </h2>
            <p className="mt-2 text-gray-300">
              Deskripsi singkat tentang project ini bla bla bla.
            </p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              Lavees Cosmedics
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
