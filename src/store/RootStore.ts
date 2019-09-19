// utils
import ProjectsStore, {
  IProjectsStore
} from "features/projects/store/ProjectsStore";
import TasksStore, { ITasksStore } from "features/tasks/store/TasksStore";

export interface IRootStore {
  user: string | null;
  projectsStore: IProjectsStore;
  tasksStore: ITasksStore;
}

class RootStore {
  projectsStore: IProjectsStore;
  tasksStore: ITasksStore;

  constructor(public user: string | null) {
    this.projectsStore = new ProjectsStore(this);
    this.tasksStore = new TasksStore(this);
  }
}

export default RootStore;
