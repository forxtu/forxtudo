import React from "react";

// components
import Projects from "features/projects/components/Projects";
import Labels from "features/labels/components/Labels";

type Sidebar = {
  paramsId: string;
};

const Sidebar = ({ paramsId }: Sidebar) => (
  <>
    <Projects globalProjectId={paramsId} />
    <Labels />
  </>
);

export default Sidebar;
