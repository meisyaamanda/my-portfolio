import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import ParticlesBg from "../home/particle-bg";
import { FaWhatsapp } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesBg />
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
        I’m always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out through the links below:
      </h2>
      <div className="mt-8 px-8 gap-8 items-center flex flex-row flex-wrap justify-center">
        <a
          href="https://wa.me/6281270214415"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/meisyaamandaaldi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon className="w-12 h-12" />
        </a>
        <a
          href="https://github.com/meisyaamanda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubLogoIcon className="w-12 h-12" />
        </a>
        <a
          href="https://discord.com/users/maaannn_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <DiscordLogoIcon className="w-12 h-12" />
        </a>
        <a href="mailto:meisyaamandaa02@gmail.com" aria-label="Email">
          <EnvelopeClosedIcon className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
