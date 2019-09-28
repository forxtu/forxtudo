import { useState, ChangeEvent } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";

const useProjectCreate = () => {
  const { projectsStore } = useStores();

  const [projectValue, setProjectValue] = useState<string>("");
  const [projectColor, setProjectColor] = useState<string>("#000");

  const {
    value: isFavorite,
    setFalse: setIsFavoriteFalse,
    toggle: toggleIsFavorite
  } = useBoolean(false);

  const {
    value: isProjectModalOpen,
    setFalse: setIsProjectModalOpenFalse,
    toggle: toggleIsProjectModalOpen
  } = useBoolean(false);

  const resetProjectCreateValues = () => {
    setProjectValue("");
    setProjectColor("#000");
    setIsFavoriteFalse();
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

    projectsStore.addProject(projectValue, projectColor, isFavorite);
    resetProjectCreateValues();
  };

  const setProjectCancel = () => {
    resetProjectCreateValues();
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

export default useProjectCreate;
