import Link from "next/link";

function Navigation() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white flex p-4 justify-between">
        <h3> My Portofolio</h3>
        <nav className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/project"}>Project</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
