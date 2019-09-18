// utils
import ProjectsStore, {
  IProjectsStore
} from "features/projects/store/ProjectsStore";

export class RootStore {
  user: string | null;
  projectsStore: IProjectsStore;

  constructor(user: string | null) {
    this.user = user;
    this.projectsStore = new ProjectsStore(this);
  }
}
