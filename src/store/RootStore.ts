// utils
import ProjectsStore, {
  IProjectsStore
} from "features/projects/store/ProjectsStore";
import TasksStore, { ITasksStore } from "features/tasks/store/TasksStore";
import LabelsStore, {
  LabelsStoreProps
} from "features/labels/store/LabelsStore";

export interface IRootStore {
  user: string | null;
  projectsStore: IProjectsStore;
  tasksStore: ITasksStore;
  labelsStore: LabelsStoreProps;
}

class RootStore {
  projectsStore: IProjectsStore;
  tasksStore: ITasksStore;
  labelsStore: LabelsStoreProps;

  constructor(public user: string | null) {
    this.projectsStore = new ProjectsStore(this);
    this.tasksStore = new TasksStore(this);
    this.labelsStore = new LabelsStore(this);
  }
}

export default RootStore;
