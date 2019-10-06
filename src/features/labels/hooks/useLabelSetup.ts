import { useState, ChangeEvent } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";

// utils
import { Label } from "features/labels/store/LabelsStore";

type UseLabelSetup = {
  label: Label;
  isEditMode: boolean;
};

const useLabelSetup = ({
  label: { label, color, id, isFavorite: isFavoriteLabel },
  isEditMode
}: UseLabelSetup) => {
  const { labelsStore } = useStores();

  const [labelValue, setLabelValue] = useState<string>(label || "");
  const [labelColor, setLabelColor] = useState<string>(color || "#000");

  const {
    value: isFavorite,
    setValue: setIsFavoritesValue,
    setFalse: setIsFavoriteFalse,
    toggle: toggleIsFavorite
  } = useBoolean(isFavoriteLabel || false);

  const {
    value: isLabelModalOpen,
    setFalse: setIsLabelModalOpenFalse,
    toggle: toggleIsLabelModalOpen
  } = useBoolean(false);

  const resetLabelSetupValues = () => {
    setLabelValue("");
    setLabelColor("#000");
    setIsFavoriteFalse();
    setIsLabelModalOpenFalse();
  };

  const setLabelValuesAsTheyWere = () => {
    setLabelValue(label);
    setLabelColor(color as string);
    setIsFavoritesValue(isFavoriteLabel as boolean);
    setIsLabelModalOpenFalse();
  };

  const setLabelColorHandler = (color: string) => {
    setLabelColor(color);
  };

  const setLabelValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLabelValue(event.currentTarget.value);
  };

  const setLabelConfirm = (e: any) => {
    e.preventDefault();

    if (isEditMode) {
      labelsStore.editLabel(id, labelValue, labelColor, isFavorite);

      setIsLabelModalOpenFalse();
    } else {
      labelsStore.addLabel(labelValue, labelColor, isFavorite);

      resetLabelSetupValues();
    }
  };

  const setLabelCancel = () => {
    if (isEditMode) {
      setLabelValuesAsTheyWere();
    } else {
      resetLabelSetupValues();
    }
  };

  return {
    labelColors: labelsStore.colors,
    labelValue,
    setLabelValueHandler,
    isLabelModalOpen,
    setIsLabelModalOpenFalse,
    toggleIsLabelModalOpen,
    setLabelConfirm,
    setLabelCancel,
    labelColor,
    setLabelColorHandler,
    isFavorite,
    toggleIsFavorite
  };
};

export default useLabelSetup;
