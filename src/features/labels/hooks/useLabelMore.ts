// hooks
import useStores from "hooks/useStores";

// utils
import { Label } from "features/labels/store/LabelsStore";

type UseLabelMore = {
  label: Label;
  setIsMoreOpenToggle: () => void;
};

const useLabelMore = ({ label, setIsMoreOpenToggle }: UseLabelMore) => {
  const { labelsStore } = useStores();

  const editLabelModalHandler = (toggleModal: () => void) => {
    setIsMoreOpenToggle();
    toggleModal();
  };

  const setLabelFavoriteStatusToFalse = () => {
    labelsStore.setLabelFavoriteStatus(label.id, false);
    setIsMoreOpenToggle();
  };

  const setLabelFavoriteStatusToTrue = () => {
    labelsStore.setLabelFavoriteStatus(label.id, true);
    setIsMoreOpenToggle();
  };

  const deleteLabelHandler = (labelId: string) => {
    labelsStore.deleteLabel(labelId);
  };

  return {
    setLabelFavoriteStatusToFalse,
    setLabelFavoriteStatusToTrue,
    editLabelModalHandler,
    deleteLabelHandler
  };
};

export default useLabelMore;
