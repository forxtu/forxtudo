import { observable, action, computed } from "mobx";

// utils
import { db } from "config/Auth";

type Project = {
  name: string;
  userId: string;
};

export interface IProjectsStore {
  rootStore: any;
  initialProjects: Project[];
  defaultProjects: Project[];
  setDefaultProjects(user: string): void;
}

class ProjectsStore implements IProjectsStore {
  rootStore: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @observable
  initialProjects = [
    {
      name: "Inbox",
      userId: ""
    },
    {
      name: "Today",
      userId: ""
    },
    {
      name: "Week",
      userId: ""
    },
    {
      name: "Month",
      userId: ""
    },
    {
      name: "Year",
      userId: ""
    }
  ];

  @computed
  get defaultProjects() {
    return this.initialProjects.map(initProject => ({
      name: initProject.name,
      userId: this.rootStore.user,
      isDefault: true
    }));
  }

  @action
  setDefaultProjects = (user: string) => {
    this.defaultProjects.forEach((initProject: any) => {
      db.collection("projects")
        .doc()
        .set({
          name: initProject.name,
          userId: user,
          isDefault: true
        });
    });
  };
}

export default ProjectsStore;
