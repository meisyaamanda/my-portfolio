import * as React from "react";
import Photo from "./home/display-photo/page";
import ProjectsPage from "./project/page";
import ContactPage from "./contact/page";
function Page() {
  return (
    <div className="overflow-hidden">
      <Photo />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default Page;
