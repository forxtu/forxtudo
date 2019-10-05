import { useEffect } from "react";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

const useLabels = () => {
  const { labelsStore } = useStores();

  useEffect(() => {
    autorun(() => {
      labelsStore.fetchAllLabels();
    });
  }, []);

  return {
    allLabels: labelsStore.allLabels
  };
};

export default useLabels;
