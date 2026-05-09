import * as React from "react";
import Photo from "./home/display-photo/page";
import ProjectsPage from "./project/page";
import ContactPage from "./contact/page";
import AboutPage from "./about/page";
import SkillPage from "./skills/page";
function Page() {
  return (
    <div className="overflow-hidden">
      <Photo />
      <AboutPage />
      <ProjectsPage />
      <SkillPage />
      <ContactPage />
    </div>
  );
}

export default Page;
