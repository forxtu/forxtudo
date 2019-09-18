// utils
import ProjectsStore, {
  IProjectsStore
} from "features/projects/store/ProjectsStore";
import TasksStore, { ITasksStore } from "features/tasks/store/TasksStore";

export class RootStore {
  user: string | null;
  projectsStore: IProjectsStore;
  tasksStore: ITasksStore;

  constructor(user: string | null) {
    this.user = user;
    this.projectsStore = new ProjectsStore(this);
    this.tasksStore = new TasksStore(this);
  }
}
