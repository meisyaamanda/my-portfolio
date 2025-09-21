import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Navigation() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900 flex p-4 justify-between text-white">
        <h3> My Portofolio</h3>
        <nav className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/project"}>Project</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <button className="bg-blue-950 px-4 py-2 rounded-lg flex items-center gap-2">
          <DownloadIcon />
          Download CV
        </button>
      </header>
    </>
  );
}

export default Navigation;
