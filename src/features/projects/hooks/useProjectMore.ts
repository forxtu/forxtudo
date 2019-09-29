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

  const setProjectFavoriteStatusToFalse = () => {
    projectsStore.setProjectFavoriteStatus(project.id, false);
    setIsMoreOpenToggle();
  };

  const setProjectFavoriteStatusToTrue = () => {
    projectsStore.setProjectFavoriteStatus(project.id, true);
    setIsMoreOpenToggle();
  };

  const editProjectModalHandler = (toggleModal: () => void) => {
    setIsMoreOpenToggle();
    toggleModal();
  };

  return {
    setProjectFavoriteStatusToFalse,
    setProjectFavoriteStatusToTrue,
    editProjectModalHandler
  };
};

export default useProjectMore;
