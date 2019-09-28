import { useEffect } from "react";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

const useProjects = () => {
  const { projectsStore } = useStores();

  const deleteProjectHandler = (projectId: string) => {
    projectsStore.deleteProject(projectId);
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
    allProjects: projectsStore.allProjects,
    deleteProjectHandler,
    setSelectedProjectId
  };
};

export default useProjects;
