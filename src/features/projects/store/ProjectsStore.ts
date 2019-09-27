import { observable, action, computed } from "mobx";

// utils
import { db } from "config/Auth";
import { IRootStore } from "store/RootStore";

export type Project = {
  name: string;
  userId: string;
  isDefault?: boolean;
  id?: string;
};

export interface IProjectsStore {
  readonly rootStore: IRootStore;
  initialProjects: Project[];
  defaultProjects: Project[];
  customProjects: Project[];
  selectedProjectId: string;
  setDefaultProjects(user: string): void;
  addProject: (projectValue: string) => void;
  deleteProject: (projectValue: string) => void;
  fetchAllProjects: () => void;
}

class ProjectsStore implements IProjectsStore {
  constructor(readonly rootStore: IRootStore) {}

  @observable
  initialProjects: Project[] = [
    {
      name: "Inbox",
      userId: ""
    }
  ];

  @observable
  allProjects: Project[] = [];

  @observable
  selectedProjectId: string = "";

  @computed
  get defaultProjects() {
    return this.allProjects.filter(project => project.isDefault === true);
  }

  @computed
  get customProjects() {
    return this.allProjects.filter(project => project.isDefault === false);
  }

  @action
  setDefaultProjects = (user: string) => {
    this.initialProjects.forEach((project: any) => {
      db.collection("projects")
        .doc()
        .set({
          name: project.name,
          userId: user,
          isDefault: true
        });
    });
  };

  @action
  addProject = (projectValue: string): void => {
    this.allProjects = [
      ...this.allProjects,
      {
        name: projectValue,
        userId: this.rootStore.user
      }
    ] as Project[];

    db.collection("projects").add({
      name: projectValue,
      userId: this.rootStore.user,
      isDefault: false
    });

    this.fetchAllProjects();
  };

  @action
  deleteProject = (projectId: string) => {
    db.collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        console.log(projectId + " deleted");
      })
      .catch(err => {
        console.log(err);
      });

    this.fetchAllProjects();
  };

  @action
  fetchAllProjects = () => {
    db.collection("projects")
      .where("userId", "==", this.rootStore.user)
      .get()
      .then(snapshot => {
        const projects = snapshot.docs.map(project => ({
          id: project.id,
          ...project.data()
        }));

        this.allProjects = projects as Project[];
      });
  };
}

export default ProjectsStore;
