import { useState, ChangeEvent } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";

// utils
import { Project } from "features/projects/store/ProjectsStore";

type UseProjectSetup = {
  project: Project;
  isEditMode: boolean;
};

const useProjectSetup = ({
  project: { name, color, id, isFavorite: isFavoriteProject },
  isEditMode
}: UseProjectSetup) => {
  const { projectsStore } = useStores();

  const [projectValue, setProjectValue] = useState<string>(name || "");
  const [projectColor, setProjectColor] = useState<string>(color || "#000");

  const {
    value: isFavorite,
    setValue: setIsFavoritesValue,
    setFalse: setIsFavoriteFalse,
    toggle: toggleIsFavorite
  } = useBoolean(isFavoriteProject || false);

  const {
    value: isProjectModalOpen,
    setFalse: setIsProjectModalOpenFalse,
    toggle: toggleIsProjectModalOpen
  } = useBoolean(false);

  const resetProjectSetupValues = () => {
    setProjectValue("");
    setProjectColor("#000");
    setIsFavoriteFalse();
    setIsProjectModalOpenFalse();
  };

  const setProjectValuesAsTheyWere = () => {
    setProjectValue(name);
    setProjectColor(color as string);
    setIsFavoritesValue(isFavoriteProject as boolean);
    setIsProjectModalOpenFalse();
  };

  const setProjectColorHandler = (color: string) => {
    setProjectColor(color);
  };

  const setProjectValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectValue(event.currentTarget.value);
  };

  const setProjectConfirm = (e: any) => {
    e.preventDefault();

    if (isEditMode) {
      projectsStore.editProject(id, projectValue, projectColor, isFavorite);

      setIsProjectModalOpenFalse();
    } else {
      projectsStore.addProject(projectValue, projectColor, isFavorite);

      resetProjectSetupValues();
    }
  };

  const setProjectCancel = () => {
    if (isEditMode) {
      setProjectValuesAsTheyWere();
    } else {
      resetProjectSetupValues();
    }
  };

  return {
    projectColors: projectsStore.colors,
    projectValue,
    setProjectValueHandler,
    isProjectModalOpen,
    setIsProjectModalOpenFalse,
    toggleIsProjectModalOpen,
    setProjectConfirm,
    setProjectCancel,
    projectColor,
    setProjectColorHandler,
    isFavorite,
    toggleIsFavorite
  };
};

export default useProjectSetup;
