import * as React from "react";
import Photo from "./home/display-photo/page";
import ProjectsPage from "./project/page";
function Page() {
  return (
    <div className="overflow-hidden">
      <Photo />
      <ProjectsPage />
    </div>
  );
}

export default Page;
