// hooks
import useStores from "hooks/useStores";

// utils
import { Project } from "features/projects/store/ProjectsStore";

type UseProjectMore = {
  project: Project;
  setIsMoreOpenToggle: () => void;
};

const useProjectMore = ({ project, setIsMoreOpenToggle }: UseProjectMore) => {
  const { projectsStore } = useStores();

  const editProjectModalHandler = (toggleModal: () => void) => {
    setIsMoreOpenToggle();
    toggleModal();
  };

  const setProjectFavoriteStatusToFalse = () => {
    projectsStore.setProjectFavoriteStatus(project.id, false);
    setIsMoreOpenToggle();
  };

  const setProjectFavoriteStatusToTrue = () => {
    projectsStore.setProjectFavoriteStatus(project.id, true);
    setIsMoreOpenToggle();
  };

  const deleteProjectHandler = (projectId: string) => {
    projectsStore.deleteProject(projectId);
  };

  return {
    setProjectFavoriteStatusToFalse,
    setProjectFavoriteStatusToTrue,
    editProjectModalHandler,
    deleteProjectHandler
  };
};

export default useProjectMore;
