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

  const deleteProjectHandler = (projectId: string) => {
    projectsStore.deleteProject(projectId);
  };

  const setProjectValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectValue(event.currentTarget.value);
  };

  const setSelectedProjectId = (projectId: string) => {
    projectsStore.selectedProjectId = projectId;
  };

  useEffect(() => {
    autorun(() => {
      projectsStore.fetchAllProjects();
    });
  }, []);

  return {
    defaultProjects: projectsStore.defaultProjects,
    customProjects: projectsStore.customProjects,
    addProjectHandler,
    deleteProjectHandler,
    projectValue,
    setProjectValueHandler,
    setSelectedProjectId
  };
};

export default useProjects;
