import { observable, action, computed } from "mobx";

// utils
import { db } from "config/Auth";
import { IRootStore } from "store/RootStore";

type LabelColor = {
  hash: string;
  name: string;
};

export type Label = {
  label: string;
  value: string;
  color: string;
  isFavorite?: boolean;
  id?: string;
};

export interface LabelsStoreProps {
  readonly rootStore: IRootStore;
  addLabel: (
    labelValue: string,
    labelColor: string,
    isFavorite: boolean
  ) => void;
  deleteLabel: (labelId: string) => void;
  fetchAllLabels: () => void;
}

class LabelsStore implements LabelsStoreProps {
  constructor(readonly rootStore: IRootStore) {}

  @observable
  colors: LabelColor[] = [
    { hash: "#000", name: "Black" },
    { hash: "red", name: "Red" },
    { hash: "blue", name: "Blue" }
  ];

  @observable
  allLabels: Label[] = [];

  @action
  addLabel = (
    labelValue: string,
    labelColor: string,
    isFavorite: boolean
  ): void => {
    this.allLabels = [
      ...this.allLabels,
      {
        label: labelValue,
        value: labelValue,
        color: labelColor,
        isFavorite,
        userId: this.rootStore.user
      }
    ] as Label[];

    db.collection("labels").add({
      label: labelValue,
      value: labelValue,
      color: labelColor,
      isFavorite,
      userId: this.rootStore.user
    });

    this.fetchAllLabels();
  };

  @action
  deleteLabel = (labelId: string) => {
    db.collection("labels")
      .doc(labelId)
      .delete()
      .then(() => {
        console.log(labelId + " deleted");
      })
      .catch(err => {
        console.log(err);
      });

    this.fetchAllLabels();
  };

  @action
  editLabel = (
    labelId: string,
    labelValue: string,
    labelColor: string,
    isFavorite: boolean
  ) => {
    db.collection("labels")
      .doc(labelId)
      .update({
        label: labelValue,
        value: labelValue,
        color: labelColor,
        isFavorite
      })
      .then(() => {
        this.fetchAllLabels();
      });
  };

  @action
  setLabelFavoriteStatus = (labelId: string, isFavorite: boolean) => {
    db.collection("labels")
      .doc(labelId)
      .update({
        isFavorite
      });

    this.fetchAllLabels();
  };

  @action
  fetchAllLabels = () => {
    db.collection("labels")
      .where("userId", "==", this.rootStore.user)
      .get()
      .then(snapshot => {
        const labels = snapshot.docs.map(label => ({
          id: label.id,
          ...label.data()
        }));

        this.allLabels = labels as Label[];
      });
  };
}

export default LabelsStore;
