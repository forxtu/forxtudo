import { observable, action, computed } from "mobx";

// utils
import { db } from "config/Auth";

export type Project = {
  name: string;
  userId: string;
  isDefault?: boolean;
  id?: string;
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
  initialProjects: Project[] = [
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

  @observable
  allProjects: Project[] = [];

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

  @action
  addProject = (projectValue: string): void => {
    this.allProjects = [
      ...this.allProjects,
      {
        name: projectValue,
        userId: this.rootStore.user
      }
    ];

    db.collection("projects").add({
      name: projectValue,
      userId: this.rootStore.user,
      isDefault: false
    });

    this.fetchAllProjects();
  };

  @action
  fetchAllProjects = () => {
    db.collection("projects")
      .where("userId", "==", this.rootStore.user)
      .where("isDefault", "==", false)
      .get()
      .then(snapshot => {
        const projects = snapshot.docs.map(project => ({
          id: project.id,
          ...project.data()
        }));

        this.allProjects = projects as Project[];
      });
  };

  @action
  fetchDefaultProjects = () => {
    db.collection("projects")
      .where("userId", "==", this.rootStore.user)
      .where("isDefault", "==", true)
      .get()
      .then(snapshot => {
        const projects = snapshot.docs.map(project => ({
          id: project.id,
          ...project.data()
        }));

        this.initialProjects = projects as Project[];
      });
  };
}

export default ProjectsStore;
