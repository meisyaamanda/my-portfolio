import Image from "next/image";
import ParticlesBg from "../home/particle-bg";

function ProjectsPage() {
  return (
    <div className="relative text-white overflow-hidden py-16">
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
              Internal System for Bursa Efek Indonesia, built to help maintain
              and keep an eye on the stock market, emitens, and companies
              willing to change their market/company status.
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
              Information System for Mandiri Utama Finance&apos;s employee to
              keep track of potential frauds, losses, and how to resolve them
              regarding their credit services.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/p3.jpg"
            alt="smi"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              PT Sarana Multi Infrastruktur
            </h2>
            <p className="mt-2 text-gray-300">
              Internal Information System to manage, track, and resolve their
              loans for the partnering companies.
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/images/nuxa.png"
            alt="nuxa"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              Nuxa Skin Clinic
            </h2>
            <p className="mt-2 text-gray-300">
              This project appears to be a production-grade business management
              platform that consolidates e-commerce, clinic operations, CRM, and
              accounting into a unified system.
            </p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/Lavees.png"
            alt="lavees"
            width={800}
            height={650}
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              Lavees Cosmedics
            </h2>
            <p className="mt-2 text-gray-300">
              Information System for Lavees Beauty Clinic, with integration for
              payment gateway such as BCA, Gojek, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
