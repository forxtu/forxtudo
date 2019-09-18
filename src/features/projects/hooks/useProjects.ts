import { useState, useEffect, ChangeEvent } from "react";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

const useProjects = () => {
  const { projectsStore } = useStores();

  const [projectValue, setProjectValue] = useState<string>("");

  const addProjectHandler = (event: any) => {
    event.preventDefault();

    projectsStore.addProject(projectValue);
    setProjectValue("");
  };

  const setProjectValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectValue(event.currentTarget.value);
  };

  useEffect(() => {
    autorun(() => {
      projectsStore.fetchAllProjects();
      projectsStore.fetchDefaultProjects();
    });
  }, []);

  return {
    initialProjects: projectsStore.initialProjects,
    allProjects: projectsStore.allProjects,
    addProjectHandler,
    projectValue,
    setProjectValueHandler
  };
};

export default useProjects;
